export interface Employee  {
  id: number;
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  location: string;
  type: string;
  startDate: string;
  status: "Active" | "Onboarding" | "On Leave"
}