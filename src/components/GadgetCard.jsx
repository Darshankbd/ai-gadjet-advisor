import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { comparePrices } from '../agents/priceComparisonTool';
import { getStorePurchaseUrl } from '../utils/linkUtils';

export default function GadgetCard({ gadget, onSelectGadget }) {
  const priceInfo = comparePrices(gadget);
  const purchaseUrl = getStorePurchaseUrl(priceInfo.cheapestStore, gadget.name);

  return (
    <div 
      className="glass-panel" 
      style={{ 
        padding: '16px', 
        display: 'flex', 
        flexDirection: 'column', 
        justify: 'space-between',
        transition: 'all 0.2s ease',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div onClick={() => onSelectGadget && onSelectGadget(gadget)}>
        <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '160px', marginBottom: '12px' }}>
          <img src={gadget.image} alt={gadget.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <span style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(15, 23, 42, 0.85)', color: 'var(--primary-cyan)', fontSize: '0.68rem', fontWeight: 700, padding: '4px 8px', borderRadius: '6px' }}>
            {gadget.category}
          </span>
        </div>

        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{gadget.brand}</div>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '2px 0 8px 0', lineHeight: '1.3' }}>{gadget.name}</h4>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#fbbf24', marginBottom: '10px' }}>
          <Star size={14} fill="#fbbf24" color="#fbbf24" /> {gadget.rating} <span style={{ color: 'var(--text-muted)' }}>({gadget.reviewCount})</span>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>₹{priceInfo.lowestPrice.toLocaleString('en-IN')}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>₹{gadget.mrp.toLocaleString('en-IN')}</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--primary-cyan)', fontWeight: 600 }}>({priceInfo.cheapestStore})</span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button 
            onClick={() => onSelectGadget && onSelectGadget(gadget)}
            className="btn-secondary" 
            style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '6px 8px' }}
          >
            Inspect AI Specs
          </button>
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '6px 10px', fontSize: '0.78rem', textDecoration: 'none' }}
            title={`Buy on ${priceInfo.cheapestStore}`}
          >
            Buy <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
