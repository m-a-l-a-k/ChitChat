import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

export default function LogoutButton() {

  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
        <button 
        className='flex items-center group relative'
        onClick={logout}
        disabled={loading}
        >
          {!loading ? (
            <>
              <BiLogOut className='text-2xl' />
              <span
              className='text-white text-sm absolute left-3 opacity-0 transform
              translate-x-0 transition-all duration-300 group-hover:opacity-100
              group-hover:translate-x-5'
              >
                  <a href="#"
                  className='text-white hover:underline'
                  >
                      Logout
                  </a>
              </span>
            </>
          ) : (
            <span className="text-white loading loading-spinner"></span>
          )}
        </button>
    </div>
  )
}
