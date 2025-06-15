import React from 'react';
import { Property } from '../data/mockProperties';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, onViewDetails }) => {
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🏢</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
        <p className="text-gray-500">Try adjusting your search filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default PropertyGrid;