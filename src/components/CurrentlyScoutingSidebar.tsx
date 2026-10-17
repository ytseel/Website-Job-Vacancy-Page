import React from 'react';
import { JobRole } from '../types';

interface CurrentlyScoutingSidebarProps {
  roles: JobRole[];
  selectedRole: JobRole;
  onSelectRole: (role: JobRole) => void;
  onViewRoleDetails: (role: JobRole) => void;
  onContactTalentTeam: () => void;
}

export const CurrentlyScoutingSidebar: React.FC<CurrentlyScoutingSidebarProps> = ({
  roles,
  selectedRole,
  onSelectRole,
  onViewRoleDetails,
  onContactTalentTeam
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Open Positions & Role Selection Card */}
      <div className="bg-white rounded-xl p-6 shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5">
        <div className="flex items-center justify-between pb-2 mb-2">
          <span className="font-sans text-[11px] uppercase tracking-wider text-[#43474d] font-bold">
            Open Positions
          </span>
          <span className="bg-[#FFCE1B]/20 text-[#0B1E3F] font-sans text-[11px] px-2.5 py-0.5 rounded-full font-bold">
            5 Priority Roles
          </span>
        </div>

        <h2 className="font-serif text-[28px] text-[#001428] mb-1 font-medium leading-snug">
          Currently Scouting
        </h2>
        <p className="font-sans text-[13px] text-[#43474d] mb-4 leading-relaxed">
          Select your preferred discipline in the intake form or propose an open visionary role.
        </p>

        {/* Roles List */}
        <div className="flex flex-col gap-2.5" id="roleSelectorGroup">
          {roles.map((role) => {
            const isSelected = selectedRole.id === role.id;

            return (
              <div
                key={role.id}
                onClick={() => onSelectRole(role)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectRole(role);
                  }
                }}
                className={`group p-3.5 rounded-lg transition-all cursor-pointer shadow-sm text-left border ${
                  isSelected
                    ? 'bg-[#FAF8F5] border-[#FFCE1B] ring-1 ring-[#FFCE1B]/40'
                    : 'bg-white border-[#efeeeb] hover:bg-[#F7EDDC]/50 hover:border-[#c3c6ce]'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex flex-col">
                    <span className="font-sans text-[16px] text-[#001428] font-medium leading-snug group-hover:text-[#0B1E3F]">
                      {role.title}
                    </span>
                  </div>
                  {isSelected ? (
                    <span className="material-symbols-filled text-[18px] text-[#FFCE1B] shrink-0">
                      check_circle
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-[18px] text-[#c3c6ce] shrink-0 group-hover:text-[#001428]">
                      radio_button_unchecked
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1.5 mt-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="bg-[#FAF8F5] text-[#43474d] text-[11px] font-medium px-2 py-0.5 rounded border border-[#efeeeb]">
                      {role.type}
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${role.badgeDepartmentColor}`}>
                      {role.department}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewRoleDetails(role);
                    }}
                    className="text-[11px] font-semibold text-[#795900] hover:text-[#001428] hover:underline"
                  >
                    Brief &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Talent Advisory Note */}
        <div className="mt-4 p-3.5 rounded-lg bg-[#FAF8F5] flex items-start gap-3 border border-[#efeeeb]">
          <span className="material-symbols-outlined text-[20px] text-[#795900] mt-0.5 shrink-0">
            lightbulb
          </span>
          <p className="font-sans text-[13px] text-[#43474d] leading-relaxed">
            Don&apos;t see your specific role? Submit a general direct application. We consistently
            review portfolio submissions for bespoke placements.
          </p>
        </div>
      </div>

      {/* 2. Studio Environment Card with Image */}
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_18px_-2px_rgba(15,41,66,0.05),0_2px_6px_-1px_rgba(245,183,0,0.04)] border border-[#132E4F]/5">
        <div className="relative overflow-hidden">
          <img
            alt="The Atelier Atmosphere Studio"
            className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE89NiIxY939W735T1OEi0HN8otBnSiIkgJuf94Ax2EH71DJL5yqfeHipL68b-nyGCoG-bxX_GJvV8Q1ainZJY2_xXk1JD9kV6_ux71zWn1FE8F-DwcQDihJ5EQXpbRkyiqCbDGCVW5_S2-hE0EyGGdZ1luQT-fgroupbXA-bsM6uxFgpYLGEHffROCDtpxNGn5JnaCx-7HGp450S1eGrU05VhGVprgeRHADb4ozz84VCLPMBU9B15"
          />
          <div className="absolute top-2 right-2 bg-[#0B1E3F]/80 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
            Bangsar Studio
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <span className="font-sans text-[11px] uppercase tracking-wider text-[#795900] font-bold">
            The Atelier Atmosphere
          </span>
          <p className="font-serif text-[18px] text-[#001428] mt-1 font-semibold leading-snug">
            Designed for deep thought &amp; radical collaboration.
          </p>
          <p className="font-sans text-[13px] text-[#43474d] mt-1.5 leading-relaxed">
            High-ceiling creative suites, dedicated film editing rigs, and natural light everywhere.
          </p>
        </div>
      </div>

      {/* 3. Hiring Contact Quick Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#0B1E3F] text-white shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FFCE1B] text-[#0B1E3F] font-bold flex items-center justify-center font-serif text-xl shrink-0">
            &amp;
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[14px] font-semibold text-white leading-tight">
              Talent Team Hotline
            </span>
            <span className="font-sans text-[13px] text-white/70">careers@advmore.agency</span>
          </div>
        </div>
        <button
          onClick={onContactTalentTeam}
          className="text-[#FFCE1B] hover:underline font-sans text-[14px] font-bold shrink-0 ml-2"
        >
          Contact &rarr;
        </button>
      </div>
    </div>
  );
};
