import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { BiMenu } from 'react-icons/bi'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import NewChatButton from './NewChatButton'
import SettingsButton from './SettingsButton'

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <div 
      className={`border-r border-white/30 p-4 flex flex-col h-full transition-all duration-300
      ${collapsed ? 'w-16' : 'w-64'}`}
    >

      {/* toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`text-white text-lg hover:text-violet-400
          ${collapsed ? 'mx-auto' : 'mr-3 mb-2 self-end'}`}
      >
        {collapsed ? <BiMenu /> : <FiChevronLeft />}
      </button>
      
      {!collapsed && <SearchInput />}
      {!collapsed && <div className='divider py-0 my-1'></div>}
      {!collapsed && (
        <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>
      )}

      <div className={`pt-4 mt-auto flex justify-between items-center
        ${collapsed ? 'opacity-0' : 'opacity-100'}
        `}>
        <NewChatButton/>
        <SettingsButton/>
      </div>
    </div>
  )
}
