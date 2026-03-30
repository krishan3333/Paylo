import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Paylo Dashboard</h1>
      <div className="flex space-x-4">
        <input type="text" placeholder="Search..." className="p-2 rounded bg-gray-700 text-white" />
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div> {/* Placeholder for profile/avatar */}
      </div>
    </nav>
  );
};

export default Navbar;
