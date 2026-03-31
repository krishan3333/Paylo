'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import TransactionTable from '../../components/transaction-table';
import AddTransactionModal from '../../components/add-transaction-modal';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([
    { title: 'Salary', amount: 5000, type: 'income', category: 'salary', date: '10/01/2023' },
    { title: 'Groceries', amount: -200, type: 'expense', category: 'food', date: '10/02/2023' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTransaction = (data: any) => {
    setTransactions([...transactions, data]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-900 min-h-screen">
        <Navbar />
        <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-green-500 text-white rounded mb-4">Add Transaction</button>
        <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddTransaction={handleAddTransaction} />
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Transactions</h2>
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
