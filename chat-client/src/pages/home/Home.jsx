import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import MessageContainer from '../../components/messages/messageContainer'

export default function Home() {
  return (
    <div className='w-full max-w-5xl rounded-lg overflow-hidden shadow-lg bg-white
    bg-clip-padding backdrop-blur-lg bg-opacity-5'>
      < Sidebar />
      <MessageContainer />
    </div>
  )
}
