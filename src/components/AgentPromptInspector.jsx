import React, { useState } from 'react';
import { Terminal, Code, Cpu, ShieldCheck, Search, DollarSign, MessageSquare, Award } from 'lucide-react';

const AGENT_PROMPTS = [
  {
    id: 'search',
    name: '1. Product Search Tool Agent',
    icon: Search,
    systemPrompt: `You are the Product Search Agent. Filter the product database based on: Category, Max Budget ($), Target Specs (RAM, Storage, GPU, Battery), and User Query. Return JSON array of matching candidates.`,
    sampleOutput: `{\n  "status": "success",\n  "candidatesFound": 4,\n  "appliedFilters": { "category": "Laptops", "maxBudget": 1800 }\n}`
  },
  {
    id: 'price',
    name: '2. Price & Discount Agent',
    icon: DollarSign,
    systemPrompt: `You are the Cross-Platform Price Comparison Agent. Audit store prices across Amazon, Flipkart, Croma, Vijay Sales, and Reliance Digital. Identify lowest price, cheapest store, and savings percentage.`,
    sampleOutput: `{\n  "cheapestStore": "Amazon",\n  "lowestPrice": 1149,\n  "mrp": 1299,\n  "savings": 150,\n  "discountPercent": 12\n}`
  },
  {
    id: 'sentiment',
    name: '3. Review & Sentiment Agent',
    icon: MessageSquare,
    systemPrompt: `You are the Review & Sentiment Analysis Agent. Calculate average customer sentiment index (0-100), verified buyer percentage, extract pros/cons, and flag hardware complaints.`,
    sampleOutput: `{\n  "sentimentScore": 95,\n  "label": "Overwhelmingly Positive",\n  "verifiedBuyers": "100%",\n  "keyStrength": "Silent fanless design"\n}`
  },
  {
    id: 'synthesis',
    name: '4. Recommendation Synthesis Engine',
    icon: Award,
    systemPrompt: `You are the Recommendation Synthesis Agent. Compute Multi-Criteria Decision Score: Score = (Rating * 0.4) + (Value * 0.3) + (Sentiment * 0.3). Rank products and output buying rationale.`,
    sampleOutput: `{\n  "bestPick": "MacBook Air M3 (15-inch)",\n  "totalMatchIndex": 95,\n  "buyingAdvice": "Recommended as #1 choice..." \n}`
  },
  {
    id: 'reflection',
    name: '5. Reflection & Self-Correction Agent',
    icon: ShieldCheck,
    systemPrompt: `You are the Reflection Agent. Perform quality audit against user constraints. Verify budget adherence, spec compliance, and review red-flags. Trigger self-correction loop if flaws exist.`,
    sampleOutput: `{\n  "passed": true,\n  "isRefined": false,\n  "auditLogs": [\n    "✅ [Check Passed]: Price is within budget",\n    "✅ [Check Passed]: Memory requirement verified"\n  ]\n}`
  }
];

export default function AgentPromptInspector() {
  const [activeAgentId, setActiveAgentId] = useState('search');
  const activeAgent = AGENT_PROMPTS.find(a => a.id === activeAgentId) || AGENT_PROMPTS[0];

  return (
    <div className="glass-panel" style={{ padding: '28px', margin: '24px 24px 0 24px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Code size={22} color="var(--primary-cyan)" />
          Agent System Prompts & Telemetry Inspector
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Inspect raw agent system prompts, target capabilities, and JSON output schemas for academic viva defense & grading.
        </p>
      </div>

      {/* Selector Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '20px', paddingBottom: '4px' }}>
        {AGENT_PROMPTS.map(agent => (
          <button
            key={agent.id}
            onClick={() => setActiveAgentId(agent.id)}
            style={{
              background: activeAgentId === agent.id ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.03)',
              border: activeAgentId === agent.id ? '1px solid var(--primary-cyan)' : '1px solid rgba(255,255,255,0.08)',
              color: activeAgentId === agent.id ? 'var(--primary-cyan)' : 'var(--text-muted)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {agent.name}
          </button>
        ))}
      </div>

      {/* Content Viewer */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* System Prompt Box */}
        <div style={{ background: '#040711', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--primary-cyan)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            System Instruction / Agent Persona
          </div>
          <pre style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: '#e2e8f0', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
            {activeAgent.systemPrompt}
          </pre>
        </div>

        {/* JSON Telemetry Output Box */}
        <div style={{ background: '#040711', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            Sample JSON Tool Telemetry Output
          </div>
          <pre style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: '#34d399', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
            {activeAgent.sampleOutput}
          </pre>
        </div>
      </div>
    </div>
  );
}
