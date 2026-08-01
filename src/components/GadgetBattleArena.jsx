import React, { useState } from 'react';
import { Swords, Trophy, Zap, Shield, Star, DollarSign } from 'lucide-react';
import { MOCK_GADGETS } from '../data/gadgetsData';
import { comparePrices } from '../agents/priceComparisonTool';

export default function GadgetBattleArena() {
  const [gadgetAId, setGadgetAId] = useState(MOCK_GADGETS[0]?.id || '');
  const [gadgetBId, setGadgetBId] = useState(MOCK_GADGETS[1]?.id || '');

  const gadgetA = MOCK_GADGETS.find(g => g.id === gadgetAId) || MOCK_GADGETS[0];
  const gadgetB = MOCK_GADGETS.find(g => g.id === gadgetBId) || MOCK_GADGETS[1];

  const priceA = comparePrices(gadgetA);
  const priceB = comparePrices(gadgetB);

  const scoreA = Math.round((gadgetA.rating / 5) * 40 + (priceA.discountPercent * 0.3) + 40);
  const scoreB = Math.round((gadgetB.rating / 5) * 40 + (priceB.discountPercent * 0.3) + 40);

  const winner = scoreA >= scoreB ? gadgetA : gadgetB;
  const isTie = scoreA === scoreB;

  return (
    <div className="glass-panel" style={{ padding: '28px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Swords size={24} color="var(--accent-rose)" />
            Gadget Battle Arena (Head-to-Head Duel)
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Select any two gadgets to fight head-to-head in a live agent performance battle.
          </p>
        </div>

        <div style={{ background: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.4)', padding: '8px 16px', borderRadius: '12px', color: 'var(--accent-rose)', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trophy size={18} color="#fbbf24" /> Arena Winner: {isTie ? "Tied Match" : winner.name}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid var(--border-neon)', padding: '16px', borderRadius: '14px' }}>
          <label style={{ fontSize: '0.78rem', color: 'var(--primary-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>Fighter #1</label>
          <select
            value={gadgetAId}
            onChange={(e) => setGadgetAId(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '6px', background: '#090d16', border: '1px solid var(--glass-border)', color: '#ffffff', borderRadius: '8px', fontWeight: 600 }}
          >
            {MOCK_GADGETS.map(g => (
              <option key={g.id} value={g.id}>{g.name} ({g.brand})</option>
            ))}
          </select>
        </div>

        <div style={{ textAlign: 'center', fontWeight: 900, fontSize: '1.4rem', color: 'var(--accent-rose)', background: 'rgba(244, 63, 94, 0.2)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '1px solid rgba(244, 63, 94, 0.4)' }}>
          VS
        </div>

        <div style={{ background: 'rgba(129, 140, 248, 0.08)', border: '1px solid rgba(129, 140, 248, 0.3)', padding: '16px', borderRadius: '14px' }}>
          <label style={{ fontSize: '0.78rem', color: 'var(--primary-violet)', fontWeight: 700, textTransform: 'uppercase' }}>Fighter #2</label>
          <select
            value={gadgetBId}
            onChange={(e) => setGadgetBId(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '6px', background: '#090d16', border: '1px solid var(--glass-border)', color: '#ffffff', borderRadius: '8px', fontWeight: 600 }}
          >
            {MOCK_GADGETS.map(g => (
              <option key={g.id} value={g.id}>{g.name} ({g.brand})</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Fighter A */}
        <div style={{ background: 'rgba(0, 0, 0, 0.3)', border: scoreA >= scoreB ? '2px solid #fbbf24' : '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', position: 'relative' }}>
          {scoreA >= scoreB && <span style={{ position: 'absolute', top: '-12px', right: '16px', background: '#fbbf24', color: '#000', fontWeight: 800, padding: '2px 10px', borderRadius: '4px', fontSize: '0.72rem' }}>🏆 DUEL WINNER</span>}
          
          <img src={gadgetA.image} alt={gadgetA.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '10px', marginBottom: '12px' }} />
          <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{gadgetA.name}</h4>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '16px' }}>₹{priceA.lowestPrice.toLocaleString('en-IN')} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({priceA.cheapestStore})</span></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Customer Rating</span>
                <span style={{ color: '#fbbf24', fontWeight: 700 }}>{gadgetA.rating} / 5</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: `${(gadgetA.rating / 5) * 100}%`, height: '100%', background: '#fbbf24', borderRadius: '3px' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Discount Index</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>{priceA.discountPercent}% Off</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: `${Math.min(priceA.discountPercent * 3, 100)}%`, height: '100%', background: '#34d399', borderRadius: '3px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Fighter B */}
        <div style={{ background: 'rgba(0, 0, 0, 0.3)', border: scoreB > scoreA ? '2px solid #fbbf24' : '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', position: 'relative' }}>
          {scoreB > scoreA && <span style={{ position: 'absolute', top: '-12px', right: '16px', background: '#fbbf24', color: '#000', fontWeight: 800, padding: '2px 10px', borderRadius: '4px', fontSize: '0.72rem' }}>🏆 DUEL WINNER</span>}

          <img src={gadgetB.image} alt={gadgetB.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '10px', marginBottom: '12px' }} />
          <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{gadgetB.name}</h4>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '16px' }}>₹{priceB.lowestPrice.toLocaleString('en-IN')} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({priceB.cheapestStore})</span></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Customer Rating</span>
                <span style={{ color: '#fbbf24', fontWeight: 700 }}>{gadgetB.rating} / 5</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: `${(gadgetB.rating / 5) * 100}%`, height: '100%', background: '#fbbf24', borderRadius: '3px' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Discount Index</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>{priceB.discountPercent}% Off</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: `${Math.min(priceB.discountPercent * 3, 100)}%`, height: '100%', background: '#34d399', borderRadius: '3px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
