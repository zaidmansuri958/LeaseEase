import {React,useEffect,useState} from 'react'
import "./Conversation.css"
import person from "../Assets/avatar.png"
import axios from "axios";


export const Conversations = ({conversation,currentUser}) => {
  const[user,setUser]=useState(null);

  useEffect(()=>{
    const otherUserId=conversation.member.find((m)=> m !== currentUser);

    const getUser=async () =>{
      try{
        const res=await axios("http://localhost:5000/landlord/"+otherUserId);
        setUser(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getUser();
  },[currentUser,conversation])

  return (
    <div className='conversation'>
        <img src={person} className="conversationImg"/>
        <span className='conversationName'>{user?.First_Name}</span>
    </div>
  )
}
