import React from 'react';

function Message({ text, sender }) {
  const isUser = sender === 'user';
  return (
    <div className={`mb-2 ${isUser ? 'text-right' : 'text-left'}`}>
      <span
        className={`inline-block px-3 py-2 rounded ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default Message;