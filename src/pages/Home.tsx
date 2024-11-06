import { Link } from 'react-router-dom';
import { Building, Bus, Shield, Users } from 'lucide-react';

const featuredAccommodations = [
  {
    id: 1,
    name: 'Standard Suite',
    price: 3500,
    location: 'Block A, Vanderbijlpark SE 7',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    features: [
      'Single bed',
      'Study desk',
      'Shared bathroom',
      'WiFi',
      'Walking distance to campus'
    ]
  },
  {
    id: 2,
    name: 'Premium Suite',
    price: 4500,
    location: 'Block B, Vanderbijlpark SE 7',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    features: [
      'Double bed',
      'Private bathroom',
      'Study area',
      'High-speed WiFi',
      '5 min from campus'
    ]
  },
  {
    id: 3,
    name: 'Deluxe Suite',
    price: 5500,
    location: 'Block C, Vanderbijlpark SE 7',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    features: [
      'En-suite bathroom',
      'Kitchenette',
      'Study room',
      'Premium WiFi',
      'Campus view'
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-amber-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
            alt="Student accommodation"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            ELEVATE YOUR LIVING<br />EXPERIENCE IN 2025!!!
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Experience premium student living at its finest. Modern amenities, comfortable spaces, and a vibrant community await you.
          </p>
          <div className="mt-10">
            <Link
              to="/accommodations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
            >
              Explore Accommodations
            </Link>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
                alt="Students studying"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Who We Are</h2>
              <p className="mt-4 text-lg text-gray-600">
                At Vogue Student Living, we understand the importance of creating a comfortable and conducive living environment where students can thrive academically and socially. Our accommodation facilities are designed to provide a safe, secure, and welcoming space for students to call home during their academic journey.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                In addition to our top-notch accommodation services, we also offer convenient transportation solutions for students. We provide reliable and efficient transportation services to ferry students between their accommodation and the NWU Vaal Campus, ensuring that they have a smooth and hassle-free commute to and from their classes.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                With a strong commitment to exceptional service, Vogue Student Living strives to create a supportive and enriching community for students, allowing them to focus on their studies and personal development. Join us at Vogue Student Living and experience student accommodation at its finest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What We Do</h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <Building className="h-12 w-12 text-amber-600" />
                <h3 className="mt-6 text-lg font-medium text-gray-900">Premium Accommodation</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Modern, fully-furnished rooms designed for comfort and study
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Bus className="h-12 w-12 text-amber-600" />
                <h3 className="mt-6 text-lg font-medium text-gray-900">Transport Services</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Reliable shuttle service to and from NWU Vaal Campus
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-amber-600" />
                <h3 className="mt-6 text-lg font-medium text-gray-900">24/7 Security</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Advanced security systems and personnel for your peace of mind
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-amber-600" />
                <h3 className="mt-6 text-lg font-medium text-gray-900">Community Events</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Regular social activities to foster student connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Accommodations */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Featured Accommodations
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAccommodations.map((accommodation) => (
              <div key={accommodation.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{accommodation.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-amber-600">
                    R{accommodation.price.toLocaleString()} per month
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{accommodation.location}</p>
                  <ul className="mt-4 space-y-2">
                    {accommodation.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to={`/accommodations/${accommodation.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}