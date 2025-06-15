export interface Property {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  type: 'Apartment' | 'House' | 'Condo' | 'Townhouse' | 'Commercial';
  units: number;
  bedrooms?: number;
  bathrooms?: number;
  sqft: number;
  rent: number;
  status: 'Available' | 'Occupied' | 'Maintenance' | 'Vacant';
  image: string;
  description: string;
  amenities: string[];
  yearBuilt: number;
  parking: number;
  petFriendly: boolean;
  laundry: 'In-unit' | 'On-site' | 'None';
}

export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Sunset View Apartments',
    address: '1234 Ocean Boulevard',
    city: 'Santa Monica',
    state: 'CA',
    zip: '90401',
    type: 'Apartment',
    units: 24,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    rent: 3500,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    description: 'Luxurious apartment complex with stunning ocean views and modern amenities.',
    amenities: ['Pool', 'Gym', 'Rooftop Deck', 'Concierge', 'Parking Garage'],
    yearBuilt: 2018,
    parking: 2,
    petFriendly: true,
    laundry: 'In-unit'
  },
  {
    id: '2',
    name: 'Downtown Loft Collection',
    address: '567 Main Street',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90014',
    type: 'Condo',
    units: 12,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 850,
    rent: 2800,
    status: 'Occupied',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    description: 'Modern loft-style condos in the heart of downtown with exposed brick and high ceilings.',
    amenities: ['Rooftop Terrace', 'Fitness Center', 'Business Center', 'Pet Spa'],
    yearBuilt: 2020,
    parking: 1,
    petFriendly: true,
    laundry: 'In-unit'
  },
  {
    id: '3',
    name: 'Garden Oaks Townhomes',
    address: '890 Elm Street',
    city: 'Pasadena',
    state: 'CA',
    zip: '91101',
    type: 'Townhouse',
    units: 8,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1850,
    rent: 4200,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
    description: 'Spacious townhomes with private patios and attached garages in a quiet neighborhood.',
    amenities: ['Private Patio', 'Attached Garage', 'Community Pool', 'Playground'],
    yearBuilt: 2016,
    parking: 2,
    petFriendly: true,
    laundry: 'In-unit'
  },
  {
    id: '4',
    name: 'Metro Plaza Commercial',
    address: '2100 Business Way',
    city: 'Burbank',
    state: 'CA',
    zip: '91505',
    type: 'Commercial',
    units: 1,
    sqft: 5000,
    rent: 12000,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    description: 'Prime commercial space perfect for retail or office use with high visibility.',
    amenities: ['Storefront Windows', 'Loading Dock', 'Parking Lot', 'Security System'],
    yearBuilt: 2015,
    parking: 10,
    petFriendly: false,
    laundry: 'None'
  },
  {
    id: '5',
    name: 'Hillside Manor',
    address: '456 Canyon Drive',
    city: 'Beverly Hills',
    state: 'CA',
    zip: '90210',
    type: 'House',
    units: 1,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    rent: 8500,
    status: 'Occupied',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
    description: 'Elegant single-family home with panoramic city views and luxury finishes.',
    amenities: ['Swimming Pool', 'Home Theater', 'Wine Cellar', 'Guest House'],
    yearBuilt: 2012,
    parking: 3,
    petFriendly: true,
    laundry: 'In-unit'
  },
  {
    id: '6',
    name: 'Coastal Breeze Condos',
    address: '789 Pacific Coast Highway',
    city: 'Malibu',
    state: 'CA',
    zip: '90265',
    type: 'Condo',
    units: 16,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    rent: 4800,
    status: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    description: 'Beachfront condos with direct ocean access and resort-style amenities.',
    amenities: ['Beach Access', 'Infinity Pool', 'Spa', 'Valet Parking'],
    yearBuilt: 2019,
    parking: 1,
    petFriendly: false,
    laundry: 'In-unit'
  },
  {
    id: '7',
    name: 'University Heights Studios',
    address: '321 College Avenue',
    city: 'Westwood',
    state: 'CA',
    zip: '90024',
    type: 'Apartment',
    units: 36,
    bedrooms: 0,
    bathrooms: 1,
    sqft: 550,
    rent: 2200,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    description: 'Modern studio apartments perfect for students and young professionals.',
    amenities: ['Study Lounge', 'Bike Storage', 'Laundry Room', 'Rooftop Garden'],
    yearBuilt: 2021,
    parking: 0,
    petFriendly: false,
    laundry: 'On-site'
  },
  {
    id: '8',
    name: 'Luxury Estates at Bel Air',
    address: '1500 Stone Canyon Road',
    city: 'Bel Air',
    state: 'CA',
    zip: '90077',
    type: 'House',
    units: 1,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 6000,
    rent: 15000,
    status: 'Vacant',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
    description: 'Stunning mansion with panoramic views, private gym, and entertainment areas.',
    amenities: ['Private Gym', 'Tennis Court', 'Swimming Pool', 'Home Office'],
    yearBuilt: 2010,
    parking: 4,
    petFriendly: true,
    laundry: 'In-unit'
  }
];