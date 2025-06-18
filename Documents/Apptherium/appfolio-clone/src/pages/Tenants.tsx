import React, { useState } from 'react';
import { Search, Filter, Mail, Phone, MapPin, DollarSign, Calendar, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { mockTenants, Tenant } from '../data/mockTenants';

const Tenants: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);

  const filteredTenants = mockTenants.filter(tenant => {
    const matchesSearch = 
      tenant.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.propertyName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || tenant.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Past Due': return 'bg-red-100 text-red-800';
      case 'Notice Given': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="w-4 h-4" />;
      case 'Past Due': return <AlertCircle className="w-4 h-4" />;
      case 'Notice Given': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tenants</h1>
        <p className="text-gray-600">
          Manage your tenant relationships and lease information
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search tenants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Past Due">Past Due</option>
            <option value="Notice Given">Notice Given</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTenants.map((tenant) => (
          <div key={tenant.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={tenant.avatar}
                    alt={`${tenant.firstName} ${tenant.lastName}`}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {tenant.firstName} {tenant.lastName}
                    </h3>
                    <p className="text-sm text-gray-600">{tenant.unit}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(tenant.status)}`}>
                  {getStatusIcon(tenant.status)}
                  <span className="ml-1">{tenant.status}</span>
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{tenant.propertyName}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{tenant.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{tenant.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>${tenant.monthlyRent.toLocaleString()}/month</span>
                </div>
              </div>

              {tenant.balance !== 0 && (
                <div className={`p-3 rounded-lg mb-4 ${tenant.balance < 0 ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                  <div className="flex items-center">
                    <DollarSign className={`w-4 h-4 mr-2 ${tenant.balance < 0 ? 'text-red-600' : 'text-green-600'}`} />
                    <span className={`text-sm font-medium ${tenant.balance < 0 ? 'text-red-800' : 'text-green-800'}`}>
                      Balance: ${Math.abs(tenant.balance).toLocaleString()}
                      {tenant.balance < 0 ? ' (Past Due)' : ' (Credit)'}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Lease: {new Date(tenant.leaseStart).toLocaleDateString()} - {new Date(tenant.leaseEnd).toLocaleDateString()}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedTenant(tenant)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTenant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={selectedTenant.avatar}
                    alt={`${selectedTenant.firstName} ${selectedTenant.lastName}`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedTenant.firstName} {selectedTenant.lastName}
                    </h2>
                    <p className="text-gray-600">{selectedTenant.propertyName} - {selectedTenant.unit}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTenant(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{selectedTenant.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{selectedTenant.phone}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Emergency Contact</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Name:</strong> {selectedTenant.emergencyContact.name}</p>
                    <p className="text-sm"><strong>Phone:</strong> {selectedTenant.emergencyContact.phone}</p>
                    <p className="text-sm"><strong>Relationship:</strong> {selectedTenant.emergencyContact.relationship}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lease Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Monthly Rent:</strong> ${selectedTenant.monthlyRent.toLocaleString()}</p>
                    <p className="text-sm"><strong>Security Deposit:</strong> ${selectedTenant.securityDeposit.toLocaleString()}</p>
                    <p className="text-sm"><strong>Lease Start:</strong> {new Date(selectedTenant.leaseStart).toLocaleDateString()}</p>
                    <p className="text-sm"><strong>Lease End:</strong> {new Date(selectedTenant.leaseEnd).toLocaleDateString()}</p>
                    <p className="text-sm"><strong>Move-in Date:</strong> {new Date(selectedTenant.moveInDate).toLocaleDateString()}</p>
                    <div className="flex items-center">
                      <strong className="text-sm mr-2">Status:</strong>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedTenant.status)}`}>
                        {getStatusIcon(selectedTenant.status)}
                        <span className="ml-1">{selectedTenant.status}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedTenant.balance !== 0 && (
                <div className={`p-4 rounded-lg mt-6 ${selectedTenant.balance < 0 ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                  <h3 className="text-lg font-semibold mb-2">Account Balance</h3>
                  <div className="flex items-center">
                    <DollarSign className={`w-5 h-5 mr-2 ${selectedTenant.balance < 0 ? 'text-red-600' : 'text-green-600'}`} />
                    <span className={`text-lg font-medium ${selectedTenant.balance < 0 ? 'text-red-800' : 'text-green-800'}`}>
                      ${Math.abs(selectedTenant.balance).toLocaleString()}
                      {selectedTenant.balance < 0 ? ' (Past Due)' : ' (Credit)'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tenants;