import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

const SettingsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-900 min-h-screen">
        <Navbar />
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <p className="text-lg">This section will allow you to manage your settings.</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
