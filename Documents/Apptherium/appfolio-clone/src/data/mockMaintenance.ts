export interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  propertyId: string;
  propertyName: string;
  unit: string;
  tenantId: string;
  tenantName: string;
  category: 'Plumbing' | 'Electrical' | 'HVAC' | 'Appliance' | 'General' | 'Emergency';
  priority: 'Low' | 'Medium' | 'High' | 'Emergency';
  status: 'Open' | 'In Progress' | 'Completed' | 'Cancelled';
  createdDate: string;
  scheduledDate?: string;
  completedDate?: string;
  assignedTo?: string;
  estimatedCost: number;
  actualCost?: number;
  images: string[];
  notes: string[];
}

export const mockMaintenanceRequests: MaintenanceRequest[] = [
  {
    id: '1',
    title: 'Kitchen Faucet Leak',
    description: 'The kitchen faucet has been dripping constantly for the past week. Water is pooling under the sink.',
    propertyId: '1',
    propertyName: 'Sunset View Apartments',
    unit: 'A-101',
    tenantId: '1',
    tenantName: 'Sarah Johnson',
    category: 'Plumbing',
    priority: 'Medium',
    status: 'In Progress',
    createdDate: '2024-01-10',
    scheduledDate: '2024-01-15',
    assignedTo: 'Mike Smith - Plumbing Pro',
    estimatedCost: 150,
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'],
    notes: ['Tenant reported issue via portal', 'Plumber contacted, parts ordered']
  },
  {
    id: '2',
    title: 'Air Conditioning Not Working',
    description: 'AC unit not cooling properly. Temperature remains at 80°F even when set to 70°F.',
    propertyId: '2',
    propertyName: 'Downtown Loft Collection',
    unit: 'B-205',
    tenantId: '2',
    tenantName: 'David Chen',
    category: 'HVAC',
    priority: 'High',
    status: 'Open',
    createdDate: '2024-01-12',
    assignedTo: 'Cool Air Solutions',
    estimatedCost: 300,
    images: [],
    notes: ['Emergency repair needed due to heat wave']
  },
  {
    id: '3',
    title: 'Dishwasher Not Draining',
    description: 'Dishwasher fills with water but does not drain completely after cycle.',
    propertyId: '3',
    propertyName: 'Garden Oaks Townhomes',
    unit: 'C-1',
    tenantId: '3',
    tenantName: 'Maria Rodriguez',
    category: 'Appliance',
    priority: 'Medium',
    status: 'Completed',
    createdDate: '2024-01-05',
    scheduledDate: '2024-01-08',
    completedDate: '2024-01-08',
    assignedTo: 'Appliance Repair Plus',
    estimatedCost: 200,
    actualCost: 185,
    images: ['https://images.unsplash.com/photo-1556909559-f99fdb24d755?w=300&h=200&fit=crop'],
    notes: ['Clogged drain hose cleaned', 'Issue resolved, tenant satisfied']
  },
  {
    id: '4',
    title: 'Electrical Outlet Not Working',
    description: 'Bedroom outlet near window stopped working. No power to plugged devices.',
    propertyId: '7',
    propertyName: 'University Heights Studios',
    unit: 'Studio 15',
    tenantId: '5',
    tenantName: 'Emily Davis',
    category: 'Electrical',
    priority: 'Medium',
    status: 'Open',
    createdDate: '2024-01-11',
    estimatedCost: 125,
    images: [],
    notes: ['Safety inspection required before repair']
  },
  {
    id: '5',
    title: 'Broken Window Lock',
    description: 'Living room window lock is broken, cannot secure window properly.',
    propertyId: '5',
    propertyName: 'Hillside Manor',
    unit: 'Main House',
    tenantId: '4',
    tenantName: 'Robert Wilson',
    category: 'General',
    priority: 'Low',
    status: 'Open',
    createdDate: '2024-01-09',
    estimatedCost: 75,
    images: ['https://images.unsplash.com/photo-1558555651-23e5b77296d8?w=300&h=200&fit=crop'],
    notes: ['Non-urgent repair, can wait for next maintenance visit']
  },
  {
    id: '6',
    title: 'Water Heater Emergency',
    description: 'Water heater making loud noises and leaking water. No hot water available.',
    propertyId: '6',
    propertyName: 'Coastal Breeze Condos',
    unit: 'D-302',
    tenantId: '6',
    tenantName: 'Emergency Contact',
    category: 'Plumbing',
    priority: 'Emergency',
    status: 'In Progress',
    createdDate: '2024-01-13',
    scheduledDate: '2024-01-13',
    assignedTo: '24/7 Emergency Plumbing',
    estimatedCost: 800,
    images: [],
    notes: ['Emergency response required', 'Plumber dispatched immediately']
  }
];