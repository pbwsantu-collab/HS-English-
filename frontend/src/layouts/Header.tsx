import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b py-3 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/icons/logo-32.svg" alt="logo" className="w-8 h-8" />
        <div className="font-semibold text-lg">EnglishMaster AI</div>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 rounded bg-gray-100">Help</button>
        <button className="px-3 py-1 rounded bg-gray-100">Profile</button>
      </div>
    </header>
  );
};

export default Header;
