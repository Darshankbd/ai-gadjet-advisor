import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, RefreshCw, Terminal, Cpu } from 'lucide-react';

export default function ReflectionInspector({ reflectionData, workflowResult }) {
  if (!reflectionData) {
    return (
      <div className="glass-panel" style={{ padding: '32px', margin: '24px 24px 0 24px', textAlign: 'center' }}>
        <ShieldCheck size={40} color="var(--primary-cyan)" style={{ marginBottom: '12px' }} />
        <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Reflection & Self-Correction Inspector</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          Run the AI Advisor to inspect Reflection Agent critique logs, quality verification checks, and refinement loops.
        </p>
      </div>
    );
  }

  const { passed, isRefined, critique, corrections = [], auditLogs = [] } = reflectionData;

  return (
    <div className="glass-panel" style={{ padding: '28px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={22} color="var(--primary-cyan)" />
              Reflection Agent & Self-Correction Inspector
            </h3>
            <span className="badge-neon">Academic Evaluation View</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Audits recommendations against user constraints, checks budget compliance, and triggers self-correction loops.
          </p>
        </div>

        <div style={{
          background: isRefined 
            ? 'rgba(244, 63, 94, 0.15)' 
            : 'rgba(52, 211, 153, 0.15)',
          border: isRefined 
            ? '1px solid rgba(244, 63, 94, 0.4)' 
            : '1px solid rgba(52, 211, 153, 0.4)',
          padding: '8px 16px',
          borderRadius: '12px',
          color: isRefined ? 'var(--accent-rose)' : 'var(--accent-emerald)',
          fontWeight: 700,
          fontSize: '0.88rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          {isRefined ? <RefreshCw size={18} /> : <CheckCircle2 size={18} />}
          {isRefined ? 'Self-Correction Triggered & Approved' : '100% Quality Verification Passed'}
        </div>
      </div>

      {/* Main Rationale Card */}
      <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-neon)', padding: '16px 20px', borderRadius: '14px', marginBottom: '20px' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--primary-cyan)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
          Reflection Agent Executive Summary
        </div>
        <div style={{ fontSize: '0.95rem', color: '#ffffff', lineHeight: '1.5' }}>
          {critique}
        </div>
      </div>

      {/* Refinement Corrections List */}
      {corrections.length > 0 && (
        <div style={{ background: 'rgba(251, 191, 36, 0.08)', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AlertTriangle size={16} /> Modifications Made During Self-Correction Loop:
          </div>
          <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
            {corrections.map((corr, idx) => (
              <li key={idx}>{corr}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Raw Agent Telemetry Console Log */}
      <div>
        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Terminal size={16} color="var(--primary-cyan)" /> Live Agent Audit Console Logs
        </div>

        <div style={{
          background: '#040711',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '16px',
          fontFamily: 'var(--font-code)',
          fontSize: '0.8rem',
          color: '#38bdf8',
          maxHeight: '260px',
          overflowY: 'auto',
          lineHeight: '1.6'
        }}>
          {auditLogs.map((log, idx) => (
            <div key={idx} style={{ marginBottom: '4px' }}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
