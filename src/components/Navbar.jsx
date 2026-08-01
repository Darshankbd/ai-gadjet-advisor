import React from 'react';
import { Cpu, Sparkles, Layers, History, ShieldCheck, Swords, Code, FileText } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, sessionCount, onOpenMemory }) {
  return (
    <header className="glass-panel" style={{ margin: '16px 24px 0 24px', padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', zIndex: 100 }}>
      {/* Brand & Project Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '46px',
          height: '46px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #0284c7, #6366f1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)'
        }}>
          <Cpu size={26} color="#ffffff" />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
              AI Gadget <span className="gradient-text">Advisor</span>
            </h1>
            <span className="badge-neon" style={{ fontSize: '0.65rem' }}>Agentic AI System</span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            7th Sem Mini Project • Multi-Agent Advisor Architecture
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.3)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('advisor')}
          style={{
            background: activeTab === 'advisor' ? 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))' : 'transparent',
            color: activeTab === 'advisor' ? 'var(--primary-cyan)' : 'var(--text-muted)',
            border: activeTab === 'advisor' ? '1px solid rgba(56,189,248,0.4)' : '1px solid transparent',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s'
          }}
        >
          <Sparkles size={15} /> AI Advisor
        </button>

        <button
          onClick={() => setActiveTab('battle')}
          style={{
            background: activeTab === 'battle' ? 'linear-gradient(135deg, rgba(244,63,94,0.2), rgba(251,191,36,0.2))' : 'transparent',
            color: activeTab === 'battle' ? 'var(--accent-rose)' : 'var(--text-muted)',
            border: activeTab === 'battle' ? '1px solid rgba(244,63,94,0.4)' : '1px solid transparent',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s'
          }}
        >
          <Swords size={15} /> Battle Arena
        </button>

        <button
          onClick={() => setActiveTab('compare')}
          style={{
            background: activeTab === 'compare' ? 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))' : 'transparent',
            color: activeTab === 'compare' ? 'var(--primary-cyan)' : 'var(--text-muted)',
            border: activeTab === 'compare' ? '1px solid rgba(56,189,248,0.4)' : '1px solid transparent',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s'
          }}
        >
          <Layers size={15} /> Compare Matrix
        </button>

        <button
          onClick={() => setActiveTab('reflection')}
          style={{
            background: activeTab === 'reflection' ? 'linear-gradient(135deg, rgba(52,211,153,0.2), rgba(56,189,248,0.2))' : 'transparent',
            color: activeTab === 'reflection' ? 'var(--accent-emerald)' : 'var(--text-muted)',
            border: activeTab === 'reflection' ? '1px solid rgba(52,211,153,0.4)' : '1px solid transparent',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s'
          }}
        >
          <ShieldCheck size={15} /> Reflection Logs
        </button>

        <button
          onClick={() => setActiveTab('telemetry')}
          style={{
            background: activeTab === 'telemetry' ? 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(56,189,248,0.2))' : 'transparent',
            color: activeTab === 'telemetry' ? 'var(--primary-violet)' : 'var(--text-muted)',
            border: activeTab === 'telemetry' ? '1px solid rgba(129,140,248,0.4)' : '1px solid transparent',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s'
          }}
        >
          <Code size={15} /> Prompts & Report
        </button>
      </nav>

      {/* Memory & Quick Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onOpenMemory}
          className="btn-secondary"
          style={{ fontSize: '0.82rem', padding: '8px 14px' }}
        >
          <History size={15} color="var(--primary-cyan)" />
          Memory ({sessionCount})
        </button>
      </div>
    </header>
  );
}
