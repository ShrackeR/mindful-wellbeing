import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const addMessage = (text, role) => {
    setMessages((prevMessages) => [...prevMessages, { text, role }]);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    addMessage(input, 'user');
    let formDataObject = {
      model: 'gpt-3.5-turbo',
      max_tokens: 500,
      messages: [
        { role: 'system', content: 'You are a therapist' },
        { role: 'user', content: input },
      ],
    };
    const formDataJson = JSON.stringify(formDataObject);

    // Fetch request
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer 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',
        'Content-Type': 'application/json',
        // Add any other headers you may need
      },
      body: formDataJson,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data
        console.log(data);
        addMessage(data['choices'][0]['message']['content'], 'bot');
      })
      .catch((error) => {
        // Handle errors
        console.error('Fetch error:', error);
      });

    setInput('');
  };

  const handleKeyPress = (e) => {
    // If Enter key is pressed, trigger the Send button click
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the default behavior of the Enter key in a text area
      handleSendMessage();
    }
  };

  return (
    <>
    <Navigation />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        color: '#333',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontFamily: 'Century Gothic, sans-serif',
          margin: '20px 0',
          //fontWeight: 'bold',
          color: 'black',
        }}
      >
        AI Therapist Chat
      </h1>
      <div
        ref={chatContainerRef}
        style={{
          flex: 1,
          overflowY: 'scroll',
          padding: '20px',
          paddingBottom: '100px', // To allow space for input
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent:
                message.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                backgroundColor: message.role === 'bot' ? '#1E88E5' : '#ffffff',
                color: message.role === 'bot' ? '#ffffff' : '#333',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                maxWidth: '70%',
                wordWrap: 'break-word',
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #ddd', padding: '20px', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            style={{
              flex: '1',
              padding: '15px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              marginRight: '10px',
            }}
          />
          <div
            onClick={handleSendMessage}
            style={{
              fontSize: '1.5rem', // Adjust the font size as needed
              padding: '15px',
              backgroundColor: '#128C7E',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            ➤
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChatBot;
