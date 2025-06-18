export interface Lease {
  id: string;
  propertyId: string;
  propertyName: string;
  unit: string;
  tenantId: string;
  tenantName: string;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  securityDeposit: number;
  status: 'Active' | 'Expired' | 'Pending' | 'Terminated';
  leaseType: 'Fixed' | 'Month-to-Month' | 'Short-term';
  renewalDate?: string;
  renewalOffered: boolean;
  renewalStatus?: 'Pending' | 'Accepted' | 'Declined';
  lastRentIncrease?: string;
  nextRentReview?: string;
  petDeposit?: number;
  parkingFee?: number;
  utilityDeposit?: number;
  documents: {
    name: string;
    type: 'Lease Agreement' | 'Addendum' | 'Notice' | 'Application';
    uploadDate: string;
  }[];
}

export const mockLeases: Lease[] = [
  {
    id: '1',
    propertyId: '1',
    propertyName: 'Sunset View Apartments',
    unit: 'A-101',
    tenantId: '1',
    tenantName: 'Sarah Johnson',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    monthlyRent: 3500,
    securityDeposit: 3500,
    status: 'Active',
    leaseType: 'Fixed',
    renewalDate: '2024-10-01',
    renewalOffered: false,
    lastRentIncrease: '2024-01-01',
    nextRentReview: '2024-10-01',
    petDeposit: 500,
    parkingFee: 150,
    documents: [
      { name: 'Lease Agreement 2024', type: 'Lease Agreement', uploadDate: '2023-12-15' },
      { name: 'Pet Addendum', type: 'Addendum', uploadDate: '2023-12-15' },
      { name: 'Parking Agreement', type: 'Addendum', uploadDate: '2023-12-15' }
    ]
  },
  {
    id: '2',
    propertyId: '2',
    propertyName: 'Downtown Loft Collection',
    unit: 'B-205',
    tenantId: '2',
    tenantName: 'David Chen',
    startDate: '2023-09-01',
    endDate: '2024-08-31',
    monthlyRent: 2800,
    securityDeposit: 2800,
    status: 'Active',
    leaseType: 'Fixed',
    renewalDate: '2024-06-01',
    renewalOffered: true,
    renewalStatus: 'Pending',
    lastRentIncrease: '2023-09-01',
    nextRentReview: '2024-06-01',
    documents: [
      { name: 'Lease Agreement 2023', type: 'Lease Agreement', uploadDate: '2023-08-15' },
      { name: 'Renewal Offer', type: 'Notice', uploadDate: '2024-01-10' }
    ]
  },
  {
    id: '3',
    propertyId: '3',
    propertyName: 'Garden Oaks Townhomes',
    unit: 'C-1',
    tenantId: '3',
    tenantName: 'Maria Rodriguez',
    startDate: '2024-03-01',
    endDate: '2025-02-28',
    monthlyRent: 4200,
    securityDeposit: 4200,
    status: 'Active',
    leaseType: 'Fixed',
    renewalDate: '2024-12-01',
    renewalOffered: false,
    lastRentIncrease: '2024-03-01',
    nextRentReview: '2024-12-01',
    petDeposit: 300,
    utilityDeposit: 200,
    documents: [
      { name: 'Lease Agreement 2024', type: 'Lease Agreement', uploadDate: '2024-02-15' },
      { name: 'Pet Addendum', type: 'Addendum', uploadDate: '2024-02-15' },
      { name: 'Utility Agreement', type: 'Addendum', uploadDate: '2024-02-15' }
    ]
  },
  {
    id: '4',
    propertyId: '5',
    propertyName: 'Hillside Manor',
    unit: 'Main House',
    tenantId: '4',
    tenantName: 'Robert Wilson',
    startDate: '2023-06-01',
    endDate: '2024-05-31',
    monthlyRent: 8500,
    securityDeposit: 17000,
    status: 'Active',
    leaseType: 'Fixed',
    renewalDate: '2024-03-01',
    renewalOffered: true,
    renewalStatus: 'Declined',
    lastRentIncrease: '2023-06-01',
    nextRentReview: '2024-03-01',
    parkingFee: 0,
    documents: [
      { name: 'Lease Agreement 2023', type: 'Lease Agreement', uploadDate: '2023-05-15' },
      { name: 'Renewal Offer', type: 'Notice', uploadDate: '2024-01-05' },
      { name: 'Notice to Vacate', type: 'Notice', uploadDate: '2024-01-12' }
    ]
  },
  {
    id: '5',
    propertyId: '7',
    propertyName: 'University Heights Studios',
    unit: 'Studio 15',
    tenantId: '5',
    tenantName: 'Emily Davis',
    startDate: '2024-08-15',
    endDate: '2025-07-31',
    monthlyRent: 2200,
    securityDeposit: 2200,
    status: 'Active',
    leaseType: 'Fixed',
    renewalDate: '2025-05-15',
    renewalOffered: false,
    lastRentIncrease: '2024-08-15',
    nextRentReview: '2025-05-15',
    documents: [
      { name: 'Lease Agreement 2024', type: 'Lease Agreement', uploadDate: '2024-08-01' },
      { name: 'Student Housing Addendum', type: 'Addendum', uploadDate: '2024-08-01' }
    ]
  },
  {
    id: '6',
    propertyId: '6',
    propertyName: 'Coastal Breeze Condos',
    unit: 'D-302',
    tenantId: '6',
    tenantName: 'Former Tenant',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    monthlyRent: 4800,
    securityDeposit: 4800,
    status: 'Expired',
    leaseType: 'Fixed',
    renewalDate: '2023-10-01',
    renewalOffered: true,
    renewalStatus: 'Declined',
    lastRentIncrease: '2023-01-01',
    documents: [
      { name: 'Lease Agreement 2023', type: 'Lease Agreement', uploadDate: '2022-12-15' },
      { name: 'Renewal Offer', type: 'Notice', uploadDate: '2023-08-01' },
      { name: 'Non-Renewal Notice', type: 'Notice', uploadDate: '2023-10-15' }
    ]
  }
];