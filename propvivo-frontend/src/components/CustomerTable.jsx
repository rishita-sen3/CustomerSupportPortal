import React from 'react';

const CustomerTable = () => {
  const customers = [
    { id: 1, name: 'Aarav Patel', phone: '+91-9876543210', status: 'Active' },
    { id: 2, name: 'Meera Sharma', phone: '+91-9123456780', status: 'Inactive' },
    { id: 3, name: 'Ravi Singh', phone: '+91-9988776655', status: 'Active' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Customer List</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Phone</th>
            <th className="border-b p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="border-b p-2">{customer.name}</td>
              <td className="border-b p-2">{customer.phone}</td>
              <td className="border-b p-2">
                <span className={`px-2 py-1 rounded text-white ${customer.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
