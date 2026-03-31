import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import DashboardCard from '../../components/dashboard-card';
import TransactionTable from '../../components/transaction-table';
import AddTransactionModal from '../../components/add-transaction-modal';

const DashboardPage = () => {
  const [transactions, setTransactions] = useState([
    { title: 'Salary', amount: 5000, type: 'income', category: 'salary', date: '10/01/2023' },
    { title: 'Groceries', amount: -200, type: 'expense', category: 'food', date: '10/02/2023' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTransaction = (data: any) => {
    setTransactions([...transactions, data]);
  };

  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc - t.amount, 0);
  const savings = totalBalance - expenses;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-900 min-h-screen">
        <Navbar />
        <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-green-500 text-white rounded mb-4">Add Transaction</button>
        <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddTransaction={handleAddTransaction} />
        <div className="grid grid-cols-2 gap-4 mt-6">
          <DashboardCard title="Total Balance" value={totalBalance} />
          <DashboardCard title="Income" value={income} />
          <DashboardCard title="Expenses" value={expenses} />
          <DashboardCard title="Savings" value={savings} />
        </div>
        <div className="mt-6">
          <TransactionTable transactions={transactions} />
        </div>
      </div>  
    </div>
  );
};

export default DashboardPage;
