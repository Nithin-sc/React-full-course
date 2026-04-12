import { useState } from 'react'
import './ChatInput.css'

function ChatInput({ onSend }) {
  const [inputText, setInputText] = useState('')

  const handleSend = () => {
    const message = inputText.trim()
    if (!message) {
      return
    }

    onSend(message)
    setInputText('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to ChatBot"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyDown={handleKeyDown}
        className="chat-input"
      />
      <button className="send-button" onClick={handleSend}>
        Send
      </button>
    </div>
  )
}

export default ChatInput
