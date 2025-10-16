import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

export default function Home() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex justify-center items-center h-[95dvh]">
      <div className='h-[90vh] w-full flex max-w-5xl rounded-lg overflow-hidden shadow-lg bg-white
      bg-clip-padding backdrop-blur-lg bg-opacity-5'>
        < Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <MessageContainer />
      </div>
    </div>
  )
}
