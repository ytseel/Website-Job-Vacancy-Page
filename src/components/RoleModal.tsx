import React from 'react';
import { JobRole } from '../types';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  roles: JobRole[];
  onSelectRole: (role: JobRole) => void;
}

export const RoleModal: React.FC<RoleModalProps> = ({
  isOpen,
  onClose,
  roles,
  onSelectRole
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E3F]/50 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#132E4F]/10">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#efeeeb]">
          <h4 className="font-serif text-[22px] font-bold text-[#001428]">Choose Your Open Role</h4>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#efeeeb] flex items-center justify-center text-[#43474d] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-1">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => {
                onSelectRole(role);
                onClose();
              }}
              className="p-3.5 text-left rounded-lg hover:bg-[#F7EDDC] text-[#001428] font-sans text-[14px] flex items-center justify-between transition-colors border border-transparent hover:border-[#FFCE1B]/40 cursor-pointer"
            >
              <div>
                <span className="font-semibold block">{role.title}</span>
                <span className="text-[12px] text-[#43474d]">{role.type}</span>
              </div>
              <span className="text-[11px] font-semibold text-[#795900] bg-[#FAF8F5] px-2.5 py-1 rounded">
                {role.department}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
