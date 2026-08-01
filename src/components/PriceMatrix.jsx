import React from 'react';
import { DollarSign, ShoppingBag, Tag, TrendingDown, Store, ExternalLink } from 'lucide-react';
import { getStorePurchaseUrl } from '../utils/linkUtils';

export default function PriceMatrix({ winnerData }) {
  if (!winnerData) return null;

  const { gadget, priceInfo } = winnerData;
  const storePrices = priceInfo.allStores || [];

  return (
    <div className="glass-panel" style={{ padding: '24px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Store size={20} color="var(--primary-cyan)" />
            Multi-Store Price Comparison & Direct Purchase Links
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Real-time price auditing for <strong>{gadget.name}</strong> across major Indian e-commerce & retail stores.
          </p>
        </div>

        <div style={{ background: 'rgba(52, 211, 153, 0.12)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '8px 16px', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingDown size={18} /> Max Savings: ₹{priceInfo.potentialSavings.toLocaleString('en-IN')} vs expensive store
        </div>
      </div>

      {/* Grid of Stores */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '16px' }}>
        {storePrices.map((item) => {
          const isCheapest = item.isLowest;
          const storeUrl = getStorePurchaseUrl(item.store, gadget.name);

          return (
            <div
              key={item.store}
              style={{
                background: isCheapest 
                  ? 'linear-gradient(135deg, rgba(52, 211, 153, 0.12), rgba(56, 189, 248, 0.08))' 
                  : 'rgba(255, 255, 255, 0.03)',
                border: isCheapest 
                  ? '2px solid rgba(52, 211, 153, 0.5)' 
                  : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '16px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'all 0.2s ease',
                boxShadow: isCheapest ? '0 0 20px rgba(52, 211, 153, 0.2)' : 'none'
              }}
            >
              {isCheapest && (
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '12px',
                  background: '#34d399',
                  color: '#000000',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  Lowest Price
                </span>
              )}

              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {item.store}
                </div>

                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: isCheapest ? 'var(--accent-emerald)' : 'var(--text-main)', marginBottom: '4px' }}>
                  ₹{item.price.toLocaleString('en-IN')}
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Original MRP: <span style={{ textDecoration: 'line-through' }}>₹{gadget.mrp.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div>
                {isCheapest && (
                  <div style={{ marginBottom: '12px', paddingTop: '10px', borderTop: '1px border-dashed rgba(52,211,153,0.3)', fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                    Coupon: {priceInfo.coupon}
                  </div>
                )}

                <a
                  href={storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isCheapest ? "btn-primary" : "btn-secondary"}
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem', padding: '6px 10px', textDecoration: 'none' }}
                >
                  Buy on {item.store} <ExternalLink size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
