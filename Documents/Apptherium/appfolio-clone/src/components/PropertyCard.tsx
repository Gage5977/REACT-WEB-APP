import React from 'react';
import { Property } from '../data/mockProperties';
import { MapPin, Bed, Bath, Square, Car, Heart, Eye } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Occupied':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Vacant':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(property.status)}`}>
            {property.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
            ${property.rent.toLocaleString()}/mo
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{property.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{property.type}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm truncate">
            {property.address}, {property.city}, {property.state} {property.zip}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {property.bedrooms && (
            <div className="flex items-center text-gray-600">
              <Bed className="w-4 h-4 mr-2" />
              <span className="text-sm">{property.bedrooms} bed</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center text-gray-600">
              <Bath className="w-4 h-4 mr-2" />
              <span className="text-sm">{property.bathrooms} bath</span>
            </div>
          )}
          <div className="flex items-center text-gray-600">
            <Square className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
          </div>
          {property.parking > 0 && (
            <div className="flex items-center text-gray-600">
              <Car className="w-4 h-4 mr-2" />
              <span className="text-sm">{property.parking} parking</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Built {property.yearBuilt} • {property.units} unit{property.units > 1 ? 's' : ''}
          </div>
          <button
            onClick={() => onViewDetails(property)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;