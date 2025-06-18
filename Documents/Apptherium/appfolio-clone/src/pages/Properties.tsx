import React, { useState } from 'react';
import { Download } from 'lucide-react';

const Properties: React.FC = () => {
  const [selectedPropertyFilter, setSelectedPropertyFilter] = useState('All Properties');
  const [selectedDateRange, setSelectedDateRange] = useState('Last Year (2023)');


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Property:</span>
              <select 
                value={selectedPropertyFilter}
                onChange={(e) => setSelectedPropertyFilter(e.target.value)}
                className="px-3 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="All Properties">All Properties</option>
                <option value="Highland Ave">Highland Ave</option>
                <option value="Oak Street">Oak Street</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Date:</span>
              <select 
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
                className="px-3 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="Last Year (2023)">Last Year (2023)</option>
                <option value="This Year (2024)">This Year (2024)</option>
                <option value="Last 6 Months">Last 6 Months</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-semibold text-green-600 mb-2">$396,865.67</div>
            <div className="text-sm text-gray-600">Cash In</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-semibold text-red-600 mb-2">$535,093.87</div>
            <div className="text-sm text-gray-600">Cash Out</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-semibold text-gray-900 mb-2">$0.00</div>
            <div className="text-sm text-gray-600">Your Contributions</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-semibold text-gray-900 mb-2">$0.00</div>
            <div className="text-sm text-gray-600">Your Disbursements</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rent Collected</h3>
            <div className="text-xl font-semibold mb-2">$365,043.90 of $482,428.09</div>
            <div className="text-sm text-gray-600">75% collected as of 12/31/2023</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">% Occupied</h3>
            <div className="text-sm text-gray-600">Widget not available for this range</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Cash In</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3901 Highland Ave - 10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rent Income - Prepayment</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$911.60</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/01/2023</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3901 Highland Ave - 12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rent Income - Prepayment</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$3,341.29</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/01/2023</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Oak Street Complex - 5A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly Rent</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$2,850.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/15/2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Shared</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Cardhu_LLC_-_Mid_Month.pdf</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/13/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Owner_1099_2022.pdf</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/25/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly_Statement_Nov_2023.pdf</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12/01/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;