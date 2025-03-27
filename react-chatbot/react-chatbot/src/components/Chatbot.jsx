import React, { useState } from 'react';
import Message from './Message';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Call AWS API (to be implemented in utils/api.js)
    // const response = await api.sendMessage(input);

    const botMessage = { text: 'This is a placeholder response.', sender: 'bot' };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border flex-grow p-2 rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;