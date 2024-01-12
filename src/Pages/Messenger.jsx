import { React, useState, useEffect, useRef } from "react";
import { Conversations } from "../Components/Conversations/Conversations";
import { Message } from "../Components/Message/Message";
import "./CSS/Messenger.css";
import axios from "axios";
import {io} from "socket.io-client"
import Cookies from "js-cookie";


export const Messenger = () => {

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket=useRef();
  const token=Cookies.get("uid")
  // let user=jsonwebtoken.verify(token,"LeaseEase");
  const userId=""
  const scrollRef=useRef();

useEffect(()=>{
  socket.current=io("ws://localhost:8900");
  socket.current.on("getMessage", (data) => {
    setArrivalMessage({
      sender: data.senderId,
      text: data.text,
      createdAt: Date.now(),
    });
  });
},[]);

useEffect(() => {
  arrivalMessage &&
    currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages((prev) => [...prev, arrivalMessage]);
}, [arrivalMessage, currentChat]);

  useEffect(()=>{
    socket.current.emit("addUser",userId)
  },[userId])



  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/conversation/" + userId
        );
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, [userId]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/message/" + currentChat?._id
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: userId,
      conversationID: currentChat._id,
      text: newMessage,
    };

    const receiverId = currentChat.member.find(
      (member) => member !== userId
    );

    console.log(receiverId);

    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("http://localhost:5000/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
  },[messages]);
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <div className="chatMenuInput">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search" />
          </div>
          {conversations.map((c) => (
            <div onClick={() => setCurrentChat(c)}>
              <Conversations conversation={c} currentUser={userId} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div ref={scrollRef}>
                  <Message message={m} own={m.sender === userId} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  placeholder="Type a message"
                  className="chatBoxInput"
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                />
                <button className="btnSend" onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="noConversationText">
              Open a conversation to start a chat
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
