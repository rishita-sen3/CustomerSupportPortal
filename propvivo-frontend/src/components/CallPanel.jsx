import React from 'react';

const CallPanel = () => {
  const call = {
    callerName: 'Priya Mehta',
    phoneNumber: '+91-9876543211',
    status: 'Ringing',
    duration: '00:00',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Live Call Panel</h2>
      <div className="mb-2"><strong>Caller:</strong> {call.callerName}</div>
      <div className="mb-2"><strong>Phone:</strong> {call.phoneNumber}</div>
      <div className="mb-2"><strong>Status:</strong> {call.status}</div>
      <div className="mb-4"><strong>Duration:</strong> {call.duration}</div>
      <div className="flex gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Answer
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          End Call
        </button>
      </div>
    </div>
  );
};

export default CallPanel;
