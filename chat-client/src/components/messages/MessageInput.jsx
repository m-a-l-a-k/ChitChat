import { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';


export default function MessageInput() {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form 
    className='px-4 my-3'
    onSubmit={handleSubmit}
    >
        <div className='w-full relative'>
            <input 
            type="text"
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-800
            border-gray-600 text-white bg-opacity-40'
            placeholder='Send a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button
            type="submit"
            className='absolute inset-y-0 end-0 flex items-center pe-3'
            >
                { loading ? <div className='loading loading-spinner'></div> : <IoSend 
                className='text-white transition-colors hover:text-pink-300 opacity-65'
                />}
            </button>
        </div>
    </form>
  )
}


