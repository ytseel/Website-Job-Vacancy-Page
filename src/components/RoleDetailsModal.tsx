import React from 'react';
import { JobRole } from '../types';

interface RoleDetailsModalProps {
  role: JobRole | null;
  onClose: () => void;
  onApplyForRole: (role: JobRole) => void;
}

export const RoleDetailsModal: React.FC<RoleDetailsModalProps> = ({
  role,
  onClose,
  onApplyForRole
}) => {
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E3F]/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#132E4F]/10 max-h-[90vh] overflow-y-auto my-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#efeeeb]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#795900] font-bold">
                Position Dossier
              </span>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${role.badgeDepartmentColor}`}>
                {role.department}
              </span>
            </div>
            <h3 className="font-serif text-[28px] sm:text-[34px] font-semibold text-[#001428] leading-tight">
              {role.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#43474d] mt-2">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                {role.type}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                {role.location}
              </span>
              {role.salaryRange && (
                <>
                  <span>•</span>
                  <span className="text-[#001428] font-semibold">{role.salaryRange}</span>
                </>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#efeeeb] flex items-center justify-center text-[#43474d] cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 flex flex-col gap-6 text-[#1b1c1a]">
          {/* Executive Summary */}
          <div>
            <h5 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#001428] mb-2">
              The Mandate
            </h5>
            <p className="font-sans text-[15px] text-[#43474d] leading-relaxed">
              {role.summary}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h5 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#001428] mb-2">
              Primary Responsibilities
            </h5>
            <ul className="space-y-2">
              {role.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#43474d]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFCE1B] mt-2 shrink-0"></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Craft & Background */}
          <div>
            <h5 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#001428] mb-2">
              Desired Craft &amp; Qualifications
            </h5>
            <ul className="space-y-2">
              {role.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#43474d]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#001428] mt-2 shrink-0"></span>
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Environment */}
          {role.techStack && (
            <div>
              <h5 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#001428] mb-2">
                Operational Stack &amp; Rigs
              </h5>
              <div className="flex flex-wrap gap-2">
                {role.techStack.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#FAF8F5] text-[#001428] rounded-md text-xs font-semibold border border-[#efeeeb]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#efeeeb] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#74777e]">
            Direct partner review • Equal opportunity talent policy
          </span>
          <button
            type="button"
            onClick={() => {
              onApplyForRole(role);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#FFCE1B] hover:bg-[#febf14] text-[#0B1E3F] font-sans text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply For This Role</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
