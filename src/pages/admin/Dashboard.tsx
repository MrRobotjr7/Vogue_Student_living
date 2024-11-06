import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Building, Users, ClipboardList } from 'lucide-react';
import AccommodationsList from './AccommodationsList';
import ApplicationsList from './ApplicationsList';
import StudentsList from './StudentsList';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('accommodations');

  const tabs = [
    { id: 'accommodations', name: 'Accommodations', icon: Building, component: AccommodationsList },
    { id: 'applications', name: 'Applications', icon: ClipboardList, component: ApplicationsList },
    { id: 'students', name: 'Students', icon: Users, component: StudentsList },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Link
                    key={tab.id}
                    to={`/admin/${tab.id}`}
                    className={`${
                      activeTab === tab.id
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } flex items-center py-4 px-6 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {tab.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="p-6">
            <Routes>
              <Route path="/" element={<AccommodationsList />} />
              <Route path="/accommodations" element={<AccommodationsList />} />
              <Route path="/applications" element={<ApplicationsList />} />
              <Route path="/students" element={<StudentsList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}