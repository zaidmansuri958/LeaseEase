import { React, useState, useEffect, useRef } from "react";
import { Conversations } from "../Components/Conversations/Conversations";
import { Message } from "../Components/Message/Message";
import "./CSS/Messenger.css";
import axios from "axios";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

export const Messenger = () => {
  const token = Cookies.get("uid");
  const user_type = Cookies.get("user-type");
  let url = "http://localhost:5000/";
  console.log("Bearer " + token);
  const location = useLocation();

  const otherUserId = location.state.LandlordId;
  console.log("hhhhhhhhhh"+otherUserId)
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (user_type === "Landlord") {
      url = url + "landlord";
    } else {
      url = url + "tenant";
    }
    const getUser = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const userId = user._id;
  console.log("hhi" + user._id);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const conData = { receiverId: otherUserId, senderId: userId };
    const createCon = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/conversation",
          conData
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    const checkCon = async () => {
      const res = await axios.get(
        "http://localhost:5000/conversation/find/" + userId + "/" + otherUserId
      );
      if (res.data === null && userId!=null && otherUserId!=null) {
        createCon();
      }
      else{
     
      }
    };
    checkCon();
  }, [otherUserId,userId]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.member.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userId);
  }, [userId]);

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

    const receiverId = currentChat.member.find((member) => member !== userId);

    console.log("hello" + receiverId);

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
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
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
