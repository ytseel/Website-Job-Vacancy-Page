import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [service, setService] = useState('Brand Repositioning & Architecture');
  const [budgetTier, setBudgetTier] = useState('USD $30k - $60k');
  const [timeline, setTimeline] = useState('6 - 8 Weeks');
  const [clientName, setClientName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E3F]/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#132E4F]/10 max-h-[90vh] overflow-y-auto my-auto animate-fadeIn">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#efeeeb]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FFCE1B]"></span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#795900] font-bold">
                Commercial Partnerships
              </span>
            </div>
            <h3 className="font-serif text-[28px] sm:text-[32px] font-semibold text-[#001428] leading-tight">
              Initiate an Agency Brief
            </h3>
            <p className="font-sans text-[14px] text-[#43474d] mt-1">
              Estimate timeline and receive a bespoke proposal from our Strategy Directorate.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#efeeeb] flex items-center justify-center text-[#43474d] cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FFCE1B] text-[#0B1E3F] flex items-center justify-center text-3xl mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[32px] font-bold">check</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#001428]">Quote Request Lodged</h4>
            <p className="text-sm text-[#43474d] mt-2 max-w-md">
              Thank you for considering Advertising &amp; More. Our Managing Director for Client Solutions will share an initial architectural proposal within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#001428] text-white rounded-lg text-sm font-bold"
            >
              Return to Studio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-5 flex flex-col gap-4 text-sm text-[#1b1c1a]">
            {/* Service Select */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-[#001428]">Core Discipline Required</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="h-11 px-3 bg-[#FAF8F5] rounded-lg border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] text-[#001428] font-medium"
              >
                <option>Brand Repositioning &amp; Architecture</option>
                <option>Commercial Video Production &amp; Atelier Rigs</option>
                <option>Omnichannel Digital Performance &amp; Media Scale</option>
                <option>Interactive WebGL &amp; Bespoke Digital Product</option>
                <option>Retained Agency of Record (AOR)</option>
              </select>
            </div>

            {/* Two column: Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-[#001428]">Target Budget Tier</label>
                <select
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value)}
                  className="h-11 px-3 bg-[#FAF8F5] rounded-lg border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] text-[#001428]"
                >
                  <option>USD $15k - $30k (Sprint)</option>
                  <option>USD $30k - $60k (Standard Platform)</option>
                  <option>USD $60k - $120k (Omnichannel Campaign)</option>
                  <option>USD $120k+ (Enterprise Overhaul)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-[#001428]">Target Delivery Window</label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="h-11 px-3 bg-[#FAF8F5] rounded-lg border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] text-[#001428]"
                >
                  <option>Rush (3 - 4 Weeks)</option>
                  <option>6 - 8 Weeks</option>
                  <option>10 - 12 Weeks</option>
                  <option>Ongoing Retainer</option>
                </select>
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-[#001428]">Your Name / Title</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Marcus Vance, CMO"
                  className="h-11 px-3 bg-[#FAF8F5] rounded-lg border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-[#001428]">Work Email</label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="marcus@enterprise.com"
                  className="h-11 px-3 bg-[#FAF8F5] rounded-lg border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428]"
                />
              </div>
            </div>

            {/* Scope Notes */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-[#001428]">Project Ambition / Context</label>
              <textarea
                rows={3}
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                placeholder="Describe your current brand challenge, key KPI, or upcoming launch date..."
                className="p-3 bg-[#FAF8F5] rounded-lg border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] text-sm"
              />
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#74777e]">Strict NDA protection included</span>
              <button
                type="submit"
                className="px-6 py-3 bg-[#FFCE1B] hover:bg-[#febf14] text-[#0B1E3F] font-bold rounded-xl transition-all shadow-md cursor-pointer"
              >
                Request Proposal &rarr;
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
