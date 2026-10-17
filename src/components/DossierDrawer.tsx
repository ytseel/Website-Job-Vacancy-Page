import React from 'react';
import { SubmittedDossier } from '../types';

interface DossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  dossiers: SubmittedDossier[];
  onSelectDossierToView?: (dossier: SubmittedDossier) => void;
}

export const DossierDrawer: React.FC<DossierDrawerProps> = ({
  isOpen,
  onClose,
  dossiers
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#0B1E3F]/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#efeeeb]">
        {/* Header */}
        <div className="p-6 border-b border-[#efeeeb] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#001428] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">badge</span>
            </div>
            <div>
              <h3 className="font-serif text-[20px] font-bold text-[#001428]">Candidate Portal</h3>
              <p className="text-xs text-[#43474d]">Direct Evaluation Directorate</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#efeeeb] flex items-center justify-center text-[#43474d]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#795900]">
              Submitted Dossiers ({dossiers.length})
            </span>
            <span className="text-xs text-[#74777e]">Synced with Talent Pipeline</span>
          </div>

          {dossiers.length === 0 ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-[#c3c6ce] mb-2">
                folder_open
              </span>
              <p className="font-serif text-lg text-[#001428] font-medium">No Dossiers Submitted Yet</p>
              <p className="text-xs text-[#43474d] mt-1 max-w-xs">
                Fill in the Direct Talent Application form on this page to submit your portfolio for partner evaluation.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {dossiers.map((dossier) => (
                <div
                  key={dossier.id}
                  className="p-4 rounded-xl border border-[#efeeeb] bg-[#FAF8F5] flex flex-col gap-2 hover:border-[#FFCE1B] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0B1E3F] bg-white px-2 py-0.5 rounded border border-[#efeeeb]">
                      {dossier.id}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FFCE1B]/20 text-[#0B1E3F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFCE1B] animate-pulse"></span>
                      {dossier.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#001428]">
                      {dossier.roleTitle}
                    </h4>
                    <span className="text-xs text-[#43474d]">
                      Applicant: {dossier.fullName}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#efeeeb] flex items-center justify-between text-[11px] text-[#74777e]">
                    <span>Submitted: {dossier.submittedAt}</span>
                    <span className="flex items-center gap-1 text-[#001428] font-semibold">
                      <span className="material-symbols-outlined text-[14px]">attach_file</span>
                      {dossier.resumeFileName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact help card */}
          <div className="mt-auto p-4 rounded-xl bg-[#F7EDDC] text-[#0B1E3F] text-xs flex flex-col gap-1.5 border border-[#FFCE1B]/30">
            <span className="font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              Questions about your candidacy?
            </span>
            <p className="text-[#43474d]">
              Our talent team responds to all verified submissions within 3 business days. Reach out directly at{' '}
              <a href="mailto:careers@advmore.agency" className="text-[#001428] font-bold underline">
                careers@advmore.agency
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#efeeeb] bg-[#FAF8F5]">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#001428] text-white rounded-lg text-sm font-semibold hover:bg-[#0B1E3F] transition-colors"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
