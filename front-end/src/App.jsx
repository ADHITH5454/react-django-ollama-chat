import { useState } from "react";
import api from "./api/api";
import ChatInput from "./components/ChatInput";
import ChatBox from "./components/ChatBox";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (message.trim() === "") return;

    try {
     
      const userMessage = {
        role: "user",
        content: message,
      };

      
      const response = await api.post("chat/", {
        message: message,
      });

    
      const aiMessage = {
        role: "assistant",
        content: response.data.reply,
      };

   
      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
        aiMessage,
      ]);

    
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
  style={{
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    height: "500px",
  }}
>
  <h1 style={{ textAlign: "center" }}>
    🤖 React + Django + Ollama Chatbot
  </h1>

  <div style={{ flex: 1, overflowY: "auto" }}>
    <ChatBox messages={messages} />
  </div>

  <ChatInput
    message={message}
    setMessage={setMessage}
    sendMessage={sendMessage}
  />
</div>
  );
}

export default App;