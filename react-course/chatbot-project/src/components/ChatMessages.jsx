import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "../App.css";
export function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    console.log("updated");
    console.log(chatMessageRef.current);
    const containerElem = chatMessageRef.current;
    if (containerElem) containerElem.scrollTop = containerElem.scrollHeight;
  }, [chatMessages]);
  return (
    <div className="chat-container" ref={chatMessageRef}>
      {chatMessages.map((chatmessage) => {
        return (
          <ChatMessage
            message={chatmessage.message}
            sender={chatmessage.sender}
            key={chatmessage.id}
          />
        );
      })}
    </div>
  );
}
