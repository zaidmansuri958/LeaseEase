import { React, useEffect, useState } from "react";
import "./Conversation.css";
import person from "../Assets/avatar.png";
import axios from "axios";
import Cookies from "js-cookie";

export const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const otherUserId = conversation.member.find((m) => m !== currentUser);
    let url = "http://localhost:5000/";
    const user_type = Cookies.get("user-type");
    if (user_type == "Landlord") {
      url = url + "tenant/";
    } else {
      url = url + "landlord/";
    }

    const getUser = async () => {
      try {
        const res = await axios.get(url + otherUserId);
        setUser(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img src={person} className="conversationImg" />
      <span className="conversationName">{user?.First_Name}</span>
    </div>
  );
};
