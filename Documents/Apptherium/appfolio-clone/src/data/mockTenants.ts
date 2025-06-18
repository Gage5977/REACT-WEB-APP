export interface Tenant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyId: string;
  propertyName: string;
  unit: string;
  leaseStart: string;
  leaseEnd: string;
  monthlyRent: number;
  securityDeposit: number;
  status: 'Active' | 'Past Due' | 'Notice Given' | 'Inactive';
  avatar: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  moveInDate: string;
  balance: number;
}

export const mockTenants: Tenant[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    propertyId: '1',
    propertyName: 'Sunset View Apartments',
    unit: 'A-101',
    leaseStart: '2024-01-01',
    leaseEnd: '2024-12-31',
    monthlyRent: 3500,
    securityDeposit: 3500,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612-1f56-1234?w=150&h=150&fit=crop&crop=face',
    emergencyContact: {
      name: 'Mike Johnson',
      phone: '(555) 987-6543',
      relationship: 'Spouse'
    },
    moveInDate: '2023-12-28',
    balance: 0
  },
  {
    id: '2',
    firstName: 'David',
    lastName: 'Chen',
    email: 'david.chen@email.com',
    phone: '(555) 234-5678',
    propertyId: '2',
    propertyName: 'Downtown Loft Collection',
    unit: 'B-205',
    leaseStart: '2023-09-01',
    leaseEnd: '2024-08-31',
    monthlyRent: 2800,
    securityDeposit: 2800,
    status: 'Past Due',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    emergencyContact: {
      name: 'Lisa Chen',
      phone: '(555) 876-5432',
      relationship: 'Sister'
    },
    moveInDate: '2023-08-25',
    balance: -2800
  },
  {
    id: '3',
    firstName: 'Maria',
    lastName: 'Rodriguez',
    email: 'maria.rodriguez@email.com',
    phone: '(555) 345-6789',
    propertyId: '3',
    propertyName: 'Garden Oaks Townhomes',
    unit: 'C-1',
    leaseStart: '2024-03-01',
    leaseEnd: '2025-02-28',
    monthlyRent: 4200,
    securityDeposit: 4200,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    emergencyContact: {
      name: 'Carlos Rodriguez',
      phone: '(555) 765-4321',
      relationship: 'Father'
    },
    moveInDate: '2024-02-28',
    balance: 0
  },
  {
    id: '4',
    firstName: 'Robert',
    lastName: 'Wilson',
    email: 'robert.wilson@email.com',
    phone: '(555) 456-7890',
    propertyId: '5',
    propertyName: 'Hillside Manor',
    unit: 'Main House',
    leaseStart: '2023-06-01',
    leaseEnd: '2024-05-31',
    monthlyRent: 8500,
    securityDeposit: 17000,
    status: 'Notice Given',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    emergencyContact: {
      name: 'Jennifer Wilson',
      phone: '(555) 654-3210',
      relationship: 'Wife'
    },
    moveInDate: '2023-05-28',
    balance: 0
  },
  {
    id: '5',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@email.com',
    phone: '(555) 567-8901',
    propertyId: '7',
    propertyName: 'University Heights Studios',
    unit: 'Studio 15',
    leaseStart: '2024-08-15',
    leaseEnd: '2025-07-31',
    monthlyRent: 2200,
    securityDeposit: 2200,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    emergencyContact: {
      name: 'Susan Davis',
      phone: '(555) 543-2109',
      relationship: 'Mother'
    },
    moveInDate: '2024-08-10',
    balance: 0
  }
];