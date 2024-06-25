import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authaction";
import { IoLogoGoogle } from "react-icons/io5";
import google from "../../assests/google.png";

function Login() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  let dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    setIsLoggedIn(true);
  };

  return (
    <>
      {/* component */}
      <div className="flex flex-col items-center justify-center my-2 mx-4 md:mx-0 h-screen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <div className="text-center bg-white">
            <div className="flex items-center justify-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-blue-700"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-4xl tracking-tight text-blue-700 font-extrabold">
              Sign in into your account
            </h2>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 mt-10">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight outline-none focus:border-blue-700 focus:border-2 transition-all"
                type="email"
                required=""
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight outline-none focus:border-blue-700 focus:border-2 transition-all"
                type="password"
                required=""
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <label htmlFor="remember" className="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-1 bg-white shadow"
                />
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
              </label>
              <div className="w-1/2 text-right">
                <a href="#" className="text-blue-500 text-sm tracking-tight">
                  Forget your password?
                </a>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-[#11136e] text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-[#040542fb] focus:outline-none focus:bg-[#120573] "
              >
                Sign in
              </button>
            </div>
            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-xs text-gray-700">
                or sign in with
              </span>
            </div>
            <div className="flex items-center w-full mt-2">
              <div className="w-full px-3 pt-4 mx-2 border-t border-gray-400">
                <button
                  className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                  onClick={() => handleLogin()}
                >
                  <span className=" mx-3 font-extrabold ">
                    <img className="w-[2cm]" src={google} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
// <section className='w-full h-screen flex justify-center items-center'>
//     <button onClick={()=>handleLogin()} className='px-3 bg-white'>LOGIN</button>
// </section>
