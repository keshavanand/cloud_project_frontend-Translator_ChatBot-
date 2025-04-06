import React, { useState } from "react";
import { sendMessage } from "../utils/api";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botResponse = await sendMessage(input);
    setMessages((prev) => [...prev, botResponse]);
  };

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          {/*<div className="font-semibold">Language: EN</div>*/}
          <h2 className="text-xl font-bold">Multilingual Support Chatbot</h2>
        </div>

        <div className="chat-window h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 mb-4">
          {messages.map((msg, index) => (
            <Message
              key={index}
              text={msg.text}
              sender={msg.sender}
              audio={msg.audio}
              onPlayAudio={playAudio}
            />
          ))}
        </div>

        <div className="input-area flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;