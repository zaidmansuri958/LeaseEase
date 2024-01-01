import React from "react";
import { Conversations } from "../Components/Conversations/Conversations";
import { Message } from "../Components/Message/Message";
import "./CSS/Messenger.css";

export const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <div className="chatMenuInput">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search" />
          </div>
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <div className="chatBoxBottom">
            <textarea placeholder="Type a message" className="chatBoxInput" />
            <button className="btnSend">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
