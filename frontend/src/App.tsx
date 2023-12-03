import * as React from "react";
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Imfomation from './page/User/infomation/index';
import Member from "./page/User/Member/index";
import Homeuser from "./page/User/Home/index";
import Room from "./page/User/Room/index";
import User from './Components/Sidebar/User/index'
import Admin from './Components/Sidebar/Admin/index'
import LoginUser from './Components/LoginUser/LoginUser'
import LoginAdmin from './Components/LoginAdmin/LoginAdmin'

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [token, setToken] = React.useState<String>("");

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/admin" element={<LoginAdmin />} />
      </Routes>
    );
  }



  function router() {
    if (localStorage.getItem("position") === "Admin") {
      return(
        <Routes>
          <Admin />
        </Routes>
      );
    }else if (localStorage.getItem("position") === "User") {
      return(
        <Routes>
          <User />
        </Routes>
      );
    }
  }
  return <>{router()}</>;
}
    
  



