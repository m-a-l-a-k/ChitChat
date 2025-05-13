import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import LoginSignup from './pages/LoginSignup.jsx'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import './index.css'

function App() {

  const {authUser} = useAuthContext();
  return (
    
    <div className='p-4 flex items-center justify-center'>
      
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : <Navigate to={"/loginsignup"} />} />
        <Route path='/loginsignup' element={ authUser ? <Navigate to='/' /> : <LoginSignup />} />
      </Routes>
      <Toaster />

    </div>

  )
}

export default App
