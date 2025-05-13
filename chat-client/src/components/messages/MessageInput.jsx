import React from 'react'
import { IoSend } from "react-icons/io5";


export default function MessageInput() {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input 
            type="text"
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-800
            border-gray-600 text-white bg-opacity-40'
            placeholder='Send a message'
            />
            <button
            type="submit"
            className='absolute inset-y-0 end-0 flex items-center pe-3'
            >
                <IoSend 
                className='text-white transition-colors hover:text-pink-300 opacity-65'
                />
            </button>
        </div>
    </form>
  )
}


