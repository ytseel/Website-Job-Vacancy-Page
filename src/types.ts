export type ResidencyStatus = 'malaysian' | 'foreign';

export interface JobRole {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  badgeDepartmentColor: string;
  badgeTypeColor: string;
  priority: boolean;
  salaryRange?: string;
  experienceLevel?: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  techStack?: string[];
}

export interface ApplicationFormData {
  roleId: string;
  roleTitle: string;
  residencyStatus: ResidencyStatus;
  fullName: string;
  identificationNumber: string; // IC or Passport
  dateOfBirth: string;
  countryCode: string;
  phoneNumber: string;
  currentEmployer: string;
  earliestStartDate: string;
  noticePeriodType?: string;
  linkedinUrl: string;
  portfolioUrl: string;
  resumeFileName: string;
  resumeFileSize: string;
  consentAgreed: boolean;
}

export interface SubmittedDossier extends ApplicationFormData {
  id: string;
  submittedAt: string;
  status: 'Received' | 'Vetting Underway' | 'Partner Review' | 'Interview Scheduled';
}
