import React, { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: 'careers' | 'about-us' | 'services' | 'work-portfolio' | 'insights') => void;
  onOpenQuote: () => void;
  onOpenDossiers: () => void;
  submittedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onOpenQuote,
  onOpenDossiers,
  submittedCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#FAF8F5]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(15,41,66,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Logo & Name */}
        <button
          onClick={() => onNavigate('careers')}
          className="flex items-center gap-4 text-left group focus:outline-none"
        >
          <img
            alt="Advertising & More Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Uw2xbTRLOTVrfKHYUuPpbI1UiH6agWW8xCvF31qBAFQBtsPD4rP2MQ5v9o8a1jZq8wPUxuWpmUKou_dwsHQB0qdlzdNFE5ZLZNQ0pycQ1lDtaM4u-8k7RTNPcR6DGQuRbd6t42-3dbvomi1aytcCM_dwETpyzh8Jff0gNIMPXa3yL-WQr2uJf0ltYIluCHiYEvp6cpIlXL91INGMpT-vPv86bkAZTDJ6EQiut4sr5Fc8StEnMnSo24gzc"
          />
          <span className="font-serif text-[26px] font-medium text-[#001428] tracking-tight hidden sm:inline leading-none">
            Advertising &amp; More
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => onNavigate('about-us')}
            className={`font-sans text-[14px] font-semibold transition-colors py-1 relative ${
              activeTab === 'about-us'
                ? 'text-[#001428] font-bold after:block after:w-1.5 after:h-1.5 after:bg-[#FFCE1B] after:rounded-full after:mx-auto after:mt-1'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => onNavigate('services')}
            className={`font-sans text-[14px] font-semibold transition-colors py-1 relative ${
              activeTab === 'services'
                ? 'text-[#001428] font-bold after:block after:w-1.5 after:h-1.5 after:bg-[#FFCE1B] after:rounded-full after:mx-auto after:mt-1'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Services
          </button>

          <button
            onClick={() => onNavigate('work-portfolio')}
            className={`font-sans text-[14px] font-semibold transition-colors py-1 relative ${
              activeTab === 'work-portfolio'
                ? 'text-[#001428] font-bold after:block after:w-1.5 after:h-1.5 after:bg-[#FFCE1B] after:rounded-full after:mx-auto after:mt-1'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Work / Portfolio
          </button>

          <button
            onClick={() => onNavigate('careers')}
            className={`font-sans text-[14px] font-semibold transition-colors py-1 relative ${
              activeTab === 'careers'
                ? 'text-[#001428] font-bold after:block after:w-1.5 after:h-1.5 after:bg-[#FFCE1B] after:rounded-full after:mx-auto after:mt-1'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Careers
          </button>

          <button
            onClick={() => onNavigate('insights')}
            className={`font-sans text-[14px] font-semibold transition-colors py-1 relative ${
              activeTab === 'insights'
                ? 'text-[#001428] font-bold after:block after:w-1.5 after:h-1.5 after:bg-[#FFCE1B] after:rounded-full after:mx-auto after:mt-1'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Insights
          </button>
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center justify-center bg-[#FFCE1B] text-[#0B1E3F] font-sans text-[14px] font-bold px-5 py-2.5 rounded-lg hover:bg-[#febf14] transition-all shadow-[0_4px_18px_-2px_rgba(15,41,66,0.08),0_2px_6px_-1px_rgba(245,183,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Get a Quote
          </button>

          {/* Dossiers / User Avatar Profile Trigger */}
          <button
            onClick={onOpenDossiers}
            title={submittedCount > 0 ? `${submittedCount} Application(s) on file` : 'Candidate Portal'}
            className="relative w-9 h-9 rounded-full bg-[#001428] text-white flex items-center justify-center shrink-0 hover:ring-2 hover:ring-[#FFCE1B] transition-all cursor-pointer focus:outline-none"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
            {submittedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFCE1B] text-[#0B1E3F] font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                {submittedCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#001428] rounded-lg hover:bg-[#efeeeb] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#efeeeb] bg-[#FAF8F5] px-5 py-4 flex flex-col gap-3 shadow-lg">
          <button
            onClick={() => {
              onNavigate('about-us');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 px-3 rounded-lg font-sans text-[15px] ${
              activeTab === 'about-us' ? 'bg-[#F7EDDC] text-[#001428] font-bold' : 'text-[#43474d]'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => {
              onNavigate('services');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 px-3 rounded-lg font-sans text-[15px] ${
              activeTab === 'services' ? 'bg-[#F7EDDC] text-[#001428] font-bold' : 'text-[#43474d]'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => {
              onNavigate('work-portfolio');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 px-3 rounded-lg font-sans text-[15px] ${
              activeTab === 'work-portfolio' ? 'bg-[#F7EDDC] text-[#001428] font-bold' : 'text-[#43474d]'
            }`}
          >
            Work / Portfolio
          </button>
          <button
            onClick={() => {
              onNavigate('careers');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 px-3 rounded-lg font-sans text-[15px] ${
              activeTab === 'careers' ? 'bg-[#F7EDDC] text-[#001428] font-bold' : 'text-[#43474d]'
            }`}
          >
            Careers (Open Positions)
          </button>
          <button
            onClick={() => {
              onNavigate('insights');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 px-3 rounded-lg font-sans text-[15px] ${
              activeTab === 'insights' ? 'bg-[#F7EDDC] text-[#001428] font-bold' : 'text-[#43474d]'
            }`}
          >
            Insights &amp; Press
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#FFCE1B] text-[#0B1E3F] rounded-lg font-bold text-center text-sm"
            >
              Get a Quote
            </button>
            <button
              onClick={() => {
                onOpenDossiers();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-white border border-[#c3c6ce] text-[#001428] rounded-lg font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">badge</span>
              My Submitted Dossiers ({submittedCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
