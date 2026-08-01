import React from 'react';

const TeacherDashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Teacher Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Students</div>
        <div className="p-4 bg-white rounded shadow">Tests</div>
        <div className="p-4 bg-white rounded shadow">Analytics</div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
