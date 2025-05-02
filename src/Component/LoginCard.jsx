import React, { useContext } from 'react';
const LoginPromptCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🔒 Login Required</h2>
        <p className="text-gray-600">Please log in to continue to the next screen.</p>
      </div>
    </div>
  );
};

export default LoginPromptCard;
