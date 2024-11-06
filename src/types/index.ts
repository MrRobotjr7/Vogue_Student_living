export interface Accommodation {
  id: string;
  name: string;
  type: 'Standard' | 'Premium' | 'Deluxe';
  price: number;
  location: string;
  features: string[];
  images: string[];
  available: boolean;
}

export interface Application {
  id: string;
  userId: string;
  accommodationId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  documents: {
    studentId: string;
    proofOfRegistration: string;
  };
}

export interface User {
  id: string;
  email: string;
  role: 'student' | 'admin';
  name: string;
  studentNumber?: string;
}