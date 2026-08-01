import React from 'react';
import { Award, Star, Tag, Check, AlertTriangle, ShieldCheck, ShoppingCart, ExternalLink, Sparkles, Box, Shield, Zap, Monitor, Cpu, Camera, BatteryCharging } from 'lucide-react';
import { getStorePurchaseUrl } from '../utils/linkUtils';

export default function BestRecommendationCard({ winnerData, reflectionData }) {
  if (!winnerData) return null;

  const { gadget, priceInfo, reviewInfo, scores } = winnerData;
  const isRefined = reflectionData?.isRefined;
  const investmentAdvice = reflectionData?.investmentAdvice;

  const formattedLowest = `₹${priceInfo?.lowestPrice?.toLocaleString('en-IN')}`;
  const formattedMrp = `₹${gadget.mrp?.toLocaleString('en-IN')}`;
  const formattedSavings = `₹${priceInfo?.savingsVersusMrp?.toLocaleString('en-IN')}`;

  const cheapestUrl = getStorePurchaseUrl(priceInfo?.cheapestStore, gadget.name);
  const amazonUrl = getStorePurchaseUrl('Amazon.in', gadget.name);
  const flipkartUrl = getStorePurchaseUrl('Flipkart', gadget.name);

  const categoryIcons = {
    "Display & Screen": Monitor,
    "Performance & Processor": Cpu,
    "Graphics & Multimedia": Zap,
    "Camera System": Camera,
    "Battery & Charging": BatteryCharging,
    "Build & Security": Shield,
    "Operating System & Ports": Cpu,
    "Warranty & In-Box": Box
  };

  return (
    <div 
      className="glass-panel" 
      style={{ 
        padding: '28px', 
        margin: '24px 24px 0 24px', 
        border: '1px solid rgba(56, 189, 248, 0.4)',
        boxShadow: '0 0 35px rgba(56, 189, 248, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* AI Investment Advisory Callout Banner */}
      {investmentAdvice && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(244, 63, 94, 0.15))',
          border: '1px solid rgba(251, 191, 36, 0.5)',
          padding: '16px 20px',
          borderRadius: '14px',
          marginBottom: '24px',
          color: '#ffffff',
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fbbf24', fontWeight: 800, fontSize: '0.95rem', marginBottom: '6px' }}>
            <Sparkles size={20} /> AI Investment Advisory Notice
          </div>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#f8fafc' }}>
            {investmentAdvice.message}
          </div>
          <div style={{ marginTop: '8px', fontSize: '0.78rem', color: '#fbbf24', fontWeight: 600 }}>
            💡 Tip: We have displayed the best entry option ({gadget.name}) above to help you plan your purchase!
          </div>
        </div>
      )}

      {/* Top Banner Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            color: '#000000',
            fontWeight: 800,
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.3)'
          }}>
            <Award size={16} /> #1 TOP RECOMMENDED GADGET
          </span>

          {isRefined ? (
            <span className="badge-neon" style={{ background: 'rgba(244, 63, 94, 0.2)', color: 'var(--accent-rose)', borderColor: 'rgba(244, 63, 94, 0.4)' }}>
              Self-Corrected by Reflection Agent
            </span>
          ) : (
            <span className="badge-emerald" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={14} /> Reflection Approved (100% Passed)
            </span>
          )}
        </div>

        {/* Overall Match Index Score */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.4)', padding: '8px 16px', borderRadius: '14px', border: '1px solid var(--border-neon)' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Overall Match Index:</span>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-cyan)' }}>
            {scores?.totalMatchIndex || 95}%
          </span>
        </div>
      </div>

      {/* Main Product Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '28px' }}>
        {/* Left Column: Image */}
        <div>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '260px', background: '#0f172a', border: '1px solid var(--glass-border)' }}>
            <img
              src={gadget.image}
              alt={gadget.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--primary-cyan)',
              border: '1px solid var(--border-neon)'
            }}>
              {gadget.badge || 'Editor Pick'}
            </div>
          </div>

          {/* Customer Rating */}
          <div style={{ marginTop: '16px', background: 'rgba(0,0,0,0.25)', padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
              <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={16} fill="#fbbf24" color="#fbbf24" /> {gadget.rating} / 5 ({gadget.reviewCount} reviews)
              </span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>
                {reviewInfo?.averageSentiment}% Positive Sentiment
              </span>
            </div>

            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${reviewInfo?.averageSentiment || 85}%`, height: '100%', background: 'linear-gradient(90deg, #34d399, #38bdf8)' }} />
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Direct Purchase Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)', fontWeight: 700 }}>{gadget.brand} • {gadget.category}</span>
            <h2 style={{ fontSize: '1.7rem', margin: '4px 0 12px 0', lineHeight: '1.2' }}>{gadget.name}</h2>

            {/* Prices */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                {formattedLowest}
              </span>
              <span style={{ fontSize: '1.1rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                {formattedMrp}
              </span>
              <span className="badge-emerald" style={{ fontSize: '0.82rem' }}>
                Save {priceInfo?.discountPercent}% ({formattedSavings})
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)', fontWeight: 600 }}>
                Best Price on <strong>{priceInfo?.cheapestStore}</strong>
              </span>
            </div>

            {/* Bank Coupons */}
            {priceInfo?.coupon && (
              <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px dashed rgba(52, 211, 153, 0.3)', padding: '10px 14px', borderRadius: '10px', fontSize: '0.82rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Tag size={16} /> Coupon Code: <strong>{priceInfo.coupon}</strong> | {priceInfo.bankOffer}
              </div>
            )}

            {/* Pros/Cons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(52, 211, 153, 0.05)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={14} /> Key Advantages
                </div>
                <ul style={{ fontSize: '0.78rem', color: 'var(--text-main)', paddingLeft: '16px', lineHeight: '1.4' }}>
                  {gadget.pros.map((pro, idx) => <li key={idx}>{pro}</li>)}
                </ul>
              </div>

              <div style={{ background: 'rgba(244, 63, 94, 0.05)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(244, 63, 94, 0.2)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-rose)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertTriangle size={14} /> Keep in Mind
                </div>
                <ul style={{ fontSize: '0.78rem', color: 'var(--text-main)', paddingLeft: '16px', lineHeight: '1.4' }}>
                  {gadget.cons.map((con, idx) => <li key={idx}>{con}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Direct Purchase Link Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={cheapestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', minWidth: '180px', textDecoration: 'none' }}
            >
              <ShoppingCart size={18} /> Buy on {priceInfo?.cheapestStore} ({formattedLowest}) <ExternalLink size={14} />
            </a>

            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 16px', textDecoration: 'none', fontSize: '0.82rem' }}
            >
              Amazon.in <ExternalLink size={14} />
            </a>

            <a
              href={flipkartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 16px', textDecoration: 'none', fontSize: '0.82rem' }}
            >
              Flipkart <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Amazon & Flipkart Style Detailed Specifications Matrix */}
      <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '14px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-cyan)' }}>
          <Box size={20} /> Amazon.in & Flipkart Style Technical Specifications
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          {Object.entries(gadget.specs || {}).map(([specCategory, specDetail]) => {
            const IconComp = categoryIcons[specCategory] || Box;

            return (
              <div key={specCategory} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-cyan)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <IconComp size={14} /> {specCategory}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, lineHeight: '1.4' }}>
                  {specDetail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
