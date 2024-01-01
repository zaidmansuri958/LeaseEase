import React from 'react'
import './Message.css'
import person from "../Assets/avatar.png"

export const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
    <div className='messageTop'>
        <img className='messageImg' src={person} />
        <p className='messageTxt'>Hello How are you?</p>
    </div>
    <div className='messageBottom'>1 hour ago</div>

    </div>
  )
}
