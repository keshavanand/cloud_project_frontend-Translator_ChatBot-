import React from 'react';
import Chatbot from '../components/Chatbot';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Multilingual Chatbot</h1>
      <Chatbot />
    </div>
  );
}

export default Home;