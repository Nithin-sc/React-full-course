import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesContainerRef = useRef(null)

  useEffect(() => {
    const container = chatMessagesContainerRef.current
    if (!container) {
      return
    }

    container.scrollTop = container.scrollHeight
  }, [chatMessages])

  return (
    <div className="chat-messages-container" ref={chatMessagesContainerRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  )
}

export default ChatMessages
