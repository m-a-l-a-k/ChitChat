import useConversation from "../../store/useConversation";

export default function Conversation({conversation, lastIdx, emoji}) {
    
    const {selectedConversation, setSelectedConversation} = useConversation();
    
    const isSelected = selectedConversation?._id === conversation._id
  
  return <>
    <div className={`flex gap-2 items-center rounded
    p-2 py-1 cursor-pointer
     ${isSelected ? "bg-purple-700 font-bold text-xl" : " hover:bg-purple-700 hover:bg-opacity-40"}
    `}
    onClick={() => setSelectedConversation(conversation)}
     >
        <div className='avatar avatar-online'>
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
  </>;
}



// STARTER CODE
// import React from 'react'

// export default function Conversation() {
//   return <>
//     <div className='flex gap-2 items-center hover:bg-purple-500 rounded p-2 py-1
//     cursor-pointer'>
//         <div className='avatar avatar-online'>
//             <div className='w-12 rounded-full'>
//                 <img
//                 src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
//                 alt="avatar"
//                 />
//             </div>
//         </div>

//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p 
//                 className='font-bold text-gray-200 text-shadow'
//                 >
//                     kim.possible
//                 </p>
//                 <span className='text-xl text-shadow-sm'>🪷</span>
//             </div>
//         </div>
//     </div>

//     <div className='divider my-0 py-0 h-1' />
//   </>;
// }

