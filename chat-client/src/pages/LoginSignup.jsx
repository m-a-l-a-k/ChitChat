import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenderCheckbox from "./signup/GenderCheckbox";
import DOBPicker from "../components/dobPicker/DOBPicker";
import useSignup from "../hooks/useSignup.js"
import useLogin from "../hooks/useLogin.js";


export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    DOB: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const { loading: loginLoading, login } = useLogin();
  const { loading: signupLoading, signup } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(inputs, () => navigate('/'));
  };
   
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({username, password})
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
      className={`transition-all duration-300 overflow-hidden rounded-lg shadow-lg bg-white bg-opacity-5 backdrop-blur-lg p-6
      w-full
        ${isLogin
          ? "h-[425px] w-[420px]"
          : "h-[565px] sm:w-[545px] lg:w-[555px]"
        }`}
      >

        <div className="flex items-center justify-center gap-2 mb-6">
            <div className="relative h-10 w-[100px] overflow-hidden text-right">
              <h1
                className={`absolute inset-0 transition-all duration-500 ease-in-out title text-3xl font-semibold text-white ${
                  isLogin ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
              >
                Login
              </h1>
              <h1
                className={`absolute inset-0 transition-all duration-500 ease-in-out title text-3xl font-semibold text-white ${
                  isLogin ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                Signup
              </h1>
            </div>
            <span className="block text-3xl font-semibold text-purple-300 title">ChitChat</span>
        </div>

        {/* LOGIN FORM */}
        <form
          className={`absolute w-full transition-all duration-500 ease-in-out top-12 px-6 ${
            isLogin ? "left-0 opacity-100" : "-left-full opacity-0"
          }`}
          onSubmit={handleLogin}
        >
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white pt-7 text-shadow'>
                Username
              </span>
            </label>
            <input 
              type='text' 
              placeholder='Enter username' 
              className='w-full input input-bordered bg-purple-200 border-purple-400
              placeholder-purple-500 placeholder:tracking-tight text-purple-950 h-10
              border-opacity-70' 
              value={username}
              onChange= {(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white pt-4 text-shadow'>
                Password
              </span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered bg-purple-200 border-purple-400
              placeholder-purple-500 placeholder:tracking-tight text-purple-950 h-10
              border-opacity-70'
              value={password}
              onChange= {(e) => setPassword(e.target.value)}
            />

            <div className="w-full text-right">
              <a
                href="#"
                className="text-fuchsia-800 hover:underline text-sm tracking-tighter mr-2 font-semibold opacity-90"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button className="btn btn-block btn-m mt-9 bg-purple-500 border-purple-600
            transition-colors duration-400 ease-in-out hover:bg-pink-400 hover:border-purple-500
            text-sm text-shadow-sm border-opacity-30 hover:bg-opacity-80"
            disabled={loginLoading}
            >
              {loginLoading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>

          <div className="w-fit mx-auto text-center">
            <span className="text-sm text-white mt-5 font-normal">
                Don't have an account?{' '}
                <button 
                type="button" 
                onClick={() => setIsLogin(false)} 
                className="text-sm hover:underline text-purple-400 transition-opacity duration-300
                ease-in-out hover:text-pink-400 inline-block mt-5 mb-2 font-bold hover:-text-shadow">
                Sign up
                </button>
            </span>
          </div>
          
        </form>


        {/* SIGNUP FORM */}
        <form
          className={`absolute w-full transition-all duration-500 ease-in-out top-14 px-6 ${
            isLogin ? "left-full opacity-0" : "left-0 opacity-100"
          }`}
          onSubmit={handleSignup}
        >
          <div className="flex gap-2">
            <div className='flex flex-col'>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-4 text-shadow'>
                    Name
                </span>
              </label>
              <input 
                type='text' 
                placeholder='Jane Doe' 
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-500 placeholder:tracking-tight text-purple-950 h-10
                border-opacity-70'
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
              />
            </div>
            <div className='flex flex-col'>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-4 text-shadow'>
                  Username
                </span>
              </label>
              <input 
                type='text' 
                placeholder='jane.doe' 
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-500 text-purple-950 h-10 border-opacity-70'
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
              />
            </div>
          </div>

          <div className='flex flex-col'>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-1 text-shadow'>
                    Email
                </span>
              </label>
              <input 
                type='text' 
                placeholder='your.email@example.com' 
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-500 placeholder:tracking-tight text-purple-950 h-10
                border-opacity-70'
                value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}
              />
            </div>

          <div className='flex gap-2'>
            <div className='flex flex-col w-full'>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-1 text-shadow'>
                  Date of Birth
                </span>
              </label>
              <DOBPicker
                onDateChange={(date) => setInputs({ ...inputs, DOB: date })}
                selectedDate={inputs.DOB}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-1 text-shadow'>
                  Gender
                </span>
              </label>
              <GenderCheckbox 
                onCheckboxChange={handleCheckboxChange}
                selectedGender={inputs.gender}
              />
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col w-full'>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-1 text-shadow'>
                  Password
                </span>
              </label>
              <input
                type='password'
                placeholder='Enter password'
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-500 text-purple-950 h-10 border-opacity-70'
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='label p-2'>
                <span className='text-base label-text text-white pt-1 text-shadow'>
                  Confirm Password
                  </span>
              </label>
              <input
                type='password'
                placeholder='Re-enter password'
                className='w-full input input-bordered bg-purple-200 border-purple-400
                placeholder-purple-500 text-purple-950 h-10 border-opacity-70'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
              />
            </div>
          </div>

          <div className="form-control mt-2">
            <label className="cursor-pointer label p-2">
              <input
                type="checkbox"
                className="checkbox border-black border-opacity-30"
                required
              />
              <span className="label-text text-white text-sm">
                I agree to the <a href="#" className="underline text-purple-400 hover:text-pink-500 font-bold">Terms & Conditions</a>
              </span>
            </label>
          </div>

          <button className="btn btn-block mt-5 bg-purple-500 border-purple-700
          transition-colors duration-300 ease-in-out hover:bg-pink-400 hover:border-purple-500
          text-sm text-shadow-sm border-opacity-70 hover:bg-opacity-80"
          disabled={signupLoading}
          >
            {signupLoading ? <span className='loading loading-spinner'></span> : "Sign up"}
          </button>

          <div className="w-fit mx-auto text-center">
            <span className="text-sm text-white font-normal">
                Already have an account?{' '}
                <button 
                type="button" 
                onClick={() => setIsLogin(true)} 
                className="text-sm mt-3 hover:underline text-purple-400 transition-opacity duration-300
                ease-in-out hover:text-pink-400 inline-block font-bold hover:-text-shadow">
                Login
                </button>
            </span>
          </div>

        </form>
      </div>
    </div>
  );
}
