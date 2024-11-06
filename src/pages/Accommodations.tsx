import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Accommodation } from '../types';
import { Slider, Search, Filter } from 'lucide-react';

export default function Accommodations() {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: accommodations, isLoading } = useQuery({
    queryKey: ['accommodations'],
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, 'accommodations'));
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Accommodation[];
    },
  });

  const filteredAccommodations = accommodations?.filter(acc => {
    const matchesType = selectedType === 'all' || acc.type === selectedType;
    const matchesPrice = acc.price >= priceRange[0] && acc.price <= priceRange[1];
    const matchesSearch = acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         acc.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesPrice && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-amber-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
            alt="Accommodations"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Accommodations
          </h1>
          <p className="mt-6 text-xl text-amber-100 max-w-3xl">
            Find your perfect student home with our range of accommodation options
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Search accommodations..."
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="all">All Types</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Deluxe">Deluxe</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (R{priceRange[0]} - R{priceRange[1]})
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAccommodations?.map((accommodation) => (
            <div key={accommodation.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={accommodation.images[0]}
                alt={accommodation.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{accommodation.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    {accommodation.type}
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold text-amber-600">
                  R{accommodation.price.toLocaleString()} per month
                </p>
                <p className="mt-2 text-sm text-gray-600">{accommodation.location}</p>
                <ul className="mt-4 space-y-2">
                  {accommodation.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}