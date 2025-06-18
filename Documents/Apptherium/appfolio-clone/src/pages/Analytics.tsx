import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Home } from 'lucide-react';

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 12 Months');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Analytics</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Period:</span>
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="Last 12 Months">Last 12 Months</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Last 3 Months">Last 3 Months</option>
              <option value="This Year">This Year</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">$148,290</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
            <div className="text-xs text-green-600 mt-1">+12.5% from last period</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">89.2%</div>
            <div className="text-sm text-gray-600">Occupancy Rate</div>
            <div className="text-xs text-blue-600 mt-1">+3.8% from last period</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">4.8</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
            <div className="text-xs text-purple-600 mt-1">+0.2 from last period</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">$185</div>
            <div className="text-sm text-gray-600">Avg Daily Rate</div>
            <div className="text-xs text-orange-600 mt-1">+8.2% from last period</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded">
              <div className="text-center">
                <div className="text-gray-400 mb-2">Revenue Chart</div>
                <div className="text-sm text-gray-500">Chart visualization would go here</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Occupancy by Property</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Highland Ave - Unit 10</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">83%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Highland Ave - Unit 12</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-22 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Oak Street Complex - 5A</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-18 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Property Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupancy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Highland Ave - Unit 10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$52,480</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">83%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$175</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.7</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Highland Ave - Unit 12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$58,920</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">92%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$195</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.9</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oak Street Complex - 5A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$36,890</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">75%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$165</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;