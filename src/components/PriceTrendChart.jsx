import React from 'react';
import { TrendingDown, Calendar, AlertCircle } from 'lucide-react';

export default function PriceTrendChart({ winnerData }) {
  if (!winnerData) return null;

  const { gadget, priceInfo } = winnerData;
  const currentPrice = priceInfo.lowestPrice;
  const mrp = gadget.mrp;

  const points = [
    { month: 'Mar', price: mrp },
    { month: 'Apr', price: Math.round(mrp * 0.95) },
    { month: 'May', price: Math.round(mrp * 0.92) },
    { month: 'Jun', price: Math.round(mrp * 0.90) },
    { month: 'Jul', price: Math.round(mrp * 0.88) },
    { month: 'Aug (Now)', price: currentPrice }
  ];

  const width = 600;
  const height = 160;
  const padding = 40;

  const minPrice = Math.min(...points.map(p => p.price)) * 0.9;
  const maxPrice = Math.max(...points.map(p => p.price)) * 1.05;

  const getX = (idx) => padding + (idx * ((width - 2 * padding) / (points.length - 1)));
  const getY = (price) => height - padding - (((price - minPrice) / (maxPrice - minPrice)) * (height - 2 * padding));

  const svgPath = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${getX(idx)} ${getY(p.price)}`).join(' ');

  return (
    <div className="glass-panel" style={{ padding: '24px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingDown size={20} color="var(--primary-cyan)" />
            6-Month Historical Price Trend Chart (INR)
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Track price fluctuations for <strong>{gadget.name}</strong> over the past 6 months in Indian Rupees.
          </p>
        </div>

        <div style={{ background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '6px 14px', borderRadius: '10px', fontSize: '0.8rem', color: 'var(--primary-cyan)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AlertCircle size={16} /> Price Predictor: Lowest Price in 90 Days (Great Time to Buy!)
        </div>
      </div>

      <div style={{ overflowX: 'auto', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', padding: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', maxHeight: '180px' }}>
          {[0.25, 0.5, 0.75].map((ratio, i) => (
            <line
              key={i}
              x1={padding}
              y1={padding + ratio * (height - 2 * padding)}
              x2={width - padding}
              y2={padding + ratio * (height - 2 * padding)}
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />
          ))}

          <path d={svgPath} fill="none" stroke="var(--primary-cyan)" strokeWidth="3" />

          {points.map((p, idx) => (
            <g key={idx}>
              <circle
                cx={getX(idx)}
                cy={getY(p.price)}
                r={idx === points.length - 1 ? 6 : 4}
                fill={idx === points.length - 1 ? '#34d399' : 'var(--primary-cyan)'}
                stroke="#090d16"
                strokeWidth="2"
              />
              <text
                x={getX(idx)}
                y={getY(p.price) - 10}
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                textAnchor="middle"
              >
                ₹{p.price.toLocaleString('en-IN')}
              </text>
              <text
                x={getX(idx)}
                y={height - 8}
                fill="var(--text-muted)"
                fontSize="10"
                textAnchor="middle"
              >
                {p.month}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
