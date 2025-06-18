import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  propertyTitle: string;
  type: 'booking' | 'maintenance' | 'blocked';
  startDate: string;
  endDate: string;
  guestName?: string;
  color: string;
}

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Sarah Johnson',
    propertyTitle: 'Modern Downtown Loft',
    type: 'booking',
    startDate: '2024-01-20',
    endDate: '2024-01-23',
    guestName: 'Sarah Johnson',
    color: 'bg-green-500'
  },
  {
    id: '2',
    title: 'Michael Chen',
    propertyTitle: 'Cozy Beachside Studio',
    type: 'booking',
    startDate: '2024-01-25',
    endDate: '2024-01-28',
    guestName: 'Michael Chen',
    color: 'bg-green-500'
  },
  {
    id: '3',
    title: 'Maintenance',
    propertyTitle: 'Urban Apartment',
    type: 'maintenance',
    startDate: '2024-01-22',
    endDate: '2024-01-24',
    color: 'bg-orange-500'
  },
  {
    id: '4',
    title: 'Blocked',
    propertyTitle: 'Designer Condo',
    type: 'blocked',
    startDate: '2024-01-30',
    endDate: '2024-01-31',
    color: 'bg-red-500'
  },
  {
    id: '5',
    title: 'Emma Rodriguez',
    propertyTitle: 'Luxury Hillside Villa',
    type: 'booking',
    startDate: '2024-02-01',
    endDate: '2024-02-05',
    guestName: 'Emma Rodriguez',
    color: 'bg-green-500'
  }
];

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 0)); // January 2024
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getEventsForDate = (date: Date) => {
    const dateKey = formatDateKey(date);
    return mockEvents.filter(event => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      return date >= eventStart && date <= eventEnd;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-100"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const events = getEventsForDate(date);
      const isToday = formatDateKey(date) === formatDateKey(new Date());

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-100 p-1 ${isToday ? 'bg-blue-50' : 'bg-white'}`}
        >
          <div className={`text-sm mb-1 ${isToday ? 'font-medium text-blue-600' : 'text-gray-700'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {events.slice(0, 2).map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className={`text-xs p-1 rounded text-white cursor-pointer ${event.color} hover:opacity-80 transition-opacity`}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="truncate">{event.title}</div>
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-gray-500 font-light">
                +{events.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'booking': return 'Booking';
      case 'maintenance': return 'Maintenance';
      case 'blocked': return 'Blocked Period';
      default: return type;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-light text-black mb-2">Calendar</h1>
            <p className="text-gray-500 font-light">
              Manage bookings and availability
            </p>
          </div>
          <button className="bg-black text-white px-6 py-2 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4 mr-2 inline" />
            Add Event
          </button>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-light text-black">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mb-4 flex gap-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span className="font-light text-gray-600">Bookings</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
            <span className="font-light text-gray-600">Maintenance</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
            <span className="font-light text-gray-600">Blocked</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200">
        <div className="grid grid-cols-7 border-b border-gray-200">
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
            <div key={day} className="p-3 text-sm font-medium text-gray-700 bg-gray-50 text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {renderCalendar()}
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-md w-full">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">{selectedEvent.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{selectedEvent.propertyTitle}</p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded mr-3 ${selectedEvent.color}`}></div>
                  <span className="text-sm font-light">{getEventTypeLabel(selectedEvent.type)}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <CalendarIcon className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="font-light">
                    {new Date(selectedEvent.startDate).toLocaleDateString()} - {new Date(selectedEvent.endDate).toLocaleDateString()}
                  </span>
                </div>

                {selectedEvent.guestName && (
                  <div className="flex items-center text-sm">
                    <span className="text-gray-600 font-light">Guest: {selectedEvent.guestName}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                {selectedEvent.type === 'booking' && (
                  <button className="px-4 py-2 bg-black text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors">
                    View Booking
                  </button>
                )}
                <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-light tracking-wide hover:bg-gray-50 transition-colors">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;