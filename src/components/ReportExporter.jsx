import React from 'react';
import { Printer, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ReportExporter({ workflowResult, userFilters }) {
  const handlePrint = () => {
    window.print();
  };

  if (!workflowResult) return null;

  const winner = workflowResult.finalWinner;
  const reflection = workflowResult.reflectionResult;

  const formattedLowest = winner ? `₹${winner.priceInfo.lowestPrice.toLocaleString('en-IN')}` : '';
  const formattedBudget = userFilters?.maxBudget ? `₹${userFilters.maxBudget.toLocaleString('en-IN')}` : 'N/A';

  return (
    <div className="glass-panel" style={{ padding: '24px', margin: '24px 24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={20} color="var(--primary-cyan)" />
            Academic Project Report Generator (INR Market)
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Export a formatted AI Advisor evaluation report for your 7th Semester Mini Project submission.
          </p>
        </div>

        <button onClick={handlePrint} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
          <Printer size={16} /> Print / Save as PDF
        </button>
      </div>

      <div id="project-report" style={{ background: '#ffffff', color: '#0f172a', padding: '28px', borderRadius: '12px', fontSize: '0.88rem', lineHeight: '1.5' }}>
        <div style={{ borderBottom: '2px solid #0284c7', paddingBottom: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#0284c7', fontSize: '1.4rem', margin: 0 }}>AI Gadget Advisor - Project Evaluation Report</h2>
            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>7th Semester Mini Project • Agentic AI Architecture (Indian Market)</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.78rem', color: '#64748b' }}>
            Date: {new Date().toLocaleDateString()}<br />
            Status: VERIFIED & APPROVED
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', marginBottom: '8px' }}>1. User Requirements & Constraints</h4>
          <div><strong>Category Filter:</strong> {userFilters?.category || 'All'}</div>
          <div><strong>Max Budget Cap:</strong> {formattedBudget}</div>
          <div><strong>Natural Query:</strong> "{userFilters?.query || 'None'}"</div>
        </div>

        {winner && (
          <div style={{ marginBottom: '16px', background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ color: '#0284c7', margin: '0 0 6px 0' }}>2. Top Recommended Gadget: {winner.gadget.name}</h4>
            <div><strong>Manufacturer:</strong> {winner.gadget.brand} | <strong>Rating:</strong> {winner.gadget.rating} / 5 ({winner.gadget.reviewCount} reviews)</div>
            <div><strong>Lowest Store Price:</strong> {formattedLowest} on {winner.priceInfo.cheapestStore} (Saved {winner.priceInfo.discountPercent}%)</div>
            <div style={{ marginTop: '6px', fontSize: '0.82rem', color: '#334155' }}>
              <strong>Buying Rationale:</strong> {workflowResult.preliminaryRecommendation?.rationale}
            </div>
          </div>
        )}

        {reflection && (
          <div>
            <h4 style={{ color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', marginBottom: '8px' }}>3. Reflection Agent Quality Audit</h4>
            <div><strong>Self-Correction Status:</strong> {reflection.isRefined ? 'Refinement Loop Executed' : '100% Passed'}</div>
            <div><strong>Reflection Rationale:</strong> {reflection.critique}</div>
          </div>
        )}
      </div>
    </div>
  );
}
