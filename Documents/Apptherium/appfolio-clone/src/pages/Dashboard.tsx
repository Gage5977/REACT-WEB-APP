import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Users, 
  Calendar,
  Menu,
  X,
  Building,
  FileText,
  Wrench,
  CheckCircle,
  Moon,
  Sun
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved dark mode preference
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode to document root and save to localStorage
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Cleanup function to remove dark class when component unmounts
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, [darkMode]);

  const rentIncomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Rent Income',
        data: [32000, 34000, 36000, 39000, 41000, 43500],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  };

  const incomeExpenseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [32000, 34000, 36000, 39000, 41000, 43500],
        backgroundColor: '#3b82f6',
        borderRadius: 6,
      },
      {
        label: 'Expenses',
        data: [15000, 17000, 19000, 22000, 25000, 26500],
        backgroundColor: '#ef4444',
        borderRadius: 6,
      },
    ],
  };

  const operatingExpenseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Operating Income',
        data: [28000, 31000, 32000, 35000, 37000, 39000],
        backgroundColor: '#8b5cf6',
        borderRadius: 6,
      },
      {
        label: 'Operating Expenses',
        data: [12000, 14000, 16000, 18000, 20000, 22000],
        backgroundColor: '#f59e0b',
        borderRadius: 6,
      },
    ],
  };

  const baseChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 12,
          font: {
            size: 12,
            weight: 'bold' as const,
          },
          color: darkMode ? '#e5e7eb' : '#374151',
        },
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: darkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: $${(value / 1000).toFixed(1)}k`;
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    scales: {
      x: {
        grid: { 
          color: darkMode ? '#374151' : '#e5e7eb',
          display: false,
        },
        border: {
          display: false,
        },
        ticks: { 
          color: darkMode ? '#9ca3af' : '#6b7280',
          font: {
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: { 
          color: darkMode ? '#374151' : '#e5e7eb',
        },
        border: {
          display: false,
        },
        ticks: { 
          color: darkMode ? '#9ca3af' : '#6b7280',
          font: {
            size: 11,
          },
          callback: (value: any) => `$${(value / 1000).toFixed(0)}k`,
        },
      },
    },
  };

  const lineChartOptions = {
    ...baseChartOptions,
    elements: {
      point: {
        radius: 6,
        hoverRadius: 8,
        backgroundColor: '#10b981',
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    },
    scales: {
      ...baseChartOptions.scales,
      x: {
        ...baseChartOptions.scales.x,
        grid: { 
          color: '#e5e7eb',
          display: false,
        },
      },
    },
  };

  const barChartOptions = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      legend: {
        ...baseChartOptions.plugins.legend,
        labels: {
          ...baseChartOptions.plugins.legend.labels,
          padding: 16,
        },
      },
    },
  };

  const operatingExpenseChartOptions = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      legend: {
        ...baseChartOptions.plugins.legend,
        labels: {
          ...baseChartOptions.plugins.legend.labels,
          padding: 16,
        },
      },
    },
  };

  const recentActivities = [
    {
      id: 1,
      type: 'income',
      icon: DollarSign,
      title: 'Rent Payment Received',
      description: '3901 Highland Ave - Unit 12',
      amount: '+$3,341.29',
      date: 'Jun 15, 2024',
      time: '2:30 PM',
      color: 'green',
    },
    {
      id: 2,
      type: 'document',
      icon: FileText,
      title: 'Owner Statement Generated',
      description: 'Monthly financial report',
      date: 'Jun 15, 2024',
      time: '1:15 PM',
      color: 'blue',
    },
    {
      id: 3,
      type: 'maintenance',
      icon: Wrench,
      title: 'Maintenance Completed',
      description: 'HVAC repair at Highland Ave - Unit 8',
      amount: '-$450.00',
      date: 'Jun 14, 2024',
      time: '4:45 PM',
      color: 'orange',
    },
    {
      id: 4,
      type: 'tenant',
      icon: Users,
      title: 'New Lease Signed',
      description: 'Maple Street - Unit 5A (12-month lease)',
      date: 'Jun 14, 2024',
      time: '11:20 AM',
      color: 'purple',
    },
    {
      id: 5,
      type: 'income',
      icon: DollarSign,
      title: 'Rent Payment Received',
      description: 'Oak Avenue - Unit 3B',
      amount: '+$2,850.00',
      date: 'Jun 13, 2024',
      time: '9:15 AM',
      color: 'green',
    },
    {
      id: 6,
      type: 'maintenance',
      icon: Wrench,
      title: 'Work Order Completed',
      description: 'Plumbing repair at Pine Street - Unit 1',
      amount: '-$285.00',
      date: 'Jun 12, 2024',
      time: '3:30 PM',
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-300">
        {/* Sidebar */}
        <motion.aside 
          initial={false}
          animate={{ width: sidebarCollapsed ? 80 : 256 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col shadow-lg"
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center space-x-3"
                animate={{ opacity: sidebarCollapsed ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {!sidebarCollapsed && (
                  <>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                      Fortify PM
                    </h1>
                  </>
                )}
              </motion.div>
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <motion.div
                  animate={{ rotate: sidebarCollapsed ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {sidebarCollapsed ? <Menu size={20} className="text-gray-600 dark:text-gray-400" /> : <X size={20} className="text-gray-600 dark:text-gray-400" />}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {[
              { icon: BarChart3, label: 'Dashboard', active: true },
              { icon: Building, label: 'Properties' },
              { icon: DollarSign, label: 'Financials' },
              { icon: Users, label: 'Tenants' },
              { icon: Calendar, label: 'Maintenance' },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <item.icon size={20} className="flex-shrink-0" />
                <motion.span 
                  className="font-medium"
                  animate={{ opacity: sidebarCollapsed ? 0 : 1, width: sidebarCollapsed ? 0 : 'auto' }}
                  transition={{ duration: 0.2 }}
                >
                  {!sidebarCollapsed && item.label}
                </motion.span>
              </motion.a>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-600" />}
              {!sidebarCollapsed && (
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              )}
            </motion.button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here's what's happening with your properties.</p>
              </motion.div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <select className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                  <option>All Properties</option>
                  <option>Highland Avenue</option>
                  <option>Oak Street Complex</option>
                </select>
                <select className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                  <option>Last 6 Months</option>
                  <option>Last 3 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
          </header>

          <div className="p-4 sm:p-8 space-y-10">
            {/* Metric Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {[
                {
                  label: 'Rent Income YTD',
                  value: '$474,037.45',
                  change: '+12.5%',
                  trend: 'up',
                  icon: DollarSign,
                  color: 'green',
                },
                {
                  label: 'Operating Income',
                  value: '$472,616.07',
                  change: '+8.3%',
                  trend: 'up',
                  icon: BarChart3,
                  color: 'blue',
                },
                {
                  label: 'Collection Rate',
                  value: '96.2%',
                  change: '+2.1%',
                  trend: 'up',
                  icon: CheckCircle,
                  color: 'purple',
                },
                {
                  label: 'Occupancy Rate',
                  value: '95.4%',
                  change: '-1.2%',
                  trend: 'down',
                  icon: Building,
                  color: 'orange',
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-gray-200/25 dark:hover:shadow-gray-900/25 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{metric.label}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</p>
                      <div className="flex items-center space-x-1">
                        {metric.trend === 'up' ? (
                          <TrendingUp size={14} className="text-green-500" />
                        ) : (
                          <TrendingDown size={14} className="text-red-500" />
                        )}
                        <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${getColorClasses(metric.color)}`}>
                      <metric.icon size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Charts */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Rent Income Trend</h3>
                <div className="h-[300px] w-full">
                  <Line data={rentIncomeData} options={lineChartOptions} />
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Income vs Expenses</h3>
                <div className="h-[300px] w-full">
                  <Bar data={incomeExpenseData} options={barChartOptions} />
                </div>
              </motion.div>
            </motion.div>

            {/* Second Row of Charts */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Operating Performance</h3>
                <div className="h-[300px] w-full">
                  <Bar data={operatingExpenseData} options={operatingExpenseChartOptions} />
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                </div>
                <div className="h-[300px] overflow-y-auto">
                  <div className="p-8 space-y-4">
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer group"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${getColorClasses(activity.color)}`}>
                          <activity.icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 dark:text-white text-sm truncate">{activity.title}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{activity.description}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.date} at {activity.time}</p>
                            </div>
                            {activity.amount && (
                              <span className={`text-sm font-semibold ml-2 ${activity.amount.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                {activity.amount}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;