import React, { useState } from 'react';
import { IconSend, IconChevronLeft, IconX } from '@tabler/icons-react';
import julianPng from '../assets/julian.png';

const ChatSimulator: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Array<{ from: 'julian' | 'modulab', text: string }>>([
    { from: 'julian', text: "Hey, I'm Julian — I need a landing page for my new startup..." },
    { from: 'modulab', text: "Of course, Julian. We've got you. Let's turn that idea into something beautiful." }
  ]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { from: 'julian', text: inputText }]);
      setInputText("");
      // Simulate Modulab response
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'modulab', text: "Thanks for reaching out! Let's discuss your project." }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Chat bubble component
  const Bubble = ({ from, text }: { from: 'julian' | 'modulab', text: string }) => (
    <div className={`flex w-full ${from === 'modulab' ? 'justify-end' : 'justify-start'}`}>
      {from === 'julian' && (
        <img src={julianPng} alt="Julian" className="w-7 h-7 rounded-full object-cover mr-2 border border-gray-200" />
      )}
      <div
        className={
          from === 'modulab'
            ? 'bg-[#242424] text-white px-4 py-2 text-[14px] max-w-[70%] text-right font-medium'
            : 'bg-[#f8f9fa] text-[#525252] px-4 py-2 text-[14px] max-w-[70%] text-left font-medium'
        }
        style={{ 
          borderRadius: from === 'modulab' 
            ? '6px 0px 6px 6px' 
            : '0px 6px 6px 6px'
        }}
      >
        {text}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col gap-2" style={{ border: '1px solid #e6e6e6' }}>
      {/* Header Section */}
      <div className="flex items-center justify-between py-0" style={{ backgroundColor: '#f2f2f2', borderBottom: '1px solid #e6e6e6', padding: '0px 12px', minHeight: '40px' }}>
        <div className="flex items-center gap-1">
          <IconChevronLeft size={20} className="text-grey-80 font-bold" stroke={2.5} />
          <span className="text-[18px] font-medium text-grey-80">Ask a question</span>
        </div>
        <IconX size={20} className="text-grey-80 cursor-pointer" stroke={2} />
      </div>
      
      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-2 overflow-hidden" style={{ padding: '4px 12px' }}>
        {/* Messages area */}
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
          {messages.map((message, index) => (
            <Bubble key={index} from={message.from} text={message.text} />
          ))}
        </div>
      </div>
      
      {/* Input area */}
      <div className="w-full flex items-center bg-white py-0" style={{ minHeight: 48, borderTop: '1px solid #e6e6e6', padding: '0px 12px', overflow: 'visible' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Write a message"
          className="text-[14px] flex-1 select-none font-medium flex items-center cursor-text outline-none"
          style={{ color: inputText ? '#23262f' : '#8b9099' }}
        />
        <div className="ml-2 relative">
          <div 
            className="flex items-center justify-center rounded-full bg-[#242424] w-7 h-7 cursor-pointer transition-transform duration-150 hover:scale-105"
            onClick={handleSendMessage}
          >
            <IconSend size={15} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulator; 