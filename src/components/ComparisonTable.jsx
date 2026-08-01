import React from 'react';
import { Award, Check, DollarSign, Star, Zap } from 'lucide-react';

export default function ComparisonTable({ rankedList = [] }) {
  if (!rankedList || rankedList.length === 0) return null;

  const topItems = rankedList.slice(0, 4);

  return (
    <div className="glass-panel" style={{ padding: '24px', margin: '24px 24px 0 24px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={20} color="var(--primary-cyan)" />
          Side-by-Side Product Comparison Matrix
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Detailed feature matrix comparing prices across Indian retailers, specifications, sentiment scores, and match indexes.
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px', fontSize: '0.85rem' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-muted)', fontWeight: 600 }}>Feature / Metric</th>
              {topItems.map((item, idx) => (
                <th key={item.gadget.id} style={{ textAlign: 'center', padding: '12px 16px', color: '#ffffff', minWidth: '180px' }}>
                  {idx === 0 && (
                    <span style={{ fontSize: '0.68rem', background: '#fbbf24', color: '#000000', padding: '2px 8px', borderRadius: '4px', fontWeight: 800, display: 'inline-block', marginBottom: '4px' }}>
                      ★ BEST MATCH
                    </span>
                  )}
                  <div style={{ fontWeight: 700 }}>{item.gadget.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-cyan)' }}>{item.gadget.brand}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: 'rgba(56, 189, 248, 0.05)', borderRadius: '8px' }}>
              <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--primary-cyan)' }}>Overall Match Index</td>
              {topItems.map((item) => (
                <td key={item.gadget.id} style={{ textAlign: 'center', padding: '14px 16px', fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-cyan)' }}>
                  {item.scores.totalMatchIndex}%
                </td>
              ))}
            </tr>

            <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-muted)' }}>Lowest Store Price</td>
              {topItems.map((item) => (
                <td key={item.gadget.id} style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                  ₹{item.priceInfo.lowestPrice.toLocaleString('en-IN')}
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>on {item.priceInfo.cheapestStore}</div>
                </td>
              ))}
            </tr>

            <tr style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-muted)' }}>Discount Savings</td>
              {topItems.map((item) => (
                <td key={item.gadget.id} style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--text-main)' }}>
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-dim)', marginRight: '6px' }}>₹{item.gadget.mrp.toLocaleString('en-IN')}</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>-{item.priceInfo.discountPercent}%</span>
                </td>
              ))}
            </tr>

            <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-muted)' }}>Rating & Reviews</td>
              {topItems.map((item) => (
                <td key={item.gadget.id} style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--text-main)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 700 }}>
                    <Star size={14} fill="#fbbf24" color="#fbbf24" /> {item.gadget.rating} / 5
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>({item.gadget.reviewCount} buyers)</div>
                </td>
              ))}
            </tr>

            <tr style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-muted)' }}>Sentiment Score</td>
              {topItems.map((item) => (
                <td key={item.gadget.id} style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                  {item.reviewInfo.averageSentiment}% Positive
                </td>
              ))}
            </tr>

            <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-muted)' }}>Key Specification</td>
              {topItems.map((item) => {
                const firstSpecKey = Object.keys(item.gadget.specs)[0];
                const firstSpecVal = item.gadget.specs[firstSpecKey];
                return (
                  <td key={item.gadget.id} style={{ textAlign: 'center', padding: '12px 16px', fontSize: '0.78rem', color: 'var(--text-main)' }}>
                    <strong>{firstSpecKey}:</strong> {firstSpecVal}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
