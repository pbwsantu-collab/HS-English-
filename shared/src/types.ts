export interface User {
  id: string;
  name?: string;
  email?: string;
  role?: 'teacher' | 'student' | 'admin';
}

export type UserRole = User['role'];
