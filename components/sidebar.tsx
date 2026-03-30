import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Paylo</h2>
      <ul className="space-y-2">
        <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</a></li>
        <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">Analytics</a></li>
        <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">Transactions</a></li>
        <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
