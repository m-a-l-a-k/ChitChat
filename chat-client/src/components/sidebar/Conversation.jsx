import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../store/useConversation";

export default function Conversation({conversation, lastIdx, emoji}) {
    
    const {selectedConversation, setSelectedConversation} = useConversation();
    
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
  
  return (
    <>
    <div className={`flex gap-2 items-center rounded
    p-2 py-1 cursor-pointer
     ${isSelected ? "bg-purple-700 font-bold text-xl" : " hover:bg-purple-700 hover:bg-opacity-40"}
    `}
    onClick={() => setSelectedConversation(conversation)}
     >
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img
                src={conversation.profilePic}
                alt="avatar"
                />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p 
                className='text-white text-shadow title font-400 text-lg tracking-wider'
                >
                    {conversation.fullName}
                </p>
                <span className='text-xl text-shadow-sm'>{emoji}</span>
            </div>
        </div>
    </div>

    {!lastIdx && <div className='divider my-0 py-0 h-1' />}
  </>
  );
}


