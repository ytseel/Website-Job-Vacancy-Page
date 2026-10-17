import React from 'react';

interface AgencyPagesModalProps {
  page: 'about-us' | 'services' | 'work-portfolio' | 'insights' | null;
  onClose: () => void;
  onNavigateToCareers: () => void;
  onOpenQuote: () => void;
}

export const AgencyPagesModal: React.FC<AgencyPagesModalProps> = ({
  page,
  onClose,
  onNavigateToCareers,
  onOpenQuote
}) => {
  if (!page) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E3F]/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#132E4F]/10 max-h-[90vh] overflow-y-auto my-auto animate-fadeIn">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#efeeeb]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFCE1B]"></span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#795900] font-bold">
              Advertising &amp; More • Atelier Overview
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#efeeeb] flex items-center justify-center text-[#43474d] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* 1. About Us Screen */}
        {page === 'about-us' && (
          <div className="py-6 flex flex-col gap-6">
            <div>
              <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#795900]">
                Our DNA
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] text-[#001428] font-semibold mt-1">
                Editorial Tactile Modernism
              </h2>
              <p className="font-sans text-[16px] text-[#43474d] mt-2 leading-relaxed">
                Advertising &amp; More was founded on a simple conviction: modern brand audiences crave tactile depth, intellectual resonance, and enduring craft in an era overwhelmed by disposable algorithmic noise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb]">
                <h4 className="font-serif text-lg font-bold text-[#001428] mb-1">
                  Atelier Philosophy
                </h4>
                <p className="text-sm text-[#43474d] leading-relaxed">
                  We maintain intentional boutique scale. Every account is directly helmed by partners and senior practitioners, eliminating bloated account layers.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb]">
                <h4 className="font-serif text-lg font-bold text-[#001428] mb-1">
                  Dual-Axis Presence
                </h4>
                <p className="text-sm text-[#43474d] leading-relaxed">
                  Headquartered in New York&apos;s NoHo Creative District with full-spectrum production suites and regional hubs in Kuala Lumpur &amp; Singapore.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7EDDC] border border-[#FFCE1B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#795900]">Ready to join our studio?</span>
                <h5 className="font-serif text-lg font-bold text-[#001428]">Explore active career openings</h5>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToCareers();
                }}
                className="px-5 py-2.5 bg-[#FFCE1B] text-[#0B1E3F] font-bold rounded-lg text-sm shrink-0 shadow-sm"
              >
                View 5 Open Positions &rarr;
              </button>
            </div>
          </div>
        )}

        {/* 2. Services Screen */}
        {page === 'services' && (
          <div className="py-6 flex flex-col gap-6">
            <div>
              <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#795900]">
                Agency Capabilities
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] text-[#001428] font-semibold mt-1">
                Full-Spectrum Brand Craft
              </h2>
              <p className="font-sans text-[16px] text-[#43474d] mt-2 leading-relaxed">
                We integrate strategy, production, and performance into a single unified creative engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#795900]">psychology</span>
                <h4 className="font-serif text-lg font-bold text-[#001428]">Brand Strategy &amp; Identity</h4>
                <p className="text-xs text-[#43474d] leading-relaxed">
                  Category repositioning, editorial brand guidelines, naming, semiotic cultural analysis, and global executive positioning.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#795900]">movie</span>
                <h4 className="font-serif text-lg font-bold text-[#001428]">Film &amp; Content Atelier</h4>
                <p className="text-xs text-[#43474d] leading-relaxed">
                  Commercial directing, high-definition camera rigs, color timing, tactile set fabrication, and cinematic social campaigns.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#795900]">trending_up</span>
                <h4 className="font-serif text-lg font-bold text-[#001428]">Digital Performance Media</h4>
                <p className="text-xs text-[#43474d] leading-relaxed">
                  Omnichannel acquisition engines, creative variant experimentation, multi-touch attribution, and algorithmic scaling.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#795900]">code</span>
                <h4 className="font-serif text-lg font-bold text-[#001428]">Sensorial Web &amp; Technology</h4>
                <p className="text-xs text-[#43474d] leading-relaxed">
                  Tactile web experiences, WebGL 3D product showcases, interactive design systems, and rapid prototype incubators.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="px-6 py-3 bg-[#FFCE1B] text-[#0B1E3F] font-bold rounded-xl text-sm shadow-sm"
              >
                Request Service Proposal &rarr;
              </button>
            </div>
          </div>
        )}

        {/* 3. Work / Portfolio Screen */}
        {page === 'work-portfolio' && (
          <div className="py-6 flex flex-col gap-6">
            <div>
              <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#795900]">
                Case Studies
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] text-[#001428] font-semibold mt-1">
                Selected Breakthrough Work
              </h2>
              <p className="font-sans text-[16px] text-[#43474d] mt-2 leading-relaxed">
                Recent awarded campaigns executed for global visionaries and regional market shapers.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#FFCE1B]/20 text-[#0B1E3F] text-[11px] font-bold px-2 py-0.5 rounded">
                      Cannes Gold Lion 2024
                    </span>
                    <span className="text-xs text-[#74777e]">Fintech Repositioning</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#001428]">
                    Aura Capital: The Tactile Currency of Tomorrow
                  </h4>
                  <p className="text-xs text-[#43474d] mt-1 max-w-lg">
                    Re-architected the entire corporate narrative and cinematic brand world across 6 Southeast Asian markets.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#795900] bg-white px-3 py-1.5 rounded-lg border border-[#efeeeb]">
                  +340% Organic Recall
                </span>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#d9e2ff] text-[#001428] text-[11px] font-bold px-2 py-0.5 rounded">
                      D&amp;AD Yellow Pencil
                    </span>
                    <span className="text-xs text-[#74777e]">Luxury Hospitality</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#001428]">
                    Maison Sauvage: Architectural Spatial Identity
                  </h4>
                  <p className="text-xs text-[#43474d] mt-1 max-w-lg">
                    Full custom typography suite, editorial bookbinding, and sensory digital booking sanctuary.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#795900] bg-white px-3 py-1.5 rounded-lg border border-[#efeeeb]">
                  Sold Out 14 Mo
                </span>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#ffdea0] text-[#261a00] text-[11px] font-bold px-2 py-0.5 rounded">
                      Effie APAC Grand Prix
                    </span>
                    <span className="text-xs text-[#74777e]">Direct-to-Consumer Growth</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#001428]">
                    Kinetic Botanical: Algorithmic Creative Velocity
                  </h4>
                  <p className="text-xs text-[#43474d] mt-1 max-w-lg">
                    42 bespoke video variants tested across regional micro-audiences, scaling monthly GMV from $400k to $3.2M.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#795900] bg-white px-3 py-1.5 rounded-lg border border-[#efeeeb]">
                  8.2x ROAS
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Insights Screen */}
        {page === 'insights' && (
          <div className="py-6 flex flex-col gap-6">
            <div>
              <span className="font-sans text-xs uppercase font-bold tracking-wider text-[#795900]">
                Publications &amp; Monograms
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] text-[#001428] font-semibold mt-1">
                Agency Insights &amp; Cultural Signals
              </h2>
              <p className="font-sans text-[16px] text-[#43474d] mt-2 leading-relaxed">
                Critical perspectives on design philosophy, brand psychology, and regional Asian consumer vectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#795900]">Essay 04 • Strategic Tension</span>
                  <h4 className="font-serif text-lg font-bold text-[#001428] mt-1">
                    Why Algorithmic Homogeneity is Murdering Luxury Desire
                  </h4>
                  <p className="text-xs text-[#43474d] mt-2 leading-relaxed">
                    How automated optimization flattened brand identity into interchangeable corporate minimalism—and the coming tactile renaissance.
                  </p>
                </div>
                <span className="text-[11px] text-[#74777e] mt-4 block">12 min read • By Marcus Vance</span>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#795900]">Report • APAC 2026</span>
                  <h4 className="font-serif text-lg font-bold text-[#001428] mt-1">
                    The Modern Southeast Asian Consumer Archetype
                  </h4>
                  <p className="text-xs text-[#43474d] mt-2 leading-relaxed">
                    A comprehensive demographic and semiotic study across Bangkok, Jakarta, Kuala Lumpur, and Singapore.
                  </p>
                </div>
                <span className="text-[11px] text-[#74777e] mt-4 block">Whitepaper • 48 Pages PDF</span>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom CTA */}
        <div className="pt-4 border-t border-[#efeeeb] flex items-center justify-between">
          <span className="text-xs text-[#74777e]">Advertising &amp; More • All rights reserved</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#001428] text-white rounded-lg text-xs font-bold"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
