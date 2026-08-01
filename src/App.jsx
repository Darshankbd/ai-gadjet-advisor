import React, { useState, useEffect, Component } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import WorkflowPipeline from './components/WorkflowPipeline';
import SearchControls from './components/SearchControls';
import BestRecommendationCard from './components/BestRecommendationCard';
import SamePriceAlternatives from './components/SamePriceAlternatives';
import ComparisonTable from './components/ComparisonTable';
import PriceMatrix from './components/PriceMatrix';
import ReflectionInspector from './components/ReflectionInspector';
import MemoryHistoryModal from './components/MemoryHistoryModal';
import GadgetCard from './components/GadgetCard';
import GadgetBattleArena from './components/GadgetBattleArena';
import PriceTrendChart from './components/PriceTrendChart';
import AgentPromptInspector from './components/AgentPromptInspector';
import ReportExporter from './components/ReportExporter';
import { AlertCircle } from 'lucide-react';

import { runAgenticWorkflow } from './agents/agentOrchestrator';
import { MemoryManager } from './agents/memoryManager';
import { MOCK_GADGETS } from './data/gadgetsData';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#ffffff', textAlign: 'center', background: '#090d16', minHeight: '100vh' }}>
          <h2 style={{ color: '#f43f5e', marginBottom: '12px' }}>Application Encountered an Error</h2>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>{this.state.error?.toString()}</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ background: '#38bdf8', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
          >
            Reload Dashboard
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainDashboard() {
  const [activeTab, setActiveTab] = useState('advisor');
  const [filters, setFilters] = useState({
    category: 'All',
    maxBudget: 150000,
    query: '',
    brand: 'All',
    minRating: 0
  });

  const [isExecuting, setIsExecuting] = useState(false);
  const [pipelineProgress, setPipelineProgress] = useState({
    currentStep: 0,
    totalSteps: 5,
    steps: [
      { id: 1, name: 'Search Tool Agent', status: 'pending', message: 'Filters mock gadgets dataset by category & specs' },
      { id: 2, name: 'Price & Discount Agent', status: 'pending', message: 'Analyzes prices across Amazon.in, Flipkart, Croma, etc.' },
      { id: 3, name: 'Review Sentiment Agent', status: 'pending', message: 'Evaluates customer reviews & verified sentiment' },
      { id: 4, name: 'Recommendation Synthesis Engine', status: 'pending', message: 'Computes Multi-Criteria Decision Index (MCDM)' },
      { id: 5, name: 'Reflection & Self-Correction Agent', status: 'pending', message: 'Audits constraints & triggers refinement loops' }
    ],
    activeAgentName: ''
  });

  const [workflowResult, setWorkflowResult] = useState(null);
  const [activeWinnerOverride, setActiveWinnerOverride] = useState(null);
  const [isMemoryOpen, setIsMemoryOpen] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);

  const refreshMemoryCount = () => {
    try {
      const memory = MemoryManager.getMemory();
      setSessionCount(memory?.sessionQueriesCount || 0);
    } catch (e) {
      console.warn("Memory count error:", e);
    }
  };

  useEffect(() => {
    refreshMemoryCount();
    handleRunWorkflow();
  }, []);

  const handleRunWorkflow = async (customFilters) => {
    const targetFilters = customFilters || filters;
    setIsExecuting(true);
    setActiveWinnerOverride(null);

    try {
      const result = await runAgenticWorkflow(targetFilters, (progressData) => {
        setPipelineProgress(progressData);
      });

      setWorkflowResult(result);
      refreshMemoryCount();

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    } catch (err) {
      console.error("Workflow Execution Error:", err);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleSelectGadgetCard = (gadget) => {
    const updated = {
      ...filters,
      category: gadget.category,
      query: gadget.name
    };
    setFilters(updated);
    setActiveTab('advisor');
    handleRunWorkflow(updated);
  };

  const handleSelectAlternativeWinner = (alternativeItem) => {
    setActiveWinnerOverride(alternativeItem);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // ignore
    }
  };

  const activeWinner = activeWinnerOverride || workflowResult?.finalWinner;

  return (
    <div style={{ paddingBottom: '60px' }}>
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sessionCount={sessionCount}
        onOpenMemory={() => setIsMemoryOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Tab 1: AI Advisor & Workflow */}
        {activeTab === 'advisor' && (
          <>
            {/* Real-time Agent Execution Pipeline */}
            <WorkflowPipeline
              steps={pipelineProgress.steps}
              activeAgentName={pipelineProgress.activeAgentName}
            />

            {/* Input Controls */}
            <SearchControls
              filters={filters}
              setFilters={setFilters}
              onRunWorkflow={handleRunWorkflow}
              isExecuting={isExecuting}
              recommendationRationaleText={workflowResult?.preliminaryRecommendation?.rationale}
            />

            {/* Fallback Notice Banner if Strict Budget yielded 0 exact matches */}
            {workflowResult?.searchResult?.isFallbackApplied && (
              <div style={{ background: 'rgba(251, 191, 36, 0.12)', border: '1px solid rgba(251, 191, 36, 0.4)', color: 'var(--accent-amber)', padding: '14px 20px', borderRadius: '12px', margin: '24px 24px 0 24px', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle size={20} />
                {workflowResult.searchResult.fallbackMessage}
              </div>
            )}

            {/* Top Winner Card */}
            {activeWinner && (
              <>
                <BestRecommendationCard
                  winnerData={activeWinner}
                  reflectionData={workflowResult?.reflectionResult}
                />

                {/* Same Price Range Competing Alternatives */}
                <SamePriceAlternatives
                  rankedList={workflowResult?.preliminaryRecommendation?.allRanked}
                  currentWinnerId={activeWinner.gadget.id}
                  onSelectAsWinner={handleSelectAlternativeWinner}
                />

                {/* Historical Price Trend Chart */}
                <PriceTrendChart winnerData={activeWinner} />

                {/* Price Comparison Matrix for Winner */}
                <PriceMatrix winnerData={activeWinner} />

                {/* Side by side comparison table */}
                {workflowResult?.preliminaryRecommendation?.allRanked?.length > 1 && (
                  <ComparisonTable rankedList={workflowResult.preliminaryRecommendation.allRanked} />
                )}
              </>
            )}

            {/* Browse All Gadgets Catalogue Grid */}
            <div style={{ padding: '0 24px', marginTop: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>
                  Browse All Gadgets ({MOCK_GADGETS.length} products in database)
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Click any product card to analyze with AI Advisor</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {MOCK_GADGETS.map(g => (
                  <GadgetCard key={g.id} gadget={g} onSelectGadget={handleSelectGadgetCard} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Tab 2: Battle Arena Duel */}
        {activeTab === 'battle' && (
          <div style={{ marginTop: '16px' }}>
            <GadgetBattleArena />
          </div>
        )}

        {/* Tab 3: Comparison Matrix Only */}
        {activeTab === 'compare' && (
          <div style={{ marginTop: '16px' }}>
            {workflowResult ? (
              <>
                <ComparisonTable rankedList={workflowResult.preliminaryRecommendation?.allRanked} />
                <PriceMatrix winnerData={activeWinner} />
              </>
            ) : (
              <div className="glass-panel" style={{ padding: '32px', margin: '24px', textAlign: 'center' }}>
                <h3>No comparison active</h3>
                <p style={{ color: 'var(--text-muted)' }}>Run the AI Advisor to compare gadgets.</p>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Reflection Agent Inspector */}
        {activeTab === 'reflection' && (
          <div style={{ marginTop: '16px' }}>
            <ReflectionInspector
              reflectionData={workflowResult?.reflectionResult}
              workflowResult={workflowResult}
            />
          </div>
        )}

        {/* Tab 5: Prompts Inspector & Academic Report Exporter */}
        {activeTab === 'telemetry' && (
          <div style={{ marginTop: '16px' }}>
            <ReportExporter workflowResult={workflowResult} userFilters={filters} />
            <AgentPromptInspector />
          </div>
        )}
      </main>

      {/* Memory History Modal */}
      <MemoryHistoryModal
        isOpen={isMemoryOpen}
        onClose={() => setIsMemoryOpen(false)}
        onRefreshMemory={refreshMemoryCount}
      />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <MainDashboard />
    </ErrorBoundary>
  );
}
