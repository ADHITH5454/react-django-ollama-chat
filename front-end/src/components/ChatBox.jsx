import Message from "./Message";

function ChatBox({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <Message
          key={index}
          role={msg.role}
          content={msg.content}
        />
      ))}
    </div>
  );
}

export default ChatBox;