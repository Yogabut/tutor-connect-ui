export interface Admin {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin';
  status: 'active' | 'inactive';
  createdAt: string;
}

export const adminsMockData: Admin[] = [
  { id: '1', name: 'Super Admin', email: 'superadmin@lesprivat.com', role: 'super_admin', status: 'active', createdAt: '2024-01-15' },
  { id: '2', name: 'Admin User', email: 'admin@lesprivat.com', role: 'admin', status: 'active', createdAt: '2024-03-10' },
  { id: '3', name: 'Rina Marlina', email: 'rina@lesprivat.com', role: 'admin', status: 'active', createdAt: '2024-06-20' },
  { id: '4', name: 'Budi Hartono', email: 'budi@lesprivat.com', role: 'admin', status: 'inactive', createdAt: '2024-08-05' },
  { id: '5', name: 'Sari Dewi', email: 'sari@lesprivat.com', role: 'admin', status: 'active', createdAt: '2025-01-12' },
];

export const adminRoleOptions = ['super_admin', 'admin'] as const;
export const adminRoleLabels: Record<string, string> = {
  super_admin: 'Super Admin',
  admin: 'Admin',
};
