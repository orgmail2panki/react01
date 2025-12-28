import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello React",
      sender: "User",
      id: "1",
    },
    {
      message: "How can I help you?",
      sender: "Robot",
      id: "2",
    },
  ]);

  return (
    <div className="chat-main-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
    </div>
  );
}

export default App;
