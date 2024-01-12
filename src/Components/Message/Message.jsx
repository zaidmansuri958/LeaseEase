import React from 'react'
import './Message.css'
import person from "../Assets/avatar.png"
import {format} from "timeago.js"

export const Message = ({message,own}) => {
  return (
    <div className={own ? "message own" : "message"}>
    <div className='messageTop'>
        <img className='messageImg' src={person} />
        <p className='messageTxt'>{message.text}</p>
    </div>
    <div className='messageBottom'>{format(message.createdAt)}</div>

    </div>
  )
}
