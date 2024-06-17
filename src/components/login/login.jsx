import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authaction';

function Login() {
 const [IsLoggedIn, setIsLoggedIn] = useState(false)
 let dispatch = useDispatch() 

  const handleLogin = () => {
    dispatch(login());
    setIsLoggedIn(true);
  };



  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <button onClick={()=>handleLogin()} className='px-3 bg-white'>LOGIN</button>
    </section>
  )
}

export default Login