import React from 'react';
import { History, X, Trash2, Clock, Sparkles } from 'lucide-react';
import { MemoryManager } from '../agents/memoryManager';

export default function MemoryHistoryModal({ isOpen, onClose, onRefreshMemory }) {
  if (!isOpen) return null;

  const memory = MemoryManager.getMemory();
  const searches = memory.recentSearches || [];

  const handleClear = () => {
    MemoryManager.clearMemory();
    if (onRefreshMemory) onRefreshMemory();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '580px', padding: '24px', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <History size={22} color="var(--primary-cyan)" />
            <h3 style={{ fontSize: '1.2rem' }}>Agent Memory & Search History</h3>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* User Session Profile Stats */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Session Searches</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-cyan)' }}>{memory.sessionQueriesCount || 0}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last Selected Category</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{memory.userPreferences?.lastCategory || 'All'}</div>
          </div>
        </div>

        {/* History List */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '10px' }}>
            Recent Advisor Recommendations
          </div>

          {searches.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              No search history recorded in session memory yet.
            </div>
          ) : (
            searches.map(item => (
              <div key={item.id} style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                  <span className="badge-emerald" style={{ fontSize: '0.68rem' }}>
                    Match: {item.matchScore}%
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                  Query: "{item.query.query || 'Category Filter'}" (Budget: ${item.query.maxBudget || 'Any'})
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary-cyan)', marginTop: '4px' }}>
                  Recommended: {item.recommendedProduct}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button onClick={handleClear} className="btn-secondary" style={{ color: 'var(--accent-rose)', fontSize: '0.8rem' }}>
            <Trash2 size={14} /> Clear Session Memory
          </button>
          <button onClick={onClose} className="btn-primary" style={{ fontSize: '0.85rem' }}>
            Close Memory
          </button>
        </div>
      </div>
    </div>
  );
}
