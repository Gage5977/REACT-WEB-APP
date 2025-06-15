import React, { useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import PropertyGrid from './components/PropertyGrid';
import PropertyModal from './components/PropertyModal';
import { mockProperties, Property } from './data/mockProperties';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      const matchesSearch = 
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.state.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = selectedType === 'All' || property.type === selectedType;
      const matchesStatus = selectedStatus === 'All' || property.status === selectedStatus;
      const matchesPrice = property.rent >= priceRange[0] && property.rent <= priceRange[1];

      return matchesSearch && matchesType && matchesStatus && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedStatus, priceRange]);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Properties</h1>
          <p className="text-gray-600">
            Showing {filteredProperties.length} of {mockProperties.length} properties
          </p>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />

        <PropertyGrid
          properties={filteredProperties}
          onViewDetails={handleViewDetails}
        />
      </main>

      <PropertyModal
        property={selectedProperty}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
