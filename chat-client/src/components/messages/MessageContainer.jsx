import { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TbMessages } from "react-icons/tb";
import useConversation from '../../store/useConversation';
import { useAuthContext } from '../../context/AuthContext';


export default function MessageContainer() {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {

        // cleanup function for unmounting
        return () => setSelectedConversation(null)
    }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {!selectedConversation ? (
            <NoChatSelected />
        ) : (
        <>
        {/* Header */}
        <div className='bg-indigo-500 bg-opacity-50 px-4 py-2 mb-2'>

            <span
            className='text-white text-2xl tracking-widest font-semibold title'
            >{selectedConversation.fullName}</span>

        </div>

        <Messages />
        <MessageInput />
        </>  
       )}
    </div>
  )
}

const NoChatSelected = () => {
    const { authUser }= useAuthContext();
    
    const firstName = authUser?.fullName
        ? authUser.fullName.split(" ")[0].charAt(0).toUpperCase() + authUser.fullName.split(" ")[0].slice(1).toLowerCase()
        : "";

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex px-8 text-center sm:text-lg md:text-xl text-gray-200
            font-semibold flex-col items-center gap-2 mx-auto'>
                <p
                className='title tracking-wider text-3xl text-purple-400'
                >
                    Welcome back, {firstName}.
                </p>
                <p
                className='font-normal tracking-tighter text-white text-opacity-85'
                >
                    Select a conversation to get back to ChitChatting!
                </p>
                <TbMessages className='text-6xl md:text-9xl text-center opacity-80 mt-4'/>
            </div>
        </div>
    )
}
