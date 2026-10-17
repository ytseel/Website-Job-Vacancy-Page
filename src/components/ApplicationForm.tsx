import React, { useState, useRef } from 'react';
import { JobRole, ResidencyStatus, ApplicationFormData, SubmittedDossier } from '../types';

interface ApplicationFormProps {
  selectedRole: JobRole;
  onOpenRoleModal: () => void;
  onSubmitSuccess: (dossier: SubmittedDossier) => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  selectedRole,
  onOpenRoleModal,
  onSubmitSuccess
}) => {
  const [residency, setResidency] = useState<ResidencyStatus>('malaysian');
  const [fullName, setFullName] = useState('Sarah Tan Li Wei');
  const [idNumber, setIdNumber] = useState('950812-14-5544');
  const [dob, setDob] = useState('1995-08-12');
  const [countryCode, setCountryCode] = useState('+60');
  const [phoneNumber, setPhoneNumber] = useState('12-345 6789');
  const [currentEmployer, setCurrentEmployer] = useState('Ogilvy & Mather Malaysia');
  
  // Set default starting date 1 month from today
  const defaultDate = new Date();
  defaultDate.setMonth(defaultDate.getMonth() + 1);
  const [startDate, setStartDate] = useState(defaultDate.toISOString().split('T')[0]);
  const [selectedNoticeChip, setSelectedNoticeChip] = useState<string>('1 Month Notice');

  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/in/sarahtan-strategist');
  const [portfolioUrl, setPortfolioUrl] = useState('https://readcv.com/sarahtan');

  // File state
  const [attachedFile, setAttachedFile] = useState<{ name: string; size: string } | null>({
    name: 'Sarah_Tan_Resume_2025.pdf',
    size: '2.4 MB'
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Consent & Form State
  const [consentAgreed, setConsentAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedDossier | null>(null);

  // Quick select notice period
  const handleNoticeSelect = (type: 'Immediate' | '1 Month' | '2 Months') => {
    setSelectedNoticeChip(type === 'Immediate' ? 'Immediate' : type === '1 Month' ? '1 Month Notice' : '2 Months');
    const target = new Date();
    if (type === 'Immediate') {
      target.setDate(target.getDate() + 7);
    } else if (type === '1 Month') {
      target.setMonth(target.getMonth() + 1);
    } else {
      target.setMonth(target.getMonth() + 2);
    }
    setStartDate(target.toISOString().split('T')[0]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const mbSize = (file.size / (1024 * 1024)).toFixed(1);
      setAttachedFile({
        name: file.name,
        size: `${mbSize} MB`
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const mbSize = (file.size / (1024 * 1024)).toFixed(1);
      setAttachedFile({
        name: file.name,
        size: `${mbSize} MB`
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentAgreed) {
      alert('Please accept the candidate data consent agreement.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomDossierId = `AM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const newDossier: SubmittedDossier = {
        id: randomDossierId,
        roleId: selectedRole.id,
        roleTitle: selectedRole.title,
        residencyStatus: residency,
        fullName,
        identificationNumber: idNumber,
        dateOfBirth: dob,
        countryCode,
        phoneNumber,
        currentEmployer,
        earliestStartDate: startDate,
        noticePeriodType: selectedNoticeChip,
        linkedinUrl,
        portfolioUrl,
        resumeFileName: attachedFile?.name || 'Applicant_Resume.pdf',
        resumeFileSize: attachedFile?.size || '1.8 MB',
        consentAgreed,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        status: 'Received'
      };

      setSubmittedData(newDossier);
      setIsSubmitting(false);
      onSubmitSuccess(newDossier);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-[0_10px_30px_-5px_rgba(15,41,66,0.06)] border border-[#132E4F]/5 relative">
      {/* Form Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#efeeeb]">
        <div>
          <span className="font-sans text-[11px] uppercase tracking-wider text-[#795900] font-bold">
            Step 1 • Direct Evaluation
          </span>
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#001428] font-semibold tracking-tight mt-0.5 leading-tight">
            Direct Talent Application
          </h2>
          <p className="font-sans text-[15px] text-[#43474d] mt-1">
            Complete the credentials form below. Our talent partners review each dossier individually.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-1.5 bg-[#FAF8F5] px-3.5 py-2 rounded-lg text-[#001428] font-sans text-[12px] font-semibold self-start sm:self-auto border border-[#efeeeb] shadow-sm">
          <span
            className="material-symbols-filled text-[16px] text-[#FFCE1B]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lock
          </span>
          <span>256-Bit SSL Encrypted</span>
        </div>
      </div>

      {/* Selected Target Role Indicator Bar */}
      <div className="bg-[#F7EDDC]/80 rounded-xl p-3.5 sm:p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-[#FFCE1B]/30">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#0B1E3F] text-[22px]">badge</span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-[13px] text-[#0B1E3F]">Applying For:</span>
            <span className="font-sans text-[17px] text-[#001428] font-bold">
              {selectedRole.title}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenRoleModal}
          className="text-[#795900] font-sans text-[14px] font-bold hover:underline flex items-center gap-1 self-start sm:self-auto"
        >
          Change Role <span className="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
      </div>

      {submittedData ? (
        /* Success Confirmation Display */
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F7EDDC] text-[#0B1E3F] shadow-sm border border-[#FFCE1B]/40 animate-fadeIn">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFCE1B] text-[#0B1E3F] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[28px] font-bold">task_alt</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-[26px] text-[#001428] font-bold leading-tight">
                  Application Successfully Received
                </h4>
                <span className="font-mono text-xs bg-white text-[#0B1E3F] px-3 py-1 rounded-full font-bold shadow-sm">
                  Ref: {submittedData.id}
                </span>
              </div>

              <p className="font-sans text-[14px] text-[#43474d] mt-2 leading-relaxed">
                Thank you, <strong className="text-[#001428]">{submittedData.fullName}</strong>. Your dossier for{' '}
                <strong className="text-[#001428]">{submittedData.roleTitle}</strong> has been prioritized in our Talent Directorate review pipeline.
              </p>

              {/* Status Timeline Card */}
              <div className="mt-5 p-4 rounded-xl bg-white/90 border border-[#132E4F]/10 flex flex-col gap-3">
                <span className="font-sans text-[12px] uppercase font-bold tracking-wider text-[#795900]">
                  Next Steps in Review Process:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#efeeeb]">
                    <span className="font-bold text-[#001428] block mb-1">1. Dossier Screening</span>
                    <span className="text-[#43474d]">24-48 hours portfolio &amp; background verification</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#efeeeb]">
                    <span className="font-bold text-[#001428] block mb-1">2. Leadership Chemistry</span>
                    <span className="text-[#43474d]">30-minute informal session with Practice Director</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#efeeeb]">
                    <span className="font-bold text-[#001428] block mb-1">3. Creative Sprint</span>
                    <span className="text-[#43474d]">Paid micro-brief simulation or on-site studio day</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg bg-[#001428] text-white font-sans text-xs font-bold hover:bg-[#0B1E3F] transition-all cursor-pointer shadow-sm"
                >
                  Submit Another Dossier
                </button>
                <a
                  href={`mailto:careers@advmore.agency?subject=Inquiry on Application ${submittedData.id}`}
                  className="px-5 py-2.5 rounded-lg bg-white border border-[#c3c6ce] text-[#001428] font-sans text-xs font-semibold hover:bg-[#FAF8F5] transition-all"
                >
                  Contact Talent Coordinator
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* The Interactive Application Form */
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="talentApplicationForm">
          {/* Residency / Applicant Type Toggle */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[14px] font-semibold text-[#001428] flex items-center gap-1">
              Applicant Legal Residency Status <span className="text-[#ba1a1a]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 bg-[#FAF8F5] rounded-xl border border-[#efeeeb]">
              <button
                type="button"
                onClick={() => {
                  setResidency('malaysian');
                  if (!idNumber || idNumber.startsWith('A')) {
                    setIdNumber('950812-14-5544');
                  }
                }}
                className={`py-2.5 px-4 rounded-lg font-sans text-[14px] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  residency === 'malaysian'
                    ? 'bg-[#001428] text-white shadow-sm font-semibold'
                    : 'text-[#43474d] hover:text-[#001428] hover:bg-white/50'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">home_pin</span>
                <span>Malaysian Citizen / Permanent Resident</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setResidency('foreign');
                  if (!idNumber || idNumber.includes('-')) {
                    setIdNumber('E8492019');
                  }
                }}
                className={`py-2.5 px-4 rounded-lg font-sans text-[14px] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  residency === 'foreign'
                    ? 'bg-[#001428] text-white shadow-sm font-semibold'
                    : 'text-[#43474d] hover:text-[#001428] hover:bg-white/50'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
                <span>Foreign / International Applicant</span>
              </button>
            </div>
          </div>

          {/* Grid Row 1: Full Name & Identification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center gap-1">
                Full Name (as per IC / Passport) <span className="text-[#ba1a1a]">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                  person
                </span>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sarah Tan Li Wei"
                  className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                />
              </div>
              <span className="font-sans text-[12px] text-[#43474d]">
                Used for official contract &amp; accreditation issuance.
              </span>
            </div>

            {/* Identification (IC vs Passport) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="idNumber" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center gap-1">
                {residency === 'malaysian' ? 'Identity Card (IC) Number' : 'Passport Document Number'}{' '}
                <span className="text-[#ba1a1a]">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                  {residency === 'malaysian' ? 'credit_card' : 'flight_takeoff'}
                </span>
                <input
                  id="idNumber"
                  type="text"
                  required
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  placeholder={residency === 'malaysian' ? '950812-14-5544' : 'e.g. A28491023'}
                  className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                />
              </div>
              <span className="font-sans text-[12px] text-[#43474d]">
                {residency === 'malaysian'
                  ? 'Malaysian NRIC format with or without hyphens.'
                  : 'Required for Ministry visa clearance and Tier 1 Employment Pass processing.'}
              </span>
            </div>
          </div>

          {/* Grid Row 2: Date of Birth & Mobile Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date of Birth */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="dob" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center gap-1">
                Date of Birth <span className="text-[#ba1a1a]">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                  calendar_today
                </span>
                <input
                  id="dob"
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                />
              </div>
              <span className="font-sans text-[12px] text-[#43474d]">
                For verification and benefit eligibility.
              </span>
            </div>

            {/* Mobile Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phoneNumber" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center gap-1">
                Mobile Phone Number <span className="text-[#ba1a1a]">*</span>
              </label>
              <div className="flex items-center gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  aria-label="Country Code"
                  className="h-12 px-3 bg-[#FAF8F5] rounded-lg text-[#001428] font-sans text-[14px] font-semibold border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] transition-all shadow-inner shrink-0 cursor-pointer"
                >
                  <option value="+60">MY (+60)</option>
                  <option value="+65">SG (+65)</option>
                  <option value="+62">ID (+62)</option>
                  <option value="+66">TH (+66)</option>
                  <option value="+1">US (+1)</option>
                  <option value="+44">UK (+44)</option>
                </select>
                <div className="relative flex items-center w-full">
                  <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                    smartphone
                  </span>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="12-345 6789"
                    className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                  />
                </div>
              </div>
              <span className="font-sans text-[12px] text-[#43474d]">
                Direct line for WhatsApp / interview scheduling.
              </span>
            </div>
          </div>

          {/* Grid Row 3: Current Employer & Earliest Starting Date with Quick Chips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Employer */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="currentEmployer" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center justify-between">
                <span>Name of Current Employer</span>
                <span className="text-[#43474d] font-normal text-[12px]">(Optional)</span>
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                  apartment
                </span>
                <input
                  id="currentEmployer"
                  type="text"
                  value={currentEmployer}
                  onChange={(e) => setCurrentEmployer(e.target.value)}
                  placeholder="e.g. Ogilvy, Media Prima, or Self-Employed"
                  className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                />
              </div>
              <span className="font-sans text-[12px] text-[#43474d]">
                We always maintain absolute candidate discretion.
              </span>
            </div>

            {/* Earliest Starting Date */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="startDate" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center gap-1">
                Earliest Starting Date <span className="text-[#ba1a1a]">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                  event_available
                </span>
                <input
                  id="startDate"
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setSelectedNoticeChip('');
                  }}
                  className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                />
              </div>

              {/* Notice Period Quick Selection Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                <span className="font-sans text-[11px] text-[#43474d] font-semibold mr-1">
                  Quick Select:
                </span>
                <button
                  type="button"
                  onClick={() => handleNoticeSelect('Immediate')}
                  className={`notice-chip px-2.5 py-1 rounded font-sans text-[11px] font-semibold transition-colors shadow-sm cursor-pointer border ${
                    selectedNoticeChip === 'Immediate'
                      ? 'bg-[#FFCE1B] text-[#0B1E3F] border-[#febf14]'
                      : 'bg-[#FAF8F5] hover:bg-[#F7EDDC] text-[#001428] border-[#efeeeb]'
                  }`}
                >
                  Immediate
                </button>
                <button
                  type="button"
                  onClick={() => handleNoticeSelect('1 Month')}
                  className={`notice-chip px-2.5 py-1 rounded font-sans text-[11px] font-semibold transition-colors shadow-sm cursor-pointer border ${
                    selectedNoticeChip === '1 Month Notice'
                      ? 'bg-[#FFCE1B] text-[#0B1E3F] border-[#febf14]'
                      : 'bg-[#FAF8F5] hover:bg-[#F7EDDC] text-[#001428] border-[#efeeeb]'
                  }`}
                >
                  1 Month Notice
                </button>
                <button
                  type="button"
                  onClick={() => handleNoticeSelect('2 Months')}
                  className={`notice-chip px-2.5 py-1 rounded font-sans text-[11px] font-semibold transition-colors shadow-sm cursor-pointer border ${
                    selectedNoticeChip === '2 Months'
                      ? 'bg-[#FFCE1B] text-[#0B1E3F] border-[#febf14]'
                      : 'bg-[#FAF8F5] hover:bg-[#F7EDDC] text-[#001428] border-[#efeeeb]'
                  }`}
                >
                  2 Months
                </button>
              </div>
            </div>
          </div>

          {/* Grid Row 4: LinkedIn URL & Portfolio Link */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LinkedIn URL */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="linkedinUrl" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center justify-between">
                <span className="flex items-center gap-1">
                  LinkedIn Profile URL <span className="text-[#ba1a1a]">*</span>
                </span>
                <span className="bg-[#0077b5]/10 text-[#0077b5] text-[11px] font-bold px-2 py-0.5 rounded">
                  LinkedIn
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                  link
                </span>
                <input
                  id="linkedinUrl"
                  type="url"
                  required
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Portfolio / Creative Reel Link */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="portfolioUrl" className="font-sans text-[14px] font-semibold text-[#001428] flex items-center justify-between">
                <span className="flex items-center gap-1">
                  Portfolio / Creative Reel{' '}
                  <span className="text-[#43474d] font-normal text-[12px]">(Agency Bonus)</span>
                </span>
                <span className="bg-[#FFCE1B]/20 text-[#0B1E3F] text-[11px] font-bold px-2 py-0.5 rounded">
                  Behance / Notion / Drive
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#74777e] text-[20px] pointer-events-none">
                  photo_library
                </span>
                <input
                  id="portfolioUrl"
                  type="url"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  placeholder="https://readcv.com/yourhandle or portfolio.com"
                  className="w-full h-12 pl-11 pr-4 bg-[#FAF8F5] rounded-lg text-[#1b1c1a] font-sans text-[15px] border border-[#efeeeb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001428] focus:border-transparent transition-all shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* Resume / CV File Upload Dropzone */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[14px] font-semibold text-[#001428] flex items-center gap-1">
                Curriculum Vitae / Resume File <span className="text-[#ba1a1a]">*</span>
              </span>
              <span className="font-sans text-[13px] text-[#43474d]">PDF, DOCX up to 10MB</span>
            </div>

            {/* Dropzone Container */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative group cursor-pointer rounded-xl p-6 transition-all text-center flex flex-col items-center justify-center gap-2 border-2 border-dashed ${
                isDragging
                  ? 'bg-[#FFFBEA] border-[#FFCE1B]'
                  : 'bg-[#FAF8F5] hover:bg-[#FFFBEA]/70 border-[#132E4F]/20 hover:border-[#FFCE1B]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />

              <div className="w-14 h-14 rounded-full bg-white group-hover:bg-[#FFCE1B]/20 flex items-center justify-center text-[#001428] transition-colors shadow-sm mb-1">
                <span className="material-symbols-outlined text-[28px] text-[#001428] group-hover:text-[#0B1E3F]">
                  cloud_upload
                </span>
              </div>

              <span className="font-sans text-[16px] text-[#001428]">
                <span className="text-[#795900] font-bold underline decoration-[#FFCE1B]">
                  Click to browse
                </span>{' '}
                or drag and drop your CV file here
              </span>

              <p className="font-sans text-[13px] text-[#43474d] max-w-md">
                Ensure recent project impact, brand clientele, and team leadership milestones are highlighted.
              </p>

              {/* Attached Preview Chip */}
              {attachedFile && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mt-2 inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-[#efeeeb]"
                >
                  <span className="material-symbols-outlined text-[#795900] text-[22px]">
                    picture_as_pdf
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[14px] font-semibold text-[#001428] leading-tight">
                      {attachedFile.name}
                    </span>
                    <span className="font-sans text-[11px] text-[#43474d]">
                      {attachedFile.size} • Attached &amp; Validated
                    </span>
                  </div>
                  <span
                    className="material-symbols-filled text-[#15803d] text-[18px] ml-2"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <button
                    type="button"
                    onClick={() => setAttachedFile(null)}
                    title="Remove file"
                    className="ml-2 text-[#74777e] hover:text-[#ba1a1a]"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Candidate Consent Checkbox */}
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF8F5] border border-[#efeeeb]">
            <input
              id="consentBox"
              type="checkbox"
              required
              checked={consentAgreed}
              onChange={(e) => setConsentAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-[#0B1E3F] focus:ring-[#001428] accent-[#001428] cursor-pointer shrink-0"
            />
            <label
              htmlFor="consentBox"
              className="font-sans text-[13px] text-[#43474d] cursor-pointer leading-relaxed select-none"
            >
              I acknowledge that the information provided is accurate and consent to{' '}
              <strong className="text-[#001428]">Advertising &amp; More</strong> processing my personal data for recruitment evaluation, confidential vetting, and future agency talent pooling in compliance with the Personal Data Protection Act.
            </label>
          </div>

          {/* Form Action Footer: Prominent Yellow Submit Button + Security Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-[#43474d]">
              <span className="material-symbols-outlined text-[20px] text-[#795900]">
                verified_user
              </span>
              <span className="font-sans text-[13px]">
                Strictly confidential submission to Talent Directorate
              </span>
            </div>

            {/* Submit Button */}
            <button
              id="submitBtn"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFCE1B] hover:bg-[#febf14] text-[#0B1E3F] font-sans text-[15px] font-bold px-8 py-3.5 rounded-xl transition-all shadow-[0_4px_18px_-2px_rgba(15,41,66,0.12),0_2px_6px_-1px_rgba(245,183,0,0.1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">
                    progress_activity
                  </span>
                  <span>Processing Submission...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
