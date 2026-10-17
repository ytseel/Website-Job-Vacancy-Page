import React from 'react';

interface HeroSectionProps {
  onLearnMore?: (feature: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-12 pt-10 pb-6 w-full">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 bg-[#f5f3f0] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#efeeeb]">
            <span className="w-2 h-2 rounded-full bg-[#FFCE1B] animate-pulse"></span>
            <span className="font-sans text-[11px] font-bold text-[#0B1E3F] tracking-widest uppercase">
              We Are Expanding • Talent Acquisition
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[60px] text-[#001428] tracking-tight mb-3 leading-[1.08] font-semibold">
            Build Your Future With{' '}
            <span className="italic font-normal text-[#132E4F]">
              Advertising &amp; More.
            </span>
          </h1>

          {/* Recruitment Subheading */}
          <p className="font-sans text-[17px] sm:text-[18px] text-[#43474d] max-w-2xl leading-relaxed">
            Join an agile collective of brand strategists, creative technologists, and media
            innovators shaping breakthrough brand experiences across Southeast Asia and beyond.
          </p>
        </div>

        {/* Quick Agency Stats Badge */}
        <div className="hidden xl:flex flex-col items-end gap-1 bg-white p-4 rounded-xl shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5">
          <div className="flex items-center gap-1 text-[#FFCE1B]">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-filled text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <span className="font-sans text-[14px] font-semibold text-[#001428]">
            Top Creative Agency Employer 2024
          </span>
          <span className="font-sans text-[12px] text-[#43474d]">
            Regional Spikes &amp; Effie Network
          </span>
        </div>
      </div>

      {/* Value Highlights Mini-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Value 1 */}
        <div
          onClick={() => onLearnMore?.('Collaborative Culture')}
          className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5 hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
        >
          <div className="w-12 h-12 rounded-lg bg-[#F7EDDC] flex items-center justify-center shrink-0 text-[#0B1E3F]">
            <span className="material-symbols-outlined text-[26px]">groups</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[17px] font-semibold text-[#001428]">
              Collaborative Culture
            </span>
            <span className="font-sans text-[13px] text-[#43474d]">
              Flat hierarchies, cross-border squads
            </span>
          </div>
        </div>

        {/* Value 2 */}
        <div
          onClick={() => onLearnMore?.('Competitive Growth')}
          className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5 hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
        >
          <div className="w-12 h-12 rounded-lg bg-[#ffdea0] flex items-center justify-center shrink-0 text-[#261a00]">
            <span className="material-symbols-outlined text-[26px]">trending_up</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[17px] font-semibold text-[#001428]">
              Competitive Growth
            </span>
            <span className="font-sans text-[13px] text-[#43474d]">
              Annual equity pool &amp; learning budget
            </span>
          </div>
        </div>

        {/* Value 3 */}
        <div
          onClick={() => onLearnMore?.('Award-Winning Campaigns')}
          className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5 hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
        >
          <div className="w-12 h-12 rounded-lg bg-[#d9e2ff] flex items-center justify-center shrink-0 text-[#001428]">
            <span className="material-symbols-outlined text-[26px]">military_tech</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[17px] font-semibold text-[#001428]">
              Award-Winning Campaigns
            </span>
            <span className="font-sans text-[13px] text-[#43474d]">
              Cannes Lions, D&amp;AD &amp; Effie winners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
