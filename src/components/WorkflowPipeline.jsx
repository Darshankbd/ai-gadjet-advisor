import React from 'react';
import { Search, DollarSign, MessageSquare, Award, RefreshCw, CheckCircle2, Loader2 } from 'lucide-react';

export default function WorkflowPipeline({ steps = [], activeAgentName }) {
  const iconMap = {
    1: Search,
    2: DollarSign,
    3: MessageSquare,
    4: Award,
    5: RefreshCw
  };

  return (
    <div className="glass-panel" style={{ padding: '20px 24px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-cyan)', boxShadow: '0 0 10px var(--primary-cyan)' }}></span>
          Multi-Agent Workflow Execution Pipeline
        </h3>
        {activeAgentName && (
          <span className="badge-neon animate-pulse-glow">
            Active: {activeAgentName}
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        {steps.map((step) => {
          const IconComponent = iconMap[step.id] || Search;
          const isRunning = step.status === 'running';
          const isCompleted = step.status === 'completed';

          return (
            <div
              key={step.id}
              style={{
                background: isRunning 
                  ? 'rgba(56, 189, 248, 0.12)' 
                  : isCompleted 
                    ? 'rgba(52, 211, 153, 0.08)' 
                    : 'rgba(255, 255, 255, 0.02)',
                border: isRunning 
                  ? '1px solid rgba(56, 189, 248, 0.5)' 
                  : isCompleted 
                    ? '1px solid rgba(52, 211, 153, 0.3)' 
                    : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '12px 14px',
                transition: 'all 0.3s ease',
                boxShadow: isRunning ? '0 0 15px rgba(56, 189, 248, 0.2)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: isRunning ? 'var(--primary-cyan)' : isCompleted ? 'var(--accent-emerald)' : 'var(--text-muted)'
                }}>
                  <IconComponent size={16} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>Step {step.id}</span>
                </div>
                
                {isRunning && <Loader2 size={16} className="animate-spin" style={{ animation: 'spinSlow 1.5s linear infinite', color: 'var(--primary-cyan)' }} />}
                {isCompleted && <CheckCircle2 size={16} color="var(--accent-emerald)" />}
              </div>

              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                {step.name}
              </div>
              
              <div style={{ fontSize: '0.72rem', color: isRunning ? 'var(--primary-cyan)' : 'var(--text-muted)', lineHeight: '1.3' }}>
                {step.message}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
