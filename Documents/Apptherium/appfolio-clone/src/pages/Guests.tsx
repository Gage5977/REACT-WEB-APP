import React, { useState } from 'react';
import { Search, Mail, Phone, MapPin, Star, Calendar } from 'lucide-react';

interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  totalStays: number;
  totalSpent: number;
  rating: number;
  joinDate: string;
  lastStay: string;
  upcomingStays: number;
  preferredProperties: string[];
  notes?: string;
  verified: boolean;
}

const mockGuests: Guest[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612f56b?w=150&h=150&fit=crop&crop=face',
    totalStays: 8,
    totalSpent: 12450,
    rating: 4.9,
    joinDate: '2023-03-15',
    lastStay: '2024-01-10',
    upcomingStays: 1,
    preferredProperties: ['Modern Downtown Loft', 'Designer Condo'],
    notes: 'Prefers late check-in. Always leaves properties in excellent condition.',
    verified: true
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    totalStays: 12,
    totalSpent: 18750,
    rating: 4.8,
    joinDate: '2022-11-08',
    lastStay: '2023-12-20',
    upcomingStays: 2,
    preferredProperties: ['Cozy Beachside Studio', 'Urban Apartment'],
    verified: true
  },
  {
    id: '3',
    firstName: 'Emma',
    lastName: 'Rodriguez',
    email: 'emma.rodriguez@email.com',
    phone: '+1 (555) 345-6789',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    totalStays: 3,
    totalSpent: 4200,
    rating: 4.7,
    joinDate: '2023-08-22',
    lastStay: '2023-11-15',
    upcomingStays: 1,
    preferredProperties: ['Luxury Hillside Villa'],
    notes: 'Travels with family. Appreciates kid-friendly amenities.',
    verified: true
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@email.com',
    phone: '+1 (555) 456-7890',
    location: 'Chicago, IL',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    totalStays: 15,
    totalSpent: 22100,
    rating: 4.9,
    joinDate: '2022-06-12',
    lastStay: '2024-01-05',
    upcomingStays: 0,
    preferredProperties: ['Designer Condo', 'Modern Downtown Loft'],
    notes: 'Business traveler. Prefers properties with workspace.',
    verified: true
  },
  {
    id: '5',
    firstName: 'Lisa',
    lastName: 'Thompson',
    email: 'lisa.thompson@email.com',
    phone: '+1 (555) 567-8901',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    totalStays: 6,
    totalSpent: 8900,
    rating: 4.6,
    joinDate: '2023-01-30',
    lastStay: '2023-10-22',
    upcomingStays: 0,
    preferredProperties: ['Cozy Beachside Studio'],
    verified: false
  }
];

const Guests: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const filteredGuests = mockGuests.filter(guest => {
    const matchesSearch = 
      guest.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-light text-black mb-2">Guests</h1>
            <p className="text-gray-500 font-light">
              {filteredGuests.length} guest{filteredGuests.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search guests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors font-light"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuests.map((guest) => (
          <div 
            key={guest.id} 
            className="bg-white border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer p-6"
            onClick={() => setSelectedGuest(guest)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={guest.avatar}
                  alt={`${guest.firstName} ${guest.lastName}`}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-medium text-black">
                    {guest.firstName} {guest.lastName}
                  </h3>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <Star className="w-3 h-3 text-black mr-1" />
                      <span className="text-sm font-light">{guest.rating}</span>
                    </div>
                    {guest.verified && (
                      <span className="text-xs text-green-600 font-medium">Verified</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-500 text-sm">
                <Mail className="w-3 h-3 mr-2" />
                <span className="font-light">{guest.email}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-3 h-3 mr-2" />
                <span className="font-light">{guest.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 font-light">Total Stays</p>
                <p className="font-medium text-black">{guest.totalStays}</p>
              </div>
              <div>
                <p className="text-gray-500 font-light">Total Spent</p>
                <p className="font-medium text-black">${guest.totalSpent.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500 font-light">Last Stay</p>
                <p className="font-medium text-black">{new Date(guest.lastStay).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gray-500 font-light">Upcoming</p>
                <p className="font-medium text-black">{guest.upcomingStays} stay{guest.upcomingStays !== 1 ? 's' : ''}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGuest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={selectedGuest.avatar}
                    alt={`${selectedGuest.firstName} ${selectedGuest.lastName}`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-light text-black mb-1">
                      {selectedGuest.firstName} {selectedGuest.lastName}
                    </h2>
                    <div className="flex items-center">
                      <div className="flex items-center mr-3">
                        <Star className="w-4 h-4 text-black mr-1" />
                        <span className="font-light">{selectedGuest.rating} rating</span>
                      </div>
                      {selectedGuest.verified && (
                        <span className="text-xs text-green-600 font-medium">Verified</span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGuest(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-black mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-sm font-light">{selectedGuest.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-sm font-light">{selectedGuest.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-sm font-light">{selectedGuest.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-4">Stay History</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Total Stays</span>
                      <span className="font-medium">{selectedGuest.totalStays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Total Spent</span>
                      <span className="font-medium">${selectedGuest.totalSpent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Member Since</span>
                      <span className="font-medium">{new Date(selectedGuest.joinDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Last Stay</span>
                      <span className="font-medium">{new Date(selectedGuest.lastStay).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Upcoming Stays</span>
                      <span className="font-medium">{selectedGuest.upcomingStays}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-black mb-4">Preferred Properties</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGuest.preferredProperties.map((property, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-sm font-light text-gray-700">
                      {property}
                    </span>
                  ))}
                </div>
              </div>

              {selectedGuest.notes && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-black mb-4">Notes</h3>
                  <p className="text-sm text-gray-600 font-light bg-gray-50 p-4">
                    {selectedGuest.notes}
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button className="px-6 py-2 bg-black text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors">
                  Contact Guest
                </button>
                <button className="px-6 py-2 border border-gray-200 text-gray-700 text-sm font-light tracking-wide hover:bg-gray-50 transition-colors">
                  View Bookings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guests;