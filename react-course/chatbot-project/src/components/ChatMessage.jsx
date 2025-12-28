import userLogo from "../assets/user.svg";
import robotLogo from "../assets/robot.svg";
import "../App.css";
export function ChatMessage(chatmessage) {
  return (
    <div
      className={
        chatmessage.sender === "User"
          ? "div-message user-message"
          : "div-message robot-message"
      }
    >
      {chatmessage.sender === "Robot" && (
        <img alt="RobotImage" src={robotLogo} width="20px" />
      )}
      {chatmessage.message}
      {chatmessage.sender === "User" && (
        <img alt="UserImage" src={userLogo} width="20px" />
      )}
    </div>
  );
}
