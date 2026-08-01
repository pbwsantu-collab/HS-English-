import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './layouts/AppShell';
import LoginPage from './pages/Login';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import ProtectedRoute from './routes/ProtectedRoute';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/teacher/*"
            element={
              <ProtectedRoute role="teacher">
                <AppShell>
                  <TeacherDashboard />
                </AppShell>
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/*"
            element={
              <ProtectedRoute role="student">
                <AppShell>
                  <StudentDashboard />
                </AppShell>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
