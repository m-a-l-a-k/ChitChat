import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 w-screen mx-auto'>
      <div className= 'w-full p-6 rounded-lg shadow-lg bg-white bg-clip-padding backdrop-blur-lg bg-opacity-5'>
        <h1 className='title text-3xl font-semibold text-center text-white'>
          Login 
          <span className="title text-purple-300"> ChitChat</span>
        </h1>

          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-7 text-shadow'>Username</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter username' 
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
                border-opacity-70' 
                />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text  text-white pt-4 text-shadow'>Password</span>
              </label>
              <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered bg-purple-200 border-purple-400
              placeholder-purple-600 placeholder:tracking-tight text-purple-950 h-10
              border-opacity-70' 
              />
            </div>

            <div>
              <button className="btn btn-block btn-m mt-9 bg-purple-500 border-purple-600
              transition-colors duration-400 ease-in-out hover:bg-pink-400 hover:border-purple-500
              text-sm text-shadow-sm border-opacity-30">
                Login
              </button>
            </div>

            <div className="w-fit mx-auto text-center">
              <span className="text-sm text-white mt-5 font-normal">
                {"Don't"} have an account?{" "}
                <a href='#'
                className="text-sm hover:underline text-purple-400 transition-opacity duration-300
                ease-in-out hover:text-pink-400 inline-block mt-5 font-bold hover:-text-shadow">
                  Sign up
                </a>
              </span>
            </div>

          </form>
      </div>
    </div>
  )
}





// STARTING CODE
// export default function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 min-h-screen mx-auto bg-gradient-to-br via-transparent'>
//       <div className= 'w-full p-6 rounded-lg shadow-lg bg-white bg-clip-padding backdrop-blur-sm bg-opacity-5'>
//         <h1 className='title text-3xl font-semibold text-center text-white'>
//           Login 
//           <span className="title text-purple-300"> ChitChat</span>
//           </h1>

//           <form>
//             <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text text-white pt-7 text-shadow'>Username</span>
//               </label>
//               <input 
//                 type='text' 
//                 placeholder='Enter username' 
//                 className='w-full input input-bordered bg-purple-200 border-purple-400 placeholder-purple-950 h-10' />
//             </div>

//             <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text  text-white pt-4'>Password</span>
//               </label>
//               <input
//               type='password'
//               placeholder='Enter password'
//               className='w-full input input-bordered bg-purple-200 border-purple-400 placeholder-purple-950 h-10'
//               />
//             </div>
//             <a href='#' className="text-sm hover:underline text-purple-900 transition-opacity duration-300 ease-in-out hover:bg-purple-900 hover:text-white mt-2 inline-block">
//               {"Don't"} have an account?
//             </a>

//             <div>
//               <button className="btn btn-block btn-sm mt-6 bg-purple-600 border-purple-700 transition-colors duration-300 ease-in-out hover:bg-purple-400 hover:border-purple-500 hover:text-purple-950">
//                 Login
//               </button>
//             </div>
//           </form>
//       </div>
//     </div>
//   )
// }
