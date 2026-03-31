import React from 'react';

interface Transaction {
  title: string;
  amount: number | string;
  type: string;
  category: string;
  date: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-600">Date</th>
            <th className="py-2 px-4 border-b border-gray-600">Description</th>
            <th className="py-2 px-4 border-b border-gray-600">Amount</th>
            <th className="py-2 px-4 border-b border-gray-600">Type</th>
            <th className="py-2 px-4 border-b border-gray-600">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{transaction.date}</td>
              <td className="py-2 px-4">{transaction.title}</td>
              <td className="py-2 px-4">${parseInt(String(transaction.amount)).toLocaleString()}</td>
              <td className="py-2 px-4">{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
              <td className="py-2 px-4">{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
