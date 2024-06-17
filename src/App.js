import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Login from "./components/login/login";
import Loading from "./components/loader/Loading.jsx";
import { useState } from "react";



function App() {
  const { accessToken } = useSelector((state) => state.auth);
  const [isLoading, setsLoading] = useState(true);

  if(!accessToken){
    return <Login />
  }

  if(isLoading){
    return <Loading />
  }

  return (
    <div >
  


      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;
