import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (tab: 'careers' | 'about-us' | 'services' | 'work-portfolio' | 'insights') => void;
  onOpenCareers: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCareers }) => {
  const [policyModal, setPolicyModal] = useState<string | null>(null);

  return (
    <footer className="w-full bg-[#f5f3f0] text-[#43474d] border-t border-[#efeeeb]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Advertising & More Logo"
                className="h-7 w-auto object-contain opacity-90"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Uw2xbTRLOTVrfKHYUuPpbI1UiH6agWW8xCvF31qBAFQBtsPD4rP2MQ5v9o8a1jZq8wPUxuWpmUKou_dwsHQB0qdlzdNFE5ZLZNQ0pycQ1lDtaM4u-8k7RTNPcR6DGQuRbd6t42-3dbvomi1aytcCM_dwETpyzh8Jff0gNIMPXa3yL-WQr2uJf0ltYIluCHiYEvp6cpIlXL91INGMpT-vPv86bkAZTDJ6EQiut4sr5Fc8StEnMnSo24gzc"
              />
              <span className="font-serif text-[24px] text-[#001428] font-medium tracking-tight">
                Advertising &amp; More
              </span>
            </div>

            <p className="font-sans text-[15px] text-[#43474d] max-w-sm leading-relaxed">
              Editorial tactile modernism in brand strategy, creative direction, and exceptional talent recruitment for world-class enterprises.
            </p>

            <div className="flex items-start gap-2 text-[#43474d] mt-2">
              <span className="material-symbols-outlined text-[20px] text-[#001428] shrink-0 mt-0.5">
                location_on
              </span>
              <span className="font-sans text-[13px] leading-relaxed">
                740 Broadway, 11th Floor, NoHo Creative District, New York, NY 10003
              </span>
            </div>
          </div>

          {/* Explore Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-sans text-[13px] font-bold text-[#001428] uppercase tracking-wider mb-1">
              Explore
            </span>
            <button
              onClick={() => onNavigate('about-us')}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('work-portfolio')}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors"
            >
              Work / Portfolio
            </button>
            <button
              onClick={() => onNavigate('insights')}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors"
            >
              Insights &amp; Press
            </button>
          </div>

          {/* Talent & Culture (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-sans text-[13px] font-bold text-[#001428] uppercase tracking-wider mb-1">
              Talent &amp; Culture
            </span>
            <button
              onClick={onOpenCareers}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors flex items-center gap-2"
            >
              <span>Open Positions</span>
              <span className="bg-[#ffdea0] text-[#261a00] font-sans text-[10px] font-bold px-2 py-0.5 rounded-full">
                Hiring
              </span>
            </button>
            <button
              onClick={onOpenCareers}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors"
            >
              Life at the Agency
            </button>
            <button
              onClick={onOpenCareers}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors"
            >
              Fellowships &amp; Interns
            </button>
            <button
              onClick={onOpenCareers}
              className="text-left font-sans text-[15px] hover:text-[#001428] transition-colors"
            >
              Inclusion &amp; Impact
            </button>
          </div>

          {/* Connect (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-sans text-[13px] font-bold text-[#001428] uppercase tracking-wider mb-1">
              Connect
            </span>
            <div className="flex items-center gap-2 mb-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#efeeeb] flex items-center justify-center text-[#001428] hover:bg-[#FFCE1B] hover:text-[#0B1E3F] transition-colors"
                title="Share & Connect"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                href="mailto:careers@advmore.agency"
                className="w-9 h-9 rounded-lg bg-[#efeeeb] flex items-center justify-center text-[#001428] hover:bg-[#FFCE1B] hover:text-[#0B1E3F] transition-colors"
                title="Email Us"
              >
                <span className="material-symbols-outlined text-[18px]">alternate_email</span>
              </a>
              <button
                onClick={onOpenCareers}
                className="w-9 h-9 rounded-lg bg-[#efeeeb] flex items-center justify-center text-[#001428] hover:bg-[#FFCE1B] hover:text-[#0B1E3F] transition-colors"
                title="Careers Portal"
              >
                <span className="material-symbols-outlined text-[18px]">work</span>
              </button>
            </div>
            <span className="font-sans text-[13px] text-[#43474d]">
              Inquiries:{' '}
              <a href="mailto:hello@advmore.agency" className="text-[#001428] font-semibold hover:underline">
                hello@advmore.agency
              </a>
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#132E4F]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-[13px]">
            <span>&copy; {new Date().getFullYear()} Advertising &amp; More Co. All rights reserved.</span>
            <button
              onClick={() => setPolicyModal('Privacy Policy')}
              className="hover:text-[#001428] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setPolicyModal('Candidate Data & Policies')}
              className="hover:text-[#001428] transition-colors underline-offset-4 hover:underline"
            >
              Candidate Data &amp; Policies
            </button>
            <button
              onClick={() => setPolicyModal('Terms of Service')}
              className="hover:text-[#001428] transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
          </div>
          <span className="font-sans text-[13px] text-[#74777e]">
            Crafted with editorial precision in NYC
          </span>
        </div>
      </div>

      {/* Policy Modal */}
      {policyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E3F]/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#132E4F]/10">
            <div className="flex items-center justify-between pb-3 border-b border-[#efeeeb]">
              <h4 className="font-serif text-xl font-bold text-[#001428]">{policyModal}</h4>
              <button
                onClick={() => setPolicyModal(null)}
                className="w-7 h-7 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#43474d]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
            <div className="py-4 text-xs text-[#43474d] leading-relaxed space-y-2">
              <p>
                Advertising &amp; More maintains strict compliance with the Personal Data Protection Act (PDPA) and international confidential talent management frameworks.
              </p>
              <p>
                All resumes, identity records, and candidate submissions are encrypted with 256-bit SSL protocols and restricted strictly to authorized Talent Partners.
              </p>
              <p>
                We never sell or distribute candidate dossiers to third-party headhunters or advertisers.
              </p>
            </div>
            <div className="pt-3 border-t border-[#efeeeb] flex justify-end">
              <button
                onClick={() => setPolicyModal(null)}
                className="px-4 py-2 bg-[#001428] text-white text-xs font-bold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
