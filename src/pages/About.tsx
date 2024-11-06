import { Building2, Users, Shield, Trophy } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Happy Students', value: '1000+' },
    { label: 'Properties', value: '50+' },
    { label: 'Awards', value: '15+' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'With over 15 years in student housing management, Sarah leads our vision for excellence.'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Michael ensures smooth daily operations and maintains our high service standards.'
    },
    {
      name: 'Lisa Patel',
      role: 'Student Relations Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Lisa focuses on creating a supportive environment for our student community.'
    },
    {
      name: 'David Ndlovu',
      role: 'Facilities Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      bio: 'David oversees property maintenance and security implementations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-amber-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
            alt="About Vogue Student Living"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Vogue Student Living
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Setting new standards in student accommodation since 2015
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-amber-50 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-amber-600">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              To provide students with exceptional living spaces that inspire academic excellence and personal growth.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Premium Facilities</h3>
                <p className="mt-2 text-gray-600">
                  Modern, well-maintained accommodations designed for comfort and study.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Community Focus</h3>
                <p className="mt-2 text-gray-600">
                  Creating vibrant student communities that foster lifelong friendships.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Safety First</h3>
                <p className="mt-2 text-gray-600">
                  24/7 security and strict access control for peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the dedicated professionals behind Vogue Student Living
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-amber-600">{member.role}</p>
                  <p className="mt-3 text-base text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}