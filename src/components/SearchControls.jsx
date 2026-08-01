import React from 'react';
import { Search, SlidersHorizontal, Sparkles, XCircle } from 'lucide-react';
import { CATEGORIES } from '../data/gadgetsData';
import VoiceAssistant from './VoiceAssistant';

const SAMPLE_PROMPTS = [
  { label: "📱 Phone under ₹50,000", category: "Smartphones", maxBudget: 50000, query: "" },
  { label: "📱 Flagship Phone under ₹80,000", category: "Smartphones", maxBudget: 80000, query: "camera" },
  { label: "💻 Laptop under ₹50,000", category: "Laptops", maxBudget: 50000, query: "" },
  { label: "🎧 ANC Earbuds under ₹10,000", category: "Audio", maxBudget: 10000, query: "" },
  { label: "⌚ Smartwatch under ₹15,000", category: "Smartwatches", maxBudget: 15000, query: "" }
];

export default function SearchControls({
  filters,
  setFilters,
  onRunWorkflow,
  isExecuting,
  recommendationRationaleText
}) {
  const handleQuickPrompt = (prompt) => {
    const updated = {
      ...filters,
      category: prompt.category,
      maxBudget: prompt.maxBudget,
      query: prompt.query
    };
    setFilters(updated);
    if (onRunWorkflow) onRunWorkflow(updated);
  };

  const handleReset = () => {
    const resetFilters = {
      category: 'All',
      maxBudget: 150000,
      query: '',
      brand: 'All',
      minRating: 0
    };
    setFilters(resetFilters);
    if (onRunWorkflow) onRunWorkflow(resetFilters);
  };

  const handleVoiceInput = (spokenText) => {
    const updated = { ...filters, query: spokenText };
    setFilters(updated);
    if (onRunWorkflow) onRunWorkflow(updated);
  };

  const handleCategoryChange = (e) => {
    const updated = { ...filters, category: e.target.value };
    setFilters(updated);
    if (onRunWorkflow) onRunWorkflow(updated);
  };

  const handleBudgetChange = (e) => {
    const updated = { ...filters, maxBudget: Number(e.target.value) };
    setFilters(updated);
    if (onRunWorkflow) onRunWorkflow(updated);
  };

  const handleRatingChange = (e) => {
    const updated = { ...filters, minRating: Number(e.target.value) };
    setFilters(updated);
    if (onRunWorkflow) onRunWorkflow(updated);
  };

  return (
    <div className="glass-panel" style={{ padding: '24px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} color="var(--primary-cyan)" />
            AI Requirement & Budget Finder (Indian Market)
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Adjust category or drag the budget slider to dynamically update recommendations.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <VoiceAssistant
            onQuerySpoken={handleVoiceInput}
            recommendationText={recommendationRationaleText}
          />

          <button 
            onClick={handleReset}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <XCircle size={14} /> Reset
          </button>
        </div>
      </div>

      {/* Natural Language Query Bar */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <Search size={20} color="var(--primary-cyan)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="e.g. Find me a smartphone with 5000mAh battery and fast charging..."
          value={filters.query}
          onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
          onKeyDown={(e) => e.key === 'Enter' && onRunWorkflow()}
          style={{
            width: '100%',
            padding: '14px 16px 14px 48px',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid var(--border-neon)',
            borderRadius: '14px',
            color: '#ffffff',
            fontSize: '0.95rem',
            outline: 'none',
            transition: 'all 0.2s ease'
          }}
        />
      </div>

      {/* Sample Quick Prompts */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Prompts:</span>
        {SAMPLE_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleQuickPrompt(prompt)}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)',
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary-cyan)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
          >
            {prompt.label}
          </button>
        ))}
      </div>

      {/* Controls Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', alignItems: 'end' }}>
        {/* Category Pills */}
        <div>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Category
          </label>
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--glass-border)',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '0.88rem',
              outline: 'none'
            }}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat} style={{ background: '#090d16', color: '#ffffff' }}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Max Budget Slider */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Max Budget Cap</label>
            <span style={{ fontSize: '0.88rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
              ₹{Number(filters.maxBudget).toLocaleString('en-IN')}
            </span>
          </div>
          <input
            type="range"
            min="5000"
            max="250000"
            step="2500"
            value={filters.maxBudget}
            onChange={handleBudgetChange}
            style={{ width: '100%', accentColor: 'var(--primary-cyan)', cursor: 'pointer' }}
          />
        </div>

        {/* Minimum Rating */}
        <div>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Min Customer Rating
          </label>
          <select
            value={filters.minRating}
            onChange={handleRatingChange}
            style={{
              width: '100%',
              padding: '10px 14px',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--glass-border)',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '0.88rem',
              outline: 'none'
            }}
          >
            <option value="0" style={{ background: '#090d16' }}>Any Rating</option>
            <option value="4.0" style={{ background: '#090d16' }}>★ 4.0 & above</option>
            <option value="4.5" style={{ background: '#090d16' }}>★ 4.5 & above (Top Rated)</option>
            <option value="4.7" style={{ background: '#090d16' }}>★ 4.7 & above (Elite)</option>
          </select>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => onRunWorkflow()}
            disabled={isExecuting}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '0.92rem' }}
          >
            {isExecuting ? 'Agent Team Working...' : 'Run Agentic Advisor'}
          </button>
        </div>
      </div>
    </div>
  );
}
