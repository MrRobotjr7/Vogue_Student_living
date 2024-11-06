import { Link } from 'react-router-dom';
import { Accommodation } from '../types';
import { MapPin, Wifi, Check } from 'lucide-react';

interface Props {
  accommodation: Accommodation;
}

export default function AccommodationCard({ accommodation }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={accommodation.images[0]}
        alt={accommodation.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{accommodation.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {accommodation.type}
          </span>
        </div>
        <div className="mt-2 flex items-center text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{accommodation.location}</span>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Features</h4>
          <ul className="mt-2 space-y-2">
            {accommodation.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center text-sm text-gray-500">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            R{accommodation.price.toLocaleString()}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </span>
          <Link
            to={`/accommodations/${accommodation.id}`}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}