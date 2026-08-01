import React from 'react';

const StudentDashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Student Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">Assigned Tests</div>
        <div className="p-4 bg-white rounded shadow">Progress</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
