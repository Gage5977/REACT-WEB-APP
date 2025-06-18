export interface ShortTermRental {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  country: string;
  type: 'Apartment' | 'House' | 'Condo' | 'Villa' | 'Studio' | 'Loft';
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  sqft: number;
  nightlyRate: number;
  cleaningFee: number;
  status: 'Active' | 'Inactive' | 'Maintenance' | 'Blocked';
  images: string[];
  description: string;
  amenities: string[];
  yearBuilt: number;
  rating: number;
  reviewCount: number;
  instantBook: boolean;
  minimumNights: number;
  maximumNights: number;
  checkInTime: string;
  checkOutTime: string;
  cancellationPolicy: 'Flexible' | 'Moderate' | 'Strict';
  availability: {
    available: boolean;
    bookedDates: string[];
    blockedDates: string[];
  };
  earnings: {
    thisMonth: number;
    lastMonth: number;
    yearToDate: number;
  };
}

export const mockShortTermRentals: ShortTermRental[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    address: '1234 Main Street',
    city: 'San Francisco',
    state: 'CA',
    country: 'US',
    type: 'Loft',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sqft: 800,
    nightlyRate: 185,
    cleaningFee: 75,
    status: 'Active',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    description: 'Stylish loft in the heart of downtown with city views',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Workspace', 'Gym'],
    yearBuilt: 2020,
    rating: 4.8,
    reviewCount: 127,
    instantBook: true,
    minimumNights: 2,
    maximumNights: 30,
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    cancellationPolicy: 'Moderate',
    availability: {
      available: true,
      bookedDates: ['2024-01-20', '2024-01-21', '2024-01-25'],
      blockedDates: ['2024-01-30']
    },
    earnings: {
      thisMonth: 4200,
      lastMonth: 3850,
      yearToDate: 8050
    }
  },
  {
    id: '2',
    title: 'Cozy Beachside Studio',
    address: '567 Ocean Drive',
    city: 'Santa Monica',
    state: 'CA',
    country: 'US',
    type: 'Studio',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    sqft: 450,
    nightlyRate: 225,
    cleaningFee: 85,
    status: 'Active',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    ],
    description: 'Charming studio steps from the beach with ocean views',
    amenities: ['WiFi', 'Kitchen', 'Beach access', 'Parking', 'Balcony'],
    yearBuilt: 2018,
    rating: 4.9,
    reviewCount: 203,
    instantBook: false,
    minimumNights: 3,
    maximumNights: 14,
    checkInTime: '4:00 PM',
    checkOutTime: '10:00 AM',
    cancellationPolicy: 'Strict',
    availability: {
      available: true,
      bookedDates: ['2024-01-18', '2024-01-19', '2024-01-20'],
      blockedDates: []
    },
    earnings: {
      thisMonth: 5400,
      lastMonth: 4950,
      yearToDate: 10350
    }
  },
  {
    id: '3',
    title: 'Luxury Hillside Villa',
    address: '890 Canyon Road',
    city: 'Los Angeles',
    state: 'CA',
    country: 'US',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    sqft: 2800,
    nightlyRate: 495,
    cleaningFee: 150,
    status: 'Active',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'
    ],
    description: 'Stunning villa with panoramic city views and private pool',
    amenities: ['WiFi', 'Pool', 'Hot tub', 'Kitchen', 'Parking', 'Garden'],
    yearBuilt: 2015,
    rating: 4.7,
    reviewCount: 89,
    instantBook: true,
    minimumNights: 3,
    maximumNights: 30,
    checkInTime: '4:00 PM',
    checkOutTime: '11:00 AM',
    cancellationPolicy: 'Moderate',
    availability: {
      available: true,
      bookedDates: ['2024-01-22', '2024-01-23', '2024-01-24', '2024-01-25'],
      blockedDates: ['2024-01-31']
    },
    earnings: {
      thisMonth: 8900,
      lastMonth: 7200,
      yearToDate: 16100
    }
  },
  {
    id: '4',
    title: 'Urban Apartment',
    address: '321 Tech Square',
    city: 'Palo Alto',
    state: 'CA',
    country: 'US',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sqft: 1200,
    nightlyRate: 285,
    cleaningFee: 95,
    status: 'Maintenance',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
    ],
    description: 'Modern apartment in tech hub with all amenities',
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Gym', 'Parking', 'Laundry'],
    yearBuilt: 2019,
    rating: 4.6,
    reviewCount: 156,
    instantBook: true,
    minimumNights: 1,
    maximumNights: 28,
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    cancellationPolicy: 'Flexible',
    availability: {
      available: false,
      bookedDates: [],
      blockedDates: ['2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19']
    },
    earnings: {
      thisMonth: 2100,
      lastMonth: 5700,
      yearToDate: 7800
    }
  },
  {
    id: '5',
    title: 'Designer Condo',
    address: '456 Design District',
    city: 'West Hollywood',
    state: 'CA',
    country: 'US',
    type: 'Condo',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sqft: 1100,
    nightlyRate: 315,
    cleaningFee: 110,
    status: 'Active',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    description: 'Sleek designer condo in trendy neighborhood',
    amenities: ['WiFi', 'Kitchen', 'Rooftop', 'Concierge', 'Parking', 'Pool'],
    yearBuilt: 2021,
    rating: 4.8,
    reviewCount: 94,
    instantBook: false,
    minimumNights: 2,
    maximumNights: 21,
    checkInTime: '4:00 PM',
    checkOutTime: '11:00 AM',
    cancellationPolicy: 'Moderate',
    availability: {
      available: true,
      bookedDates: ['2024-01-26', '2024-01-27'],
      blockedDates: []
    },
    earnings: {
      thisMonth: 6300,
      lastMonth: 5940,
      yearToDate: 12240
    }
  }
];