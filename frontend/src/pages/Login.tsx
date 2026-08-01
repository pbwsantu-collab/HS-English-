import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-royal to-white">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome to EnglishMaster AI</h1>
        <form className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm">Email</span>
            <input aria-label="email" className="border rounded px-3 py-2 mt-1" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Password</span>
            <input type="password" aria-label="password" className="border rounded px-3 py-2 mt-1" />
          </label>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-royal text-white rounded">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
