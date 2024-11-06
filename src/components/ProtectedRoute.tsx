import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

interface Props {
  children: React.ReactNode;
  role?: 'student' | 'admin';
}

export default function ProtectedRoute({ children, role }: Props) {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}