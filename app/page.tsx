import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Paylo</h1>
        <p className="text-lg mb-8">Your modern expense tracker</p>
        <Link href="/login" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 mr-4">
          Login
        </Link>
        <Link href="/register" className="inline-block px-6 py-3 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-800">
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
