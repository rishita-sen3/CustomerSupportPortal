import React from 'react';
import CustomerTable from '../components/CustomerTable';

const Customers = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <CustomerTable />
    </div>
  );
};

export default Customers;
