import React from 'react'
import "./Conversation.css"
import person from "../Assets/avatar.png"
export const Conversations = () => {
  return (
    <div className='conversation'>
        <img src={person} className="conversationImg"/>
        <span className='conversationName'>John Doe</span>
    </div>
  )
}
