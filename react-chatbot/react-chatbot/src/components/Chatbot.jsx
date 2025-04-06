import React, { useState } from "react";
import { sendMessage } from "../utils/api";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const botResponse = await sendMessage(input);
    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <div className="chat-window h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center mb-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <span>{msg.text}</span>
                {msg.audio && msg.sender === "bot" && (
                  <button
                    onClick={() => playAudio(msg.audio)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    🔊
                  </button>
                )}
              </div>
            </div>
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