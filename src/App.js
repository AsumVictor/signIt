import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Footer,
  Home,
  Detect,
  NotFound,
  Dashboard,
} from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Login from "./components/login/login";

const notifyMsg = (type, msg) => {
  if (type === "success") {
    const notify = () => toast.success(msg);
    notify();
  } else {
    const notify = () => toast.error(msg);
    notify();
  }
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar notifyMsg={notifyMsg} />
      {children}
    </>
  );
};

function App() {
  const { accessToken } = useSelector((state) => state.auth);
  console.log(accessToken)

  if(!accessToken){
    return <Login />
  }

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout notifyMsg={notifyMsg}>
               <Detect />
            </Layout>
          }
        />

        <Route
          exact
          path="/detect"
          element={
            <Layout>
              <Detect />
            </Layout>
          }
        />

        <Route
          exact
          path="/dashboard"
          element={
            <Layout>
              <Dashboard/>
            </Layout>
          }
        />

        <Route exact path="*" element={<NotFound />} />
      </Routes>

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
