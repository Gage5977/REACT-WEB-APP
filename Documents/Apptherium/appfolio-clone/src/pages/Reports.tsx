import React, { useState } from 'react';
import { Download, FileText, TrendingUp } from 'lucide-react';


const Reports: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState('All Properties');
  const [selectedDateRange, setSelectedDateRange] = useState('Last Year (2023)');



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Financial Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Property:</span>
              <select 
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="px-3 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="All Properties">All Properties</option>
                <option value="Highland Ave">Highland Ave</option>
                <option value="Oak Street">Oak Street</option>
                <option value="Sunset Complex">Sunset Complex</option>
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
                <option value="Last 3 Months">Last 3 Months</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$396,865.67</div>
            <div className="text-sm text-gray-600 font-medium">Cash In</div>
            <div className="text-xs text-green-600 mt-1">+12.3% from last period</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">$535,093.87</div>
            <div className="text-sm text-gray-600 font-medium">Cash Out</div>
            <div className="text-xs text-red-600 mt-1">+8.7% from last period</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">$0.00</div>
            <div className="text-sm text-gray-600 font-medium">Your Contributions</div>
            <div className="text-xs text-gray-500 mt-1">No change</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">$0.00</div>
            <div className="text-sm text-gray-600 font-medium">Your Disbursements</div>
            <div className="text-xs text-gray-500 mt-1">No change</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Rent Collected</h3>
              <div className="flex items-center text-sm text-gray-500">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>75% collected</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">$365,043.90</div>
            <div className="text-sm text-gray-600 mb-4">of $482,428.09 total expected</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="text-xs text-gray-600 mt-2">75% collected as of 12/31/2023</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Occupancy Rate</h3>
              <div className="flex items-center text-sm text-gray-500">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>92.3%</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">92.3%</div>
            <div className="text-sm text-gray-600 mb-4">60 of 65 units occupied</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: '92.3%' }}></div>
            </div>
            <div className="text-xs text-gray-600 mt-2">5 units currently vacant</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Cash Flow Analysis</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3901 Highland Ave - 10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rent Income - Prepayment</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">+$911.60</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/01/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Income
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3901 Highland Ave - 12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rent Income - Prepayment</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">+$3,341.29</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/01/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Income
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oak Street Complex - 5A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Maintenance - HVAC Repair</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">-$1,250.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/05/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Expense
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sunset Complex - B2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly Rent</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">+$2,850.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/15/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Income
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">All Properties</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Property Insurance Premium</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">-$4,200.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10/20/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Expense
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Profit & Loss Summary</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Gross Rental Income</span>
                  <span className="text-sm font-bold text-green-600">$396,865.67</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Operating Expenses</span>
                  <span className="text-sm font-bold text-red-600">($89,234.12)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Maintenance & Repairs</span>
                  <span className="text-sm font-bold text-red-600">($23,456.78)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Property Management</span>
                  <span className="text-sm font-bold text-red-600">($15,874.63)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t-2 border-gray-200 mt-4">
                  <span className="text-base font-bold text-gray-900">Net Operating Income</span>
                  <span className="text-base font-bold text-blue-600">$268,300.14</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Property Performance</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Highland Ave Complex</div>
                    <div className="text-xs text-gray-500">24 units • 95.8% occupied</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">$52,400</div>
                    <div className="text-xs text-gray-500">Monthly revenue</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Oak Street Complex</div>
                    <div className="text-xs text-gray-500">12 units • 91.7% occupied</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">$28,200</div>
                    <div className="text-xs text-gray-500">Monthly revenue</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Sunset Complex</div>
                    <div className="text-xs text-gray-500">18 units • 88.9% occupied</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">$35,600</div>
                    <div className="text-xs text-gray-500">Monthly revenue</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">University Heights</div>
                    <div className="text-xs text-gray-500">11 units • 90.9% occupied</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">$22,100</div>
                    <div className="text-xs text-gray-500">Monthly revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Financial Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">Monthly_P&L_Statement_Dec_2023.pdf</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      P&L Statement
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/15/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">Cash_Flow_Report_2023.pdf</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Cash Flow
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/10/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">Owner_1099_2023.pdf</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Tax Document
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/25/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">Rent_Roll_Current.pdf</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Rent Roll
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/28/2024</td>
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

export default Reports;