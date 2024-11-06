import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { Home, LogOut } from 'lucide-react';
import { auth } from '../lib/firebase';

export default function Navbar() {
  const { user, setUser } = useAuthStore();

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Home className="h-6 w-6 text-amber-600" />
              <span className="ml-2 font-semibold text-xl">Vogue Student Living</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/accommodations"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Accommodations
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-amber-600"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}