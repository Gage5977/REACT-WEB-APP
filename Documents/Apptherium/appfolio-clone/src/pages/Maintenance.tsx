import React, { useState } from 'react';
import { Search, Plus, Wrench, AlertTriangle, Clock, CheckCircle, Calendar, DollarSign, User, MapPin } from 'lucide-react';
import { mockMaintenanceRequests, MaintenanceRequest } from '../data/mockMaintenance';

const Maintenance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState<MaintenanceRequest | null>(null);

  const filteredRequests = mockMaintenanceRequests.filter(request => {
    const matchesSearch = 
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.propertyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.tenantName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || request.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || request.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Emergency': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Plumbing': return '🔧';
      case 'Electrical': return '⚡';
      case 'HVAC': return '❄️';
      case 'Appliance': return '🏠';
      case 'General': return '🔨';
      case 'Emergency': return '🚨';
      default: return '🔧';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <Clock className="w-4 h-4" />;
      case 'In Progress': return <Wrench className="w-4 h-4" />;
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      case 'Cancelled': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Maintenance Requests</h1>
            <p className="text-gray-600">
              Track and manage property maintenance and work orders
            </p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Request
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search maintenance requests..."
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
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Priority</option>
            <option value="Emergency">Emergency</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3 mt-1">{getCategoryIcon(request.category)}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{request.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                    {getStatusIcon(request.status)}
                    <span className="ml-1">{request.status}</span>
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(request.priority)}`}>
                    {request.priority}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{request.propertyName} - {request.unit}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span>{request.tenantName}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Created: {new Date(request.createdDate).toLocaleDateString()}</span>
                </div>
                {request.scheduledDate && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Scheduled: {new Date(request.scheduledDate).toLocaleDateString()}</span>
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>
                    Est. Cost: ${request.estimatedCost}
                    {request.actualCost && ` | Actual: $${request.actualCost}`}
                  </span>
                </div>
              </div>

              {request.assignedTo && (
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Assigned to:</strong> {request.assignedTo}
                  </p>
                </div>
              )}

              <button
                onClick={() => setSelectedRequest(request)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4 mt-1">{getCategoryIcon(selectedRequest.category)}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedRequest.title}</h2>
                    <p className="text-gray-600 mb-2">{selectedRequest.description}</p>
                    <div className="flex gap-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedRequest.status)}`}>
                        {getStatusIcon(selectedRequest.status)}
                        <span className="ml-1">{selectedRequest.status}</span>
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(selectedRequest.priority)}`}>
                        {selectedRequest.priority}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Property:</strong> {selectedRequest.propertyName}</p>
                    <p className="text-sm"><strong>Unit:</strong> {selectedRequest.unit}</p>
                    <p className="text-sm"><strong>Tenant:</strong> {selectedRequest.tenantName}</p>
                    <p className="text-sm"><strong>Category:</strong> {selectedRequest.category}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Timeline & Costs</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Created:</strong> {new Date(selectedRequest.createdDate).toLocaleDateString()}</p>
                    {selectedRequest.scheduledDate && (
                      <p className="text-sm"><strong>Scheduled:</strong> {new Date(selectedRequest.scheduledDate).toLocaleDateString()}</p>
                    )}
                    {selectedRequest.completedDate && (
                      <p className="text-sm"><strong>Completed:</strong> {new Date(selectedRequest.completedDate).toLocaleDateString()}</p>
                    )}
                    <p className="text-sm"><strong>Estimated Cost:</strong> ${selectedRequest.estimatedCost}</p>
                    {selectedRequest.actualCost && (
                      <p className="text-sm"><strong>Actual Cost:</strong> ${selectedRequest.actualCost}</p>
                    )}
                  </div>
                </div>
              </div>

              {selectedRequest.assignedTo && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Assignment</h3>
                  <p className="text-sm text-gray-600">
                    <strong>Assigned to:</strong> {selectedRequest.assignedTo}
                  </p>
                </div>
              )}

              {selectedRequest.images && selectedRequest.images.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Images</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedRequest.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Maintenance issue ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedRequest.notes && selectedRequest.notes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Notes</h3>
                  <div className="space-y-2">
                    {selectedRequest.notes.map((note, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{note}</p>
                      </div>
                    ))}
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

export default Maintenance;