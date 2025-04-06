import React from 'react';

function WelcomeScreen({ onStart }) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md text-center w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4">Multilingual Support Chatbot</h1>
          <p className="mb-6 text-gray-700">
            AI-Powered assistant for seamless communication:
          </p>
          <button
            onClick={onStart}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Start Chat
          </button>
        </div>
      </div>
    );
  }
  
  export default WelcomeScreen;