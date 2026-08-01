import React from 'react';
import { Layers, ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react';
import { comparePrices } from '../agents/priceComparisonTool';

export default function SamePriceAlternatives({ rankedList = [], currentWinnerId, onSelectAsWinner }) {
  if (!rankedList || rankedList.length <= 1) return null;

  // Filter out current winner to get alternatives in same/similar price range
  const alternatives = rankedList.filter(item => item.gadget.id !== currentWinnerId).slice(0, 4);

  if (alternatives.length === 0) return null;

  return (
    <div className="glass-panel" style={{ padding: '24px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
            <Layers size={20} color="var(--primary-cyan)" />
            More Options in the Same Price Range
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Compare competing products in your budget range and pick the one that best matches your priority.
          </p>
        </div>

        <span className="badge-neon">
          {alternatives.length} Competing Alternatives Found
        </span>
      </div>

      {/* Grid of Same-Price Alternatives */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        {alternatives.map((item) => {
          const { gadget, priceInfo, scores } = item;
          const formattedPrice = `₹${priceInfo.lowestPrice.toLocaleString('en-IN')}`;

          // Differentiating Badge
          let diffTag = "Alternative Choice";
          if (gadget.pros.some(p => p.toLowerCase().includes('battery'))) diffTag = "🔋 Choose for Battery";
          else if (gadget.pros.some(p => p.toLowerCase().includes('camera') || p.toLowerCase().includes('display') || p.toLowerCase().includes('oled'))) diffTag = "📸 Choose for Display & Camera";
          else if (gadget.pros.some(p => p.toLowerCase().includes('value') || p.toLowerCase().includes('cheap'))) diffTag = "💰 Choose for Maximum Savings";
          else if (gadget.pros.some(p => p.toLowerCase().includes('speed') || p.toLowerCase().includes('performance') || p.toLowerCase().includes('processor'))) diffTag = "⚡ Choose for Raw Performance";

          return (
            <div
              key={gadget.id}
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              <div>
                <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: 'var(--primary-cyan)', fontSize: '0.68rem', fontWeight: 700, padding: '4px 8px', borderRadius: '6px', display: 'inline-block', marginBottom: '8px' }}>
                  {diffTag}
                </span>

                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', height: '140px', marginBottom: '12px' }}>
                  <img src={gadget.image} alt={gadget.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(15, 23, 42, 0.85)', color: '#ffffff', fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                    Match: {scores.totalMatchIndex}%
                  </span>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{gadget.brand}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '2px 0 6px 0', lineHeight: '1.3', color: '#ffffff' }}>{gadget.name}</h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#fbbf24', marginBottom: '10px' }}>
                  <Star size={14} fill="#fbbf24" color="#fbbf24" /> {gadget.rating} / 5 <span style={{ color: 'var(--text-muted)' }}>({gadget.reviewCount})</span>
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '12px' }}>
                  {formattedPrice} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>on {priceInfo.cheapestStore}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectAsWinner && onSelectAsWinner(item)}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem', padding: '8px 12px', borderColor: 'var(--primary-cyan)' }}
              >
                Select This as Top Recommendation <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
