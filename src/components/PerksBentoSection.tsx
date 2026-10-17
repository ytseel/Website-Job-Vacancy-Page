import React from 'react';

export const PerksBentoSection: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-12 pt-6 pb-16 w-full">
      <div className="mb-10 text-center max-w-xl mx-auto">
        <span className="font-sans text-[11px] uppercase tracking-wider text-[#795900] font-bold">
          People First Philosophy
        </span>
        <h3 className="font-serif text-[32px] sm:text-[40px] text-[#001428] font-semibold tracking-tight mt-1">
          Agency Life Without Compromise
        </h3>
        <p className="font-sans text-[15px] sm:text-[16px] text-[#43474d] mt-2 leading-relaxed">
          We build an ecosystem where high-calibre craft thrives alongside sustainable, human-first working practices.
        </p>
      </div>

      {/* Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bento Card 1 */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#001428] group-hover:bg-[#FFCE1B]/20 transition-colors mb-5 border border-[#efeeeb]">
              <span className="material-symbols-outlined text-[26px]">home_work</span>
            </div>
            <h4 className="font-sans text-[20px] font-bold text-[#001428] mb-2">
              Flexible Hybrid Working
            </h4>
            <p className="font-sans text-[15px] text-[#43474d] leading-relaxed">
              Autonomous scheduling with 2 core collaborative studio days and remote flexibility for high-focus strategy and production deep dives.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#efeeeb] flex items-center gap-2 text-[#795900] font-sans text-[13px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FFCE1B]"></span>
            <span>Core Studio Days: Tue / Thu</span>
          </div>
        </div>

        {/* Bento Card 2 */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#F7EDDC] flex items-center justify-center text-[#0B1E3F] group-hover:bg-[#FFCE1B]/30 transition-colors mb-5">
              <span className="material-symbols-outlined text-[26px]">school</span>
            </div>
            <h4 className="font-sans text-[20px] font-bold text-[#001428] mb-2">
              Continuous Learning Stipend
            </h4>
            <p className="font-sans text-[15px] text-[#43474d] leading-relaxed">
              Annual USD $2,500 personal grant for design conferences, UX bootcamps, typography licenses, or creative festival passes anywhere in APAC.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#efeeeb] flex items-center gap-2 text-[#795900] font-sans text-[13px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FFCE1B]"></span>
            <span>100% Agency Subsidised</span>
          </div>
        </div>

        {/* Bento Card 3 */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#ffdea0] flex items-center justify-center text-[#261a00] group-hover:bg-[#FFCE1B]/40 transition-colors mb-5">
              <span className="material-symbols-outlined text-[26px]">train</span>
            </div>
            <h4 className="font-sans text-[20px] font-bold text-[#001428] mb-2">
              Transit-Accessible Studio
            </h4>
            <p className="font-sans text-[15px] text-[#43474d] leading-relaxed">
              Steps away from key MRT interchange hubs, surrounded by artisan coffee bars, curated bookstores, and rooftop dinner destinations.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#efeeeb] flex items-center gap-2 text-[#795900] font-sans text-[13px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FFCE1B]"></span>
            <span>Direct Covered Walkway</span>
          </div>
        </div>
      </div>
    </section>
  );
};
