import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import TransactionTable from '../../components/transaction-table';

const TransactionsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-900 min-h-screen">
        <Navbar />
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Transactions</h2>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
