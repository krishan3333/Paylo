import React from 'react';

const TransactionTable = () => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-600">Date</th>
            <th className="py-2 px-4 border-b border-gray-600">Description</th>
            <th className="py-2 px-4 border-b border-gray-600">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">10/01/2023</td>
            <td className="py-2 px-4">Salary</td>
            <td className="py-2 px-4">$5000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">10/02/2023</td>
            <td className="py-2 px-4">Groceries</td>
            <td className="py-2 px-4">-$200</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
