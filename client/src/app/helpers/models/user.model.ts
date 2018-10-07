export interface User {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  info?: string;
  status?: string;
  avatar: string | File;
  background: string | File;
}
