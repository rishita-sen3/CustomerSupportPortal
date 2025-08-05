import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-4 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold">Total Calls Today</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold">Active Calls</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold">Missed Calls</h3>
          <p className="text-3xl font-bold mt-2">10</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold">Resolved Tickets</h3>
          <p className="text-3xl font-bold mt-2">65</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
