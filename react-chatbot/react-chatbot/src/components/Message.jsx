import React from 'react';

function Message({ text, sender, audio, onPlayAudio }) {
  const isUser = sender === 'user';

  return (
    <div className={`mb-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`inline-block px-4 py-2 rounded-lg max-w-xs ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {text}
        {audio && sender === 'bot' && (
          <button
            onClick={() => onPlayAudio(audio)}
            className="ml-2 text-blue-500 hover:text-blue-700"
          >
            🔊
          </button>
        )}
      </div>
    </div>
  );
}

export default Message;