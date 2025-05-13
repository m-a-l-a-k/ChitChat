import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <form className='flex items-center gap-2'>

        <input
        type="text"
        placeholder="Search"
        className='input input-bordered rounded-full bg-transparent'
        />

        <button 
        type='submit'
        className='btn btn-circle bg-violet-500 text-white bg-opacity-60 hover:bg-opacity-75 group hover:bg-pink-500
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
