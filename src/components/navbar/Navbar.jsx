import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/logo2.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/actions/authaction";
import Logo from "../../assests/logo_s.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.auth?.user);

  const { accessToken } = useSelector((state) => state.auth);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  console.log(user);

  const handleLogin = () => {
    dispatch(login());
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full z-[100] absolute top-0 left-0 px-5 flex justify-center items-center">
      <nav className="h-[1.2cm] w-10/12 bg-[#1816162c] backdrop-blur-xl rounded-2xl flex px-10 justify-center items-center">
      {/* LOGO */}
        <div className=" flex gap-3 flex-row items-center justify-center">
          <img src={Logo} className="w-[1cm] " />
          <span className="font-extrabold text-2xl">
            Sign
            <span className=" text-primary-800">It</span>
          </span>
        </div>

      {/* Profile */}
      
      </nav>
    </div>
  );
};

export default Navbar;
