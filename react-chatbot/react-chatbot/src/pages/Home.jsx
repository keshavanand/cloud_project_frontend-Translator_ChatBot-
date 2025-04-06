import React, {useState} from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import Chatbot from '../components/Chatbot';

function Home() {
  const [chatStarted, setChatStarted] = useState(false);

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-6">Multilingual Chatbot - COMP264-402 - Group 2</h1>

      <div className="relative w-full flex-1 max-w-4xl">
        {/* welcome screen content */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            chatStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <WelcomeScreen onStart={() => setChatStarted(true)} />
        </div>

        {/* chatbot interface content */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            chatStarted ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Chatbot />
          <button
            onClick={() => setChatStarted(false)}
            className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;