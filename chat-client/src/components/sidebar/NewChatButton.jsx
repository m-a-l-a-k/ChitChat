import React, { useState, useRef, useEffect }  from 'react'
import { BiMessageAdd } from "react-icons/bi";

export default function NewChatButton() {

  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  // close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  return (
    <div className='relative mt-auto' ref={menuRef}>
        <button
        onClick={() => setOpen((prev) => !prev)}
        className='flex items-center group relative'
        >
            <BiMessageAdd 
            className='text-2xl cursor-pointer' />
            <span
            className={`text-white text-sm absolute left-3 opacity-0 transform
            translate-x-0 transition-all duration-300
            ${open ? 'opacity-0 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-5 whitespace-nowrap'}`}
            >
                <span className='text-white'>New Chat</span>
            </span>
        </button>

        {/* dropdown menu */}
        {open && (
        <div className="absolute bottom-10 left-0 w-36 bg-indigo-950/95 text-white rounded-lg
        shadow-lg border border-slate-700 backdrop-blur-lg">
          <ul className="flex flex-col text-sm">
            <li className="px-4 py-2 hover:bg-purple-700/40 cursor-pointer">Private Chat</li>
            <li className="px-4 py-2 hover:bg-purple-700/40 cursor-pointer">Group Chat</li>
          </ul>
        </div>
      )}
    </div>
  )
}
