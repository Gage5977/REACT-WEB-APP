import React from 'react';
import { Property } from '../data/mockProperties';
import { X, MapPin, Bed, Bath, Square, Car, Calendar, PawPrint, WashingMachine, Heart, Share2 } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  if (!property) return null;

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(property.status)}`}>
              {property.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{property.name}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded">{property.type}</span>
                <span>Built {property.yearBuilt}</span>
                <span>{property.units} unit{property.units > 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${property.rent.toLocaleString()}<span className="text-lg text-gray-500">/mo</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            {property.bedrooms && (
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2 text-gray-600" />
                <span className="font-medium">{property.bedrooms}</span>
                <span className="text-gray-600 ml-1">bed{property.bedrooms > 1 ? 's' : ''}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2 text-gray-600" />
                <span className="font-medium">{property.bathrooms}</span>
                <span className="text-gray-600 ml-1">bath{property.bathrooms > 1 ? 's' : ''}</span>
              </div>
            )}
            <div className="flex items-center">
              <Square className="w-5 h-5 mr-2 text-gray-600" />
              <span className="font-medium">{property.sqft.toLocaleString()}</span>
              <span className="text-gray-600 ml-1">sqft</span>
            </div>
            {property.parking > 0 && (
              <div className="flex items-center">
                <Car className="w-5 h-5 mr-2 text-gray-600" />
                <span className="font-medium">{property.parking}</span>
                <span className="text-gray-600 ml-1">parking</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg">
                  <span className="text-blue-700 text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <PawPrint className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <span className="font-medium text-gray-900">Pet Policy</span>
                <p className="text-sm text-gray-600">{property.petFriendly ? 'Pet Friendly' : 'No Pets'}</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <WashingMachine className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <span className="font-medium text-gray-900">Laundry</span>
                <p className="text-sm text-gray-600">{property.laundry}</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <span className="font-medium text-gray-900">Year Built</span>
                <p className="text-sm text-gray-600">{property.yearBuilt}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Manager
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Schedule Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;