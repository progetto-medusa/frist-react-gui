import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Loading auth...</div>; // evita redirect prematuro
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}