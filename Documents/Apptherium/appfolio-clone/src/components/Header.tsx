import React from 'react';
import { Building2, Bell, Settings, User, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PropertyManager</span>
            </div>
            <nav className="ml-10 flex space-x-8">
              <a href="#" className="text-blue-600 border-b-2 border-blue-600 py-2 px-1 text-sm font-medium">
                Properties
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 py-2 px-1 text-sm font-medium">
                Tenants
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 py-2 px-1 text-sm font-medium">
                Leases
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 py-2 px-1 text-sm font-medium">
                Maintenance
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 py-2 px-1 text-sm font-medium">
                Reports
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Add Property
            </button>
            
            <button className="p-2 text-gray-500 hover:text-gray-700 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Settings className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Property Manager</p>
              </div>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                <User className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;