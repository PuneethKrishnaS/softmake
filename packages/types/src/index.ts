export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'SUPERADMIN' | 'ADMIN' | 'STUDENT' | 'DEVELOPER';
}

export interface Student {
  id: number;
  user: User;
  usn: string;
  college_name: string;
  department: string;
  semester: number;
  phone: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technology: string;
  category: string;
  github_repo?: string | null;
  leader?: Student | null;
  students: Student[];
  assigned_developer?: User | null;
  start_date?: string | null;
  deadline?: string | null;
  status: string;
  progress_percentage: number;
  total_price: number;
  advance_payment: number;
}

export interface Ticket {
  id: number;
  student: Student;
  project: Project;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'OPEN' | 'IN_PROGRESS' | 'PENDING' | 'COMPLETED' | 'REJECTED';
  created_at: string;
  resolved_at?: string | null;
}
