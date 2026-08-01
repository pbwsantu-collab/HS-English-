import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <nav className="flex flex-col gap-2">
        <NavLink to="/teacher" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/teacher/students">Students</NavLink>
        <NavLink to="/teacher/lessons">Lessons</NavLink>
        <NavLink to="/teacher/questions">Question Bank</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
