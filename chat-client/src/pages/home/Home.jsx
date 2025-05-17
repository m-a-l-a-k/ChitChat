import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import MessageContainer from '../../components/messages/messageContainer'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[95vh]">
      <div className='h-[90vh] w-full flex max-w-5xl rounded-lg overflow-hidden shadow-lg bg-white
      bg-clip-padding backdrop-blur-lg bg-opacity-5'>
        < Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}
