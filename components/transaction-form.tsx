import React, { useState } from 'react';

interface TransactionFormProps {
  onSubmit: (data: any) => void;
}

const TransactionForm = ({ onSubmit }: TransactionFormProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, amount, type, category, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700">Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="mt-1 p-2 block w-full border rounded-md"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
