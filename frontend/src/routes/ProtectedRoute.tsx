import React from 'react';

const ProtectedRoute: React.FC<{ children: React.ReactNode; role?: 'teacher' | 'student' }> = ({ children }) => {
  // Placeholder auth check; real auth will be implemented in later commits
  // For now allow access so the shell can render
  return <>{children}</>;
};

export default ProtectedRoute;
