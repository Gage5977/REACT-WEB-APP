import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Users, Settings, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center">
              <Home className="h-6 w-6 text-black" />
              <span className="ml-3 text-2xl font-light tracking-wide text-black">stayhost</span>
            </div>
            <nav className="ml-16 flex space-x-12">
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-black font-medium text-sm tracking-wide relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                    : "text-gray-400 hover:text-gray-600 text-sm tracking-wide font-light transition-colors"
                }
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/properties" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-black font-medium text-sm tracking-wide relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                    : "text-gray-400 hover:text-gray-600 text-sm tracking-wide font-light transition-colors"
                }
              >
                Properties
              </NavLink>
              <NavLink 
                to="/bookings"
                className={({ isActive }) => 
                  isActive 
                    ? "text-black font-medium text-sm tracking-wide relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                    : "text-gray-400 hover:text-gray-600 text-sm tracking-wide font-light transition-colors"
                }
              >
                Bookings
              </NavLink>
              <NavLink 
                to="/guests"
                className={({ isActive }) => 
                  isActive 
                    ? "text-black font-medium text-sm tracking-wide relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                    : "text-gray-400 hover:text-gray-600 text-sm tracking-wide font-light transition-colors"
                }
              >
                Guests
              </NavLink>
              <NavLink 
                to="/calendar"
                className={({ isActive }) => 
                  isActive 
                    ? "text-black font-medium text-sm tracking-wide relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                    : "text-gray-400 hover:text-gray-600 text-sm tracking-wide font-light transition-colors"
                }
              >
                Calendar
              </NavLink>
              <NavLink 
                to="/analytics"
                className={({ isActive }) => 
                  isActive 
                    ? "text-black font-medium text-sm tracking-wide relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                    : "text-gray-400 hover:text-gray-600 text-sm tracking-wide font-light transition-colors"
                }
              >
                Analytics
              </NavLink>
              <NavLink 
                to="/reports"
                className={({ isActive }) => 
                  isActive 
                    ? "text-black font-medium text-sm tracking-wide relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                    : "text-gray-400 hover:text-gray-600 text-sm tracking-wide font-light transition-colors"
                }
              >
                Reports
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 block h-2 w-2 bg-black rounded-full"></span>
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;