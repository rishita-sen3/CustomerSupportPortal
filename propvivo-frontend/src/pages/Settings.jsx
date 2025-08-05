import React, { useState } from 'react';

const Settings = () => {
  const [voiceModulation, setVoiceModulation] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={voiceModulation}
            onChange={() => setVoiceModulation(!voiceModulation)}
            className="mr-2"
          />
          Enable Voice Modulation
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="mr-2"
          />
          Enable Notifications
        </label>
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
