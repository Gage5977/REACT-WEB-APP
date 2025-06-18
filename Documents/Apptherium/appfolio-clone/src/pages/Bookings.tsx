import React, { useState } from 'react';
import { Calendar, MapPin, User, DollarSign, Clock, Search } from 'lucide-react';

interface Booking {
  id: string;
  propertyTitle: string;
  propertyImage: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalAmount: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled' | 'Completed';
  bookingDate: string;
  specialRequests?: string;
}

const mockBookings: Booking[] = [
  {
    id: '1',
    propertyTitle: 'Modern Downtown Loft',
    propertyImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    guestName: 'Sarah Johnson',
    checkIn: '2024-01-20',
    checkOut: '2024-01-23',
    nights: 3,
    guests: 2,
    totalAmount: 630,
    status: 'Confirmed',
    bookingDate: '2024-01-15',
    specialRequests: 'Late check-in requested'
  },
  {
    id: '2',
    propertyTitle: 'Cozy Beachside Studio',
    propertyImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    guestName: 'Michael Chen',
    checkIn: '2024-01-25',
    checkOut: '2024-01-28',
    nights: 3,
    guests: 2,
    totalAmount: 760,
    status: 'Confirmed',
    bookingDate: '2024-01-18'
  },
  {
    id: '3',
    propertyTitle: 'Luxury Hillside Villa',
    propertyImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
    guestName: 'Emma Rodriguez',
    checkIn: '2024-02-01',
    checkOut: '2024-02-05',
    nights: 4,
    guests: 6,
    totalAmount: 2130,
    status: 'Pending',
    bookingDate: '2024-01-19',
    specialRequests: 'Birthday celebration - decorations allowed'
  },
  {
    id: '4',
    propertyTitle: 'Designer Condo',
    propertyImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    guestName: 'David Wilson',
    checkIn: '2024-01-15',
    checkOut: '2024-01-18',
    nights: 3,
    guests: 2,
    totalAmount: 1055,
    status: 'Completed',
    bookingDate: '2024-01-10'
  },
  {
    id: '5',
    propertyTitle: 'Urban Apartment',
    propertyImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    guestName: 'Lisa Thompson',
    checkIn: '2024-01-22',
    checkOut: '2024-01-24',
    nights: 2,
    guests: 1,
    totalAmount: 665,
    status: 'Cancelled',
    bookingDate: '2024-01-20'
  }
];

const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch = 
      booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'text-green-600';
      case 'Pending': return 'text-yellow-600';
      case 'Cancelled': return 'text-red-500';
      case 'Completed': return 'text-gray-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-light text-black mb-2">Bookings</h1>
            <p className="text-gray-500 font-light">
              {filteredBookings.length} booking{filteredBookings.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors font-light"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors font-light"
          >
            <option value="All">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div 
            key={booking.id} 
            className="bg-white border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
            onClick={() => setSelectedBooking(booking)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img
                    src={booking.propertyImage}
                    alt={booking.propertyTitle}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-black mb-1">{booking.propertyTitle}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <User className="w-3 h-3 mr-1" />
                      <span className="font-light">{booking.guestName}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="font-light">
                          {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="font-light">{booking.nights} nights</span>
                      <span className="font-light">{booking.guests} guests</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="mb-2">
                    <span className={`text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="text-lg font-medium text-black mb-1">
                    ${booking.totalAmount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    Booked {new Date(booking.bookingDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              {booking.specialRequests && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 font-light">
                    <span className="font-medium">Special requests:</span> {booking.specialRequests}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-light text-black mb-2">Booking Details</h2>
                  <span className={`text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                    {selectedBooking.status}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={selectedBooking.propertyImage}
                    alt={selectedBooking.propertyTitle}
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">{selectedBooking.propertyTitle}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-2" />
                        <span className="font-light">{selectedBooking.guestName}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-2" />
                        <span className="font-light">
                          {new Date(selectedBooking.checkIn).toLocaleDateString()} - {new Date(selectedBooking.checkOut).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-black mb-3">Stay Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-light">Nights</span>
                        <span className="font-medium">{selectedBooking.nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-light">Guests</span>
                        <span className="font-medium">{selectedBooking.guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-light">Check-in</span>
                        <span className="font-medium">{new Date(selectedBooking.checkIn).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-light">Check-out</span>
                        <span className="font-medium">{new Date(selectedBooking.checkOut).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-black mb-3">Payment</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-light">Total Amount</span>
                        <span className="font-medium">${selectedBooking.totalAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-light">Booking Date</span>
                        <span className="font-medium">{new Date(selectedBooking.bookingDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedBooking.specialRequests && (
                  <div>
                    <h4 className="font-medium text-black mb-3">Special Requests</h4>
                    <p className="text-sm text-gray-600 font-light bg-gray-50 p-4">
                      {selectedBooking.specialRequests}
                    </p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button className="px-6 py-2 bg-black text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors">
                    Contact Guest
                  </button>
                  <button className="px-6 py-2 border border-gray-200 text-gray-700 text-sm font-light tracking-wide hover:bg-gray-50 transition-colors">
                    View Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;