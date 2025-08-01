import React, { useState, useEffect, useRef } from 'react';
import chatbotIcon from '@assets/Chatbot logo.jpg';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatboxRef = useRef(null);

  useEffect(() => {
    setMessages([
      { text: "Hello! I'm the school assistant. How can I help you today? You can ask about 'admissions', 'contact', 'timings', or 'fees'.", sender: 'bot' }
    ]);
  }, []);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    setTimeout(() => {
      getBotResponse(inputValue.toLowerCase());
    }, 500);

    setInputValue('');
  };

  const getBotResponse = (userInput) => {
    let botResponse = { text: "I'm sorry, I don't understand that. Please ask about 'admissions', 'contact', 'timings', or 'fees'.", sender: 'bot' };

    if (userInput.includes('admission')) {
      botResponse.text = "Admission inquiries for the new session start in March. You can find the detailed process on our 'Registration' page.";
    } else if (userInput.includes('contact')) {
      botResponse.text = "You can contact us at info@vishwabharati.com or call us at +91 12345678. Our address is Bihiya Chaurasta, Bhojpur, Bihar.";
    } else if (userInput.includes('timing')) {
      botResponse.text = "The school timings are from 8:00 AM to 2:00 PM, Monday to Saturday.";
    } else if (userInput.includes('fee')) {
      botResponse.text = "For details about the fee structure, please visit the school's administration office.";
    }

    setMessages(prevMessages => [...prevMessages, botResponse]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-4">
      {/* Chat Window */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-[#2aa7e2] text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">School Assistant</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 text-2xl font-bold">&times;</button>
          </div>
          {/* Messages */}
          <div ref={chatboxRef} className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-2 rounded-lg max-w-xs ${msg.sender === 'bot' ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-2 border-t">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </form>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button 
        onClick={toggleChat} 
        className="w-16 h-16 bg-[#2aa7e2] rounded-full shadow-xl flex items-center justify-center hover:bg-[#2596c8] transition-transform duration-200 hover:scale-110 z-40"
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <span className="text-4xl font-light text-white">&times;</span>
        ) : (
          <img src={chatbotIcon} alt="Chatbot Icon" className="w-full h-full object-cover rounded-full" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
