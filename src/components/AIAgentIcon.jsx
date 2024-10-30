import React, { useState } from 'react';

  function AIAgentIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleClick = () => {
      setIsOpen(true);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    const handleInputChange = (e) => {
      setInput(e.target.value);
    };

    const handleSend = async () => {
      if (input.trim() === '') return;

      const userMessage = { role: 'user', content: input };
      setMessages([...messages, userMessage]);
      setInput('');

      // Simulate API call to OpenAI
      const response = await fetchOpenAIResponse(input);
      const aiMessage = { role: 'assistant', content: response };
      setMessages([...messages, userMessage, aiMessage]);
    };

    const fetchOpenAIResponse = async (message) => {
      // Simulate a response from OpenAI API
      // Replace this with actual API call logic
      return `AI response to: ${message}`;
    };

    return (
      <div>
        <div onClick={handleClick} style={{ cursor: 'pointer', position: 'fixed', bottom: '20px', right: '20px' }}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="#4CAF50" />
            <path d="M9 9H15V15H9V9Z" fill="white" />
          </svg>
        </div>

        {isOpen && (
          <div style={{ position: 'fixed', bottom: '80px', right: '20px', width: '350px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', zIndex: 1000 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ margin: 0, color: '#333' }}>AI Chat</h3>
              <button onClick={handleClose} style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '16px', color: '#888' }}>✖</button>
            </div>
            <div style={{ maxHeight: '250px', overflowY: 'auto', marginBottom: '10px', padding: '5px', border: '1px solid #eee', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
              {messages.map((msg, index) => (
                <div key={index} style={{ textAlign: msg.role === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                  <p style={{ margin: 0, padding: '8px', borderRadius: '8px', backgroundColor: msg.role === 'user' ? '#e0f7fa' : '#e8eaf6', display: 'inline-block', maxWidth: '80%' }}>
                    <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="text" value={input} onChange={handleInputChange} placeholder="Type a message..." style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd', marginRight: '10px' }} />
              <button onClick={handleSend} style={{ padding: '10px 15px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Send</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default AIAgentIcon;
