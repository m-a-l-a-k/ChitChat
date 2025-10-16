import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../store/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error("Search must be at least 3 characters long.")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    } else toast.error("No user found")
  }

  return (
    <form 
    className='flex items-center gap-2'
    onSubmit={handleSubmit}
    >
        <input
        type="text"
        placeholder="Search a user"
        className='input input-bordered rounded-full bg-transparent'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <button 
        type='submit'
        className='btn btn-circle border-none bg-violet-500 text-white bg-opacity-60 hover:bg-opacity-75 group hover:bg-pink-500
        '>
            <FaSearch 
            className='transition-transform duration-300 ease-in-out group-hover:scale-125'
            />
        </button>

    </form>
  )
}

// STARTER CODE
// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// export default function SearchInput() {
//   return (
//     <form className='flex items-center gap-2'>

//         <input
//         type="text"
//         placeholder="Search"
//         className='input input-bordered rounded-full bg-transparent'
//         />

//         <button 
//         type='submit'
//         className='btn btn-circle bg-purple-600 text-white group'>
//             <FaSearch 
//             className='transition-transform duration-300 ease-in-out group-hover:scale-125'
//             />
//         </button>

//     </form>
//   )
// }
