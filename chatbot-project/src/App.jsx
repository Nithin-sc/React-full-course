import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import ChatInput from './components/chatbot/ChatInput'
import ChatMessages from './components/chatbot/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'Hello Chatbot!',
      sender: 'user',
      id: 't1',
    },
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 't2',
    },
  ])

  const addChatMessage = (message) => {
    const response = Chatbot.getResponse(message)

    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      { message, sender: 'user', id: crypto.randomUUID() },
      { message: response, sender: 'robot', id: crypto.randomUUID() },
    ])
  }

  return (
    <div className="app-container">
      <h1>Chat Bot</h1>
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput onSend={addChatMessage} />
    </div>
  )
}

export default App
