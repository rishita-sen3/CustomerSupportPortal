import React, { useState, useEffect } from 'react';

const Calls = () => {
  const [status, setStatus] = useState('Ringing');
  const [isAnswered, setIsAnswered] = useState(false);
  const [duration, setDuration] = useState(0); // in seconds
  const [timerId, setTimerId] = useState(null);

  // Start timer when call is answered
  useEffect(() => {
    let interval;
    if (isAnswered) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
      setTimerId(interval);
    } else {
      clearInterval(timerId);
    }

    // Cleanup
    return () => clearInterval(interval);
  }, [isAnswered]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleAnswer = () => {
    setStatus('In Call');
    setIsAnswered(true);
  };

  const handleEndCall = () => {
    setStatus('Ended');
    setIsAnswered(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Calls</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md">
        <h3 className="text-xl font-semibold mb-4">Live Call Panel</h3>
        <p><strong>Caller:</strong> Priya Mehta</p>
        <p><strong>Phone:</strong> +91-9876543211</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Duration:</strong> {formatTime(duration)}</p>
        <div className="mt-4 flex gap-4">
          <button
            onClick={handleAnswer}
            disabled={isAnswered || status === 'Ended'}
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black disabled:opacity-50"
          >
            Answer
          </button>
          <button
            onClick={handleEndCall}
            disabled={status === 'Ended'}
            className="px-4 py-2 bg-black text-white rounded hover:bg-red-700 disabled:opacity-50"
          >
            End Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calls;
