import React, { useState } from 'react';
import { Search, Plus, Calendar, DollarSign, FileText, User, MapPin, AlertCircle, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import { mockLeases, Lease } from '../data/mockLeases';

const Leases: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedLease, setSelectedLease] = useState<Lease | null>(null);

  const filteredLeases = mockLeases.filter(lease => {
    const matchesSearch = 
      lease.tenantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lease.propertyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lease.unit.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || lease.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Terminated': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="w-4 h-4" />;
      case 'Expired': return <AlertCircle className="w-4 h-4" />;
      case 'Pending': return <Clock className="w-4 h-4" />;
      case 'Terminated': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getRenewalStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted': return 'bg-green-100 text-green-800';
      case 'Declined': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isLeaseExpiringSoon = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const daysUntilExpiry = Math.ceil((end.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return daysUntilExpiry <= 90 && daysUntilExpiry > 0;
  };

  const getDaysUntilExpiry = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    return Math.ceil((end.getTime() - today.getTime()) / (1000 * 3600 * 24));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Lease Management</h1>
            <p className="text-gray-600">
              Manage lease agreements, renewals, and tenant contracts
            </p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Lease
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search leases..."
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
            <option value="Expired">Expired</option>
            <option value="Pending">Pending</option>
            <option value="Terminated">Terminated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLeases.map((lease) => (
          <div key={lease.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{lease.tenantName}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{lease.propertyName} - {lease.unit}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lease.status)}`}>
                    {getStatusIcon(lease.status)}
                    <span className="ml-1">{lease.status}</span>
                  </span>
                  <span className="text-xs text-gray-500">{lease.leaseType}</span>
                </div>
              </div>

              {isLeaseExpiringSoon(lease.endDate) && lease.status === 'Active' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                    <span className="text-sm text-yellow-800">
                      Expires in {getDaysUntilExpiry(lease.endDate)} days
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(lease.startDate).toLocaleDateString()} - {new Date(lease.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>${lease.monthlyRent.toLocaleString()}/month</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>{lease.documents.length} document{lease.documents.length !== 1 ? 's' : ''}</span>
                </div>
              </div>

              {lease.renewalOffered && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <RefreshCw className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-blue-800">Renewal Offered</span>
                    </div>
                    {lease.renewalStatus && (
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRenewalStatusColor(lease.renewalStatus)}`}>
                        {lease.renewalStatus}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-gray-600">Security Deposit</p>
                  <p className="font-medium">${lease.securityDeposit.toLocaleString()}</p>
                </div>
                {lease.petDeposit && (
                  <div>
                    <p className="text-gray-600">Pet Deposit</p>
                    <p className="font-medium">${lease.petDeposit.toLocaleString()}</p>
                  </div>
                )}
                {lease.parkingFee && (
                  <div>
                    <p className="text-gray-600">Parking Fee</p>
                    <p className="font-medium">${lease.parkingFee}/month</p>
                  </div>
                )}
                {lease.utilityDeposit && (
                  <div>
                    <p className="text-gray-600">Utility Deposit</p>
                    <p className="font-medium">${lease.utilityDeposit.toLocaleString()}</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedLease(lease)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedLease && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLease.tenantName}</h2>
                  <p className="text-gray-600 mb-2">{selectedLease.propertyName} - {selectedLease.unit}</p>
                  <div className="flex gap-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedLease.status)}`}>
                      {getStatusIcon(selectedLease.status)}
                      <span className="ml-1">{selectedLease.status}</span>
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {selectedLease.leaseType}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLease(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lease Terms</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Start Date:</strong> {new Date(selectedLease.startDate).toLocaleDateString()}</p>
                    <p className="text-sm"><strong>End Date:</strong> {new Date(selectedLease.endDate).toLocaleDateString()}</p>
                    <p className="text-sm"><strong>Monthly Rent:</strong> ${selectedLease.monthlyRent.toLocaleString()}</p>
                    <p className="text-sm"><strong>Security Deposit:</strong> ${selectedLease.securityDeposit.toLocaleString()}</p>
                    {selectedLease.petDeposit && (
                      <p className="text-sm"><strong>Pet Deposit:</strong> ${selectedLease.petDeposit.toLocaleString()}</p>
                    )}
                    {selectedLease.parkingFee && (
                      <p className="text-sm"><strong>Parking Fee:</strong> ${selectedLease.parkingFee}/month</p>
                    )}
                    {selectedLease.utilityDeposit && (
                      <p className="text-sm"><strong>Utility Deposit:</strong> ${selectedLease.utilityDeposit.toLocaleString()}</p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Renewal Information</h3>
                  <div className="space-y-2">
                    {selectedLease.renewalDate && (
                      <p className="text-sm"><strong>Renewal Decision Due:</strong> {new Date(selectedLease.renewalDate).toLocaleDateString()}</p>
                    )}
                    <p className="text-sm"><strong>Renewal Offered:</strong> {selectedLease.renewalOffered ? 'Yes' : 'No'}</p>
                    {selectedLease.renewalStatus && (
                      <p className="text-sm">
                        <strong>Renewal Status:</strong>
                        <span className={`ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRenewalStatusColor(selectedLease.renewalStatus)}`}>
                          {selectedLease.renewalStatus}
                        </span>
                      </p>
                    )}
                    {selectedLease.lastRentIncrease && (
                      <p className="text-sm"><strong>Last Rent Increase:</strong> {new Date(selectedLease.lastRentIncrease).toLocaleDateString()}</p>
                    )}
                    {selectedLease.nextRentReview && (
                      <p className="text-sm"><strong>Next Rent Review:</strong> {new Date(selectedLease.nextRentReview).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedLease.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 text-gray-500 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                          <p className="text-xs text-gray-500">{doc.type} • {new Date(doc.uploadDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leases;