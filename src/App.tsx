/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { OPEN_ROLES } from './data/roles';
import { JobRole, SubmittedDossier } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CurrentlyScoutingSidebar } from './components/CurrentlyScoutingSidebar';
import { ApplicationForm } from './components/ApplicationForm';
import { PerksBentoSection } from './components/PerksBentoSection';
import { Footer } from './components/Footer';
import { RoleModal } from './components/RoleModal';
import { RoleDetailsModal } from './components/RoleDetailsModal';
import { QuoteModal } from './components/QuoteModal';
import { DossierDrawer } from './components/DossierDrawer';
import { AgencyPagesModal } from './components/AgencyPagesModals';

export default function App() {
  const [selectedRole, setSelectedRole] = useState<JobRole>(OPEN_ROLES[0]);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [roleDetailsModalRole, setRoleDetailsModalRole] = useState<JobRole | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [dossierDrawerOpen, setDossierDrawerOpen] = useState(false);
  const [agencyPageModal, setAgencyPageModal] = useState<
    'about-us' | 'services' | 'work-portfolio' | 'insights' | null
  >(null);

  // Local storage for submitted dossiers
  const [submittedDossiers, setSubmittedDossiers] = useState<SubmittedDossier[]>(() => {
    try {
      const saved = localStorage.getItem('advmore_dossiers');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return [
      {
        id: 'AM-2025-KL-8912',
        roleId: 'senior-brand-strategist',
        roleTitle: 'Senior Brand Strategist',
        residencyStatus: 'malaysian',
        fullName: 'Sarah Tan Li Wei',
        identificationNumber: '950812-14-5544',
        dateOfBirth: '1995-08-12',
        countryCode: '+60',
        phoneNumber: '12-345 6789',
        currentEmployer: 'Ogilvy Malaysia',
        earliestStartDate: '2025-11-01',
        noticePeriodType: '1 Month Notice',
        linkedinUrl: 'https://linkedin.com/in/sarahtan-strategist',
        portfolioUrl: 'https://readcv.com/sarahtan',
        resumeFileName: 'Sarah_Tan_Resume_2025.pdf',
        resumeFileSize: '2.4 MB',
        consentAgreed: true,
        submittedAt: 'Oct 14, 2025',
        status: 'Partner Review'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('advmore_dossiers', JSON.stringify(submittedDossiers));
    } catch (e) {
      console.error(e);
    }
  }, [submittedDossiers]);

  const handleSelectRole = (role: JobRole) => {
    setSelectedRole(role);
  };

  const handleApplyForRole = (role: JobRole) => {
    setSelectedRole(role);
    const formElement = document.getElementById('talentApplicationForm');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmitSuccess = (newDossier: SubmittedDossier) => {
    setSubmittedDossiers((prev) => [newDossier, ...prev]);
  };

  const handleContactTalentTeam = () => {
    window.location.href = 'mailto:careers@advmore.agency?subject=Inquiry regarding Agency Talent Openings';
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1b1c1a] font-sans antialiased selection:bg-[#FFCE1B] selection:text-[#0B1E3F] min-h-screen flex flex-col">
      {/* Fixed Navigation Header */}
      <Header
        activeTab={agencyPageModal || 'careers'}
        onNavigate={(tab) => {
          if (tab === 'careers') {
            setAgencyPageModal(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setAgencyPageModal(tab);
          }
        }}
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenDossiers={() => setDossierDrawerOpen(true)}
        submittedCount={submittedDossiers.length}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#FAF8F5] flex-1">
        <div className="flex flex-col w-full relative">
          {/* Subtle Ambient Golden / Amber Background Glows */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#FFCE1B]/10 blur-3xl pointer-events-none" />
            <div className="absolute top-96 -left-20 w-80 h-80 rounded-full bg-[#ffdea0]/20 blur-2xl pointer-events-none" />

            {/* 1. Careers Hero Section */}
            <HeroSection
              onLearnMore={(feature) => {
                if (feature === 'Collaborative Culture') {
                  setAgencyPageModal('about-us');
                } else if (feature === 'Award-Winning Campaigns') {
                  setAgencyPageModal('work-portfolio');
                } else {
                  setQuoteModalOpen(true);
                }
              }}
            />

            {/* 2. Main Section: Application Form & Vacancies (Asymmetric 12-Column Pairing) */}
            <section className="max-w-[1280px] mx-auto px-5 lg:px-12 py-8 lg:py-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side (lg:col-span-4): Role Overview & Context Sidebar */}
                <div className="lg:col-span-4">
                  <CurrentlyScoutingSidebar
                    roles={OPEN_ROLES}
                    selectedRole={selectedRole}
                    onSelectRole={handleSelectRole}
                    onViewRoleDetails={(role) => setRoleDetailsModalRole(role)}
                    onContactTalentTeam={handleContactTalentTeam}
                  />
                </div>

                {/* Right / Primary Container (lg:col-span-8): Direct Talent Application Form */}
                <div className="lg:col-span-8">
                  <ApplicationForm
                    selectedRole={selectedRole}
                    onOpenRoleModal={() => setRoleModalOpen(true)}
                    onSubmitSuccess={handleSubmitSuccess}
                  />
                </div>
              </div>
            </section>

            {/* 3. Agency Perks & Working Culture Bento Row */}
            <PerksBentoSection />
          </div>
        </div>
      </main>

      {/* Global Agency Footer */}
      <Footer
        onNavigate={(tab) => {
          if (tab === 'careers') {
            setAgencyPageModal(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setAgencyPageModal(tab);
          }
        }}
        onOpenCareers={() => {
          setAgencyPageModal(null);
          const formElement = document.getElementById('talentApplicationForm');
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Modals & Drawers */}
      <RoleModal
        isOpen={roleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        roles={OPEN_ROLES}
        onSelectRole={handleSelectRole}
      />

      <RoleDetailsModal
        role={roleDetailsModalRole}
        onClose={() => setRoleDetailsModalRole(null)}
        onApplyForRole={handleApplyForRole}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <DossierDrawer
        isOpen={dossierDrawerOpen}
        onClose={() => setDossierDrawerOpen(false)}
        dossiers={submittedDossiers}
      />

      <AgencyPagesModal
        page={agencyPageModal}
        onClose={() => setAgencyPageModal(null)}
        onNavigateToCareers={() => setAgencyPageModal(null)}
        onOpenQuote={() => {
          setAgencyPageModal(null);
          setQuoteModalOpen(true);
        }}
      />
    </div>
  );
}
