import { Wifi, Shield, Coffee, Bus, Book, Dumbbell } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Fast and reliable WiFi throughout all our properties'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security personnel and CCTV monitoring'
    },
    {
      icon: Coffee,
      title: 'Study Areas',
      description: 'Quiet, well-equipped spaces for focused studying'
    },
    {
      icon: Bus,
      title: 'Shuttle Service',
      description: 'Regular transport to and from campus'
    },
    {
      icon: Book,
      title: 'Library Access',
      description: 'On-site mini library with essential resources'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Modern gym equipment for active lifestyles'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-amber-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-amber-100 max-w-3xl">
            Everything you need for a comfortable and productive student life
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Our Services?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best possible living experience for students.
              Our comprehensive service package ensures you can focus on what matters most - your studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}