import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const socket: Socket = io('/', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  withCredentials: true
});

const quickQuestions = [
  "What animation services do you offer?",
  "How much does character animation cost?",
  "What's your typical project timeline?",
  "Do you work with game developers?",
  "Can you help with product visualization?"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "👋 Hi! I'm your AI animation assistant. How can I help bring your vision to life?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      setError(null);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('botResponse', (response: string) => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'bot',
        content: response,
        timestamp: new Date()
      }]);
      setIsLoading(false);
    });

    socket.on('connect_error', (err) => {
      setError('Connection failed. Please try again later.');
      setIsLoading(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('botResponse');
      socket.off('connect_error');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && chatWindowRef.current) {
      gsap.fromTo(chatWindowRef.current,
        { 
          scale: 0.95,
          opacity: 0,
          y: 20
        },
        { 
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power3.out'
        }
      );
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClose = () => {
    if (chatWindowRef.current) {
      gsap.to(chatWindowRef.current, {
        scale: 0.95,
        opacity: 0,
        y: 20,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => setIsOpen(false)
      });
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || !isConnected) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    socket.emit('sendMessage', text.trim());
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <div ref={chatbotRef} className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`group w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <div className="relative">
          <Bot className="w-7 h-7 group-hover:hidden transition-all" />
          <Sparkles className="w-7 h-7 hidden group-hover:block transition-all" />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="absolute bottom-0 right-0 w-96 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-between relative">
            <div className="absolute inset-0 bg-black/20" />
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-lg bg-blue-500/30 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white">Animation Assistant</h3>
                <p className="text-xs text-blue-200">
                  {isConnected ? 'Online' : 'Connecting...'}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="relative z-10 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'bg-white/10 text-white backdrop-blur-sm'
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  <p className="text-xs mt-1 opacity-60">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-white/10 text-white backdrop-blur-sm">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center">
                <div className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm">
                  {error}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-4 py-2 border-t border-white/10">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question)}
                  className="flex-shrink-0 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-sm text-blue-300 transition-colors whitespace-nowrap"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                disabled={!isConnected || isLoading}
              />
              <button
                onClick={() => handleSend(inputValue)}
                disabled={!isConnected || isLoading || !inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-500 hover:to-blue-600 transition-all"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;