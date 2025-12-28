import { useState } from "react";
import "../App.css";
import { Chatbot } from "supersimpledev";
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "User",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "Robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="input"
        placeholder="Send a message to chatbox"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button className="button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
