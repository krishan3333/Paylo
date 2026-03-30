import React from 'react';

interface DashboardCardProps {
  title: string;
  value: number | string;
}

const DashboardCard = ({ title, value }: DashboardCardProps) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl mt-2">${value}</p>
    </div>
  );
};

export default DashboardCard;
