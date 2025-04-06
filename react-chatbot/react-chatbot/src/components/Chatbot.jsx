import React, { useState } from "react";
import { sendMessage } from "../utils/api";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en"); // NEW: selected language

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botResponse = await sendMessage(input, language); // Pass language!
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
          {/* Language selector */}
          <div className="flex items-center">
            <label className="mr-2 font-semibold">Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 rounded p-1"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="zh">Chinese</option>
              <option value="ko">Korean</option>
              <option value="hi">Hindi</option>
              <option value="ar">Arabic</option>
              <option value="ru">Russian</option>
            </select>
          </div>
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
