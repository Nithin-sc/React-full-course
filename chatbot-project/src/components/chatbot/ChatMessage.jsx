import robotImage from '../../assets/robot.png'
import userImage from '../../assets/user.png'
import './ChatMessage.css'

function ChatMessage({ message, sender }) {
  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
      {sender === 'robot' && (
        <img src={robotImage} alt="Robot" className="chat-message-profile" />
      )}
      <p className="chat-message-text">{message}</p>
      {sender === 'user' && (
        <img src={userImage} alt="User" className="chat-message-profile" />
      )}
    </div>
  )
}

export default ChatMessage
