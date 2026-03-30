'use client';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-8 bg-gray-800 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 block w-full rounded-md bg-gray-700 border-transparent focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 block w-full rounded-md bg-gray-700 border-transparent focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
