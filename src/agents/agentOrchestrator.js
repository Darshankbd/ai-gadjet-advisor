import { searchGadgets } from './searchTool';
import { comparePrices } from './priceComparisonTool';
import { analyzeReviews } from './reviewAnalyzer';
import { generateRecommendations } from './recommendationEngine';
import { reflectAndAudit } from './reflectionAgent';
import { MemoryManager } from './memoryManager';

/**
 * Master Agent Orchestrator Pipeline
 * Runs the end-to-end agentic workflow with real-time status callbacks for UI animations.
 */
export async function runAgenticWorkflow(userConstraints, onProgressUpdate) {
  const steps = [
    { id: 1, name: 'Search Tool Agent', status: 'running', message: 'Filtering 30+ gadgets dataset by budget, category & specs...' },
    { id: 2, name: 'Price & Discount Agent', status: 'pending', message: 'Analyzing store prices (Amazon, Flipkart, Croma, Vijay Sales, Reliance Digital)...' },
    { id: 3, name: 'Review Sentiment Agent', status: 'pending', message: 'Evaluating customer reviews, ratings & verified buyer pros/cons...' },
    { id: 4, name: 'Recommendation Synthesis Engine', status: 'pending', message: 'Computing Multi-Criteria Decision Index (MCDM) & generating top pick...' },
    { id: 5, name: 'Reflection & Self-Correction Agent', status: 'pending', message: 'Auditing constraints, checking for budget overruns & self-correcting...' }
  ];

  const notify = (stepIndex, status, customMessage, extraData = {}) => {
    steps[stepIndex].status = status;
    if (customMessage) steps[stepIndex].message = customMessage;
    if (onProgressUpdate) {
      onProgressUpdate({
        currentStep: stepIndex + 1,
        totalSteps: steps.length,
        steps: [...steps],
        activeAgentName: steps[stepIndex].name,
        ...extraData
      });
    }
  };

  // Helper for smooth realistic agentic simulation delays (350ms)
  const delay = (ms = 350) => new Promise(res => setTimeout(res, ms));

  // STEP 1: Search Agent
  notify(0, 'running');
  await delay(400);
  const searchResult = searchGadgets(userConstraints);
  notify(0, 'completed', `Found ${searchResult.totalFound} matching gadget(s).`);

  // STEP 2: Price Comparison Agent
  notify(1, 'running');
  await delay(450);
  const priceAnalysisList = searchResult.items.map(item => comparePrices(item));
  notify(1, 'completed', `Price comparison complete across 5 e-commerce retailers.`);

  // STEP 3: Review Analysis Agent
  notify(2, 'running');
  await delay(450);
  const reviewAnalysisList = searchResult.items.map(item => analyzeReviews(item));
  notify(2, 'completed', `Sentiment analysis complete across customer reviews.`);

  // STEP 4: Recommendation Synthesis Engine
  notify(3, 'running');
  await delay(500);
  const preliminaryRecommendation = generateRecommendations(searchResult.items, userConstraints);
  notify(3, 'completed', `Synthesized top pick "${preliminaryRecommendation.bestPick?.gadget?.name || 'N/A'}".`);

  // STEP 5: Reflection & Self-Correction Agent
  notify(4, 'running');
  await delay(550);
  const reflectionResult = reflectAndAudit(preliminaryRecommendation, userConstraints);
  notify(4, 'completed', reflectionResult.isRefined ? 'Refinement loop executed & approved.' : 'Constraint audit passed 100%.');

  // STEP 6: Save Memory
  MemoryManager.addSearchToHistory(userConstraints, preliminaryRecommendation);

  // Return Final Unified Result Object
  return {
    searchResult,
    priceAnalysisList,
    reviewAnalysisList,
    preliminaryRecommendation,
    reflectionResult,
    finalWinner: reflectionResult.finalWinner || preliminaryRecommendation.bestPick,
    steps
  };
}
