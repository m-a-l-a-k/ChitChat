import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import getTime from '../../utils/getTime';

export default function Message({message}) {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const formattedTime = getTime(message.createdAt);

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBG = fromMe ? 'bg-violet-500 bg-opacity-95 border border-violet-700 border-opacity-30' : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img 
                alt="Tailwind CSS chat bubble component"
                src={profilePic}
            />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBG}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  )
}
