import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import GenderCheckbox from './GenderCheckbox'
import DOBPicker from "../../components/dobPicker/DOBPicker";



export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
       <div 
        className= 'w-full p-6 rounded-lg shadow-lg bg-white bg-clip-padding backdrop-blur-lg bg-opacity-5'>
        <h1 className='title text-3xl font-semibold text-center text-white'>
          Signup{" "}
          <span className="title text-purple-300 ml-2">
            ChitChat
          </span>
          </h1>

          <form>
            <div className="flex gap-2">
              <div className='flex flex-col'>
                <label className='label p-2'>
                  <span className='text-base label-text text-white pt-7 text-shadow'>
                    Name</span>
                </label>
                <input 
                  type='text' 
                  placeholder='Jane Doe' 
                  className='w-full input input-bordered bg-purple-200 border-purple-400
                  placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10 
                  border-opacity-70'
                  />
              </div>
              
              <div className='flex flex-col'>
              <label className='label p-2'>
                  <span className='text-base label-text text-white pt-7 text-shadow'>
                    Userame</span>
                </label>
                <input 
                  type='text' 
                  placeholder='jane.doe' 
                  className='w-full input input-bordered bg-purple-200 border-purple-400
                  placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
                border-opacity-70' 
                  />
              </div>
            </div>

            <div className='flex gap-2'>
              <div className='flex flex-col w-full'>
              <label className='label p-2'>
                  <span className='text-base label-text text-white pt-7 text-shadow'>
                    Date of Birth</span>
                </label>
                <DOBPicker />
              </div>

                <div className='flex flex-col w-full'>
                <label className='label p-2'>
                  <span className='text-base label-text text-white pt-7 text-shadow'>
                    Gender</span>
                </label>
                <GenderCheckbox />
                </div>
              </div>
            
            <div className='flex gap-2'>
              <div className='flex flex-col'>
                <label className='label p-2'>
                  <span className='text-base label-text  text-white pt-4 text-shadow'>
                    Password</span>
                </label>
                <input
                type='password'
                placeholder='Enter password'
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
                border-opacity-70'
                />
              </div>
            
              <div className='flex flex-col'>
                <label className='label p-2'>
                  <span className='text-base label-text  text-white pt-4 text-shadow'>
                    Confirm Password</span>
                </label>
                <input
                type='password'
                placeholder='Re-enter password'
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
                border-opacity-70'
                />
              </div>
            </div>

            <div>
              <button className="btn btn-block btn-m mt-9 bg-purple-500 border-purple-700
              transition-colors duration-400 ease-in-out hover:bg-pink-400 hover:border-purple-500
              text-sm text-shadow-sm border-opacity-70">
                Sign up
              </button>
            </div>

            <div className="w-fit mx-auto text-center">
              <span className="text-sm text-white mt-5 font-normal">
                Already have an account?{" "}
              <a href='#' 
              className="text-sm hover:underline text-purple-400 transition-opacity duration-300
              ease-in-out hover:text-pink-400 inline-block mt-5 font-bold hover:-text-shadow">
                Login
              </a>
              </span>
            </div>
          </form>
      </div>

      </div>
  )
}



// STARTER CODE:
// import React, { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import GenderCheckbox from './GenderCheckbox'
// import DOBPicker from "../../components/DOBPicker";



// export default function Signup() {
//   return (
//     <div 
//       className="flex flex-col items-center justify-center min-w-96 mx-auto"
//       >
//        <div 
//         className= 'w-full p-6 rounded-lg shadow-lg bg-white bg-clip-padding backdrop-blur-lg bg-opacity-5'>
//         <h1 className='title text-3xl font-semibold text-center text-white'>
//           Signup{" "}
//           <span className="title text-purple-300 ml-2">
//             ChitChat
//           </span>
//           </h1>

//           <form>
//             <div className="flex gap-2">
//               <div className='flex flex-col'>
//                 <label className='label p-2'>
//                   <span className='text-base label-text text-white pt-7 text-shadow'>
//                     Name</span>
//                 </label>
//                 <input 
//                   type='text' 
//                   placeholder='Jane Doe' 
//                   className='w-full input input-bordered  bg-purple-200 border-purple-400
//                   placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10 
//                   border-opacity-70'
//                   />
//               </div>
              
//               <div className='flex flex-col'>
//               <label className='label p-2'>
//                   <span className='text-base label-text text-white pt-7 text-shadow'>
//                     Userame</span>
//                 </label>
//                 <input 
//                   type='text' 
//                   placeholder='jane.doe' 
//                   className='w-full input input-bordered bg-purple-200 border-purple-400
//                   placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
//                 border-opacity-70' 
//                   />
//               </div>
//             </div>

//             <div className='flex gap-2'>
//               <div className='flex flex-col w-full'>
//               <label className='label p-2'>
//                   <span className='text-base label-text text-white pt-7 text-shadow'>
//                     Date of Birth</span>
//                 </label>
//                 <DOBPicker />
//               </div>

//                 <div className='flex flex-col w-full'>
//                 <label className='label p-2'>
//                   <span className='text-base label-text text-white pt-7 text-shadow'>
//                     Gender</span>
//                 </label>
//                 <GenderCheckbox />
//                 </div>
//               </div>
            
//             <div className='flex gap-2'>
//               <div className='flex flex-col'>
//                 <label className='label p-2'>
//                   <span className='text-base label-text  text-white pt-4 text-shadow'>
//                     Password</span>
//                 </label>
//                 <input
//                 type='password'
//                 placeholder='Enter password'
//                 className='w-full input input-bordered bg-purple-200 border-purple-400
//                 placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
//                 border-opacity-70'
//                 />
//               </div>
            
//               <div className='flex flex-col'>
//                 <label className='label p-2'>
//                   <span className='text-base label-text  text-white pt-4 text-shadow'>
//                     Confirm Password</span>
//                 </label>
//                 <input
//                 type='password'
//                 placeholder='Re-enter password'
//                 className='w-full input input-bordered bg-purple-200 border-purple-400
//                 placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
//                 border-opacity-70'
//                 />
//               </div>
//             </div>

//             <div>
//               <button className="btn btn-block btn-m mt-9 bg-purple-500 border-purple-700
//               transition-colors duration-400 ease-in-out hover:bg-pink-400 hover:border-purple-500
//               text-sm text-shadow-sm border-opacity-70">
//                 Sign up
//               </button>
//             </div>

//             <div className="w-fit mx-auto text-center">
//               <span className="text-sm text-white mt-5 font-normal">
//                 Already have an account?{" "}
//               <a href='#' 
//               className="text-sm hover:underline text-purple-400 transition-opacity duration-300
//               ease-in-out hover:text-pink-400 inline-block mt-5 font-bold hover:-text-shadow">
//                 Login
//               </a>
//               </span>
//             </div>
//           </form>
//       </div>

//       </div>
//   )
// }