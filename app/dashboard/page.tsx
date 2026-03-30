import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import DashboardCard from '../../components/dashboard-card';
import TransactionTable from '../../components/transaction-table';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-900 min-h-screen">
        <Navbar />
        <div className="grid grid-cols-2 gap-4 mt-6">
          <DashboardCard title="Total Balance" value={15000} />
          <DashboardCard title="Income" value={8000} />
          <DashboardCard title="Expenses" value={3000} />
          <DashboardCard title="Savings" value={7000} />
        </div>
        <TransactionTable className="mt-6" />
      </div>
    </div>
  );
};

export default DashboardPage;
