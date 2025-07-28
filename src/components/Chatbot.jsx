import React, { useState, useEffect, useRef } from 'react';
import chatbotIcon from '../assets/Chatbot logo.jpg';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatboxRef = useRef(null);

  // Pre-defined conversation topics and responses
  const conversationTree = {
    initial: {
      text: "Hello! I'm the school assistant. How can I help you today?",
      options: ["Admissions", "Contact Us", "School Timings", "Fee Structure"],
    },
    "Admissions": {
      text: "Admission inquiries for the new session typically start in March. You can find the detailed process on our 'Registration' page. Would you like a link to the page?",
      options: ["Yes, please", "No, thanks"],
    },
    "Yes, please": {
        text: "Here is the link to our registration page: [Registration Page Link]. Is there anything else I can help with?",
        options: ["Contact Us", "School Timings", "Fee Structure"],
    },
    "Contact Us": {
      text: "You can reach us via email at info@vishwabharati.com or call us at +91 12345678. Our address is Bihiya Chaurasta, Bhojpur, Bihar.",
      options: ["Admissions", "School Timings", "Fee Structure"],
    },
    "School Timings": {
      text: "The school timings are from 8:00 AM to 2:00 PM, Monday to Saturday.",
      options: ["Admissions", "Contact Us", "Fee Structure"],
    },
    "Fee Structure": {
      text: "For detailed information about the fee structure, it's best to visit the school's administration office during working hours.",
      options: ["Admissions", "Contact Us", "School Timings"],
    },
    default: {
      text: "I'm sorry, I can only provide information on the topics listed. Please choose one of the options.",
      options: ["Admissions", "Contact Us", "School Timings", "Fee Structure"],
    },
  };

  useEffect(() => {
    // Start with the initial welcome message
    setMessages([{ 
      text: conversationTree.initial.text, 
      sender: 'bot',
      options: conversationTree.initial.options 
    }]);
  }, []);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option) => {
    const userMessage = { text: option, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setIsTyping(true);
    
    setTimeout(() => {
      const response = conversationTree[option] || conversationTree.default;
      const botMessage = {
        text: response.text,
        sender: 'bot',
        options: response.options,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000); // Simulate bot thinking time
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      {/* Chat Window */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="w-80 sm:w-80 h-[24rem] bg-white rounded-2xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-[#2aa7e2] text-white p-4 rounded-t-2xl flex justify-between items-center shadow-md">
            <h3 className="font-bold text-lg">School Assistant</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 text-3xl font-light">&times;</button>
          </div>
          {/* Messages */}
          <div ref={chatboxRef} className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index}>
                <div className={`mb-3 flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`py-2 px-4 rounded-2xl max-w-xs shadow-sm ${msg.sender === 'bot' ? 'bg-gray-200 text-gray-800 rounded-bl-none' : 'bg-blue-500 text-white rounded-br-none'}`}>
                    {msg.text}
                  </div>
                </div>
                {msg.sender === 'bot' && msg.options && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {msg.options.map((option, i) => (
                      <button 
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="bg-white border border-blue-500 text-blue-500 text-sm py-1 px-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="py-2 px-4 rounded-2xl bg-gray-200 text-gray-500 rounded-bl-none shadow-sm">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button 
        onClick={toggleChat} 
        className="w-16 h-16 bg-[#2aa7e2] rounded-full shadow-xl flex items-center justify-center hover:bg-[#2596c8] transition-all duration-300 hover:scale-110 hover:rotate-12"
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <span className="text-4xl font-light text-white transition-transform duration-300 rotate-180">&times;</span>
        ) : (
          <img src={chatbotIcon} alt="Chatbot Icon" className="w-full h-full object-cover rounded-full" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
