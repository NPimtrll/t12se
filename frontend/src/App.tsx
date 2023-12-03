import * as React from "react";
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Imfomation from './page/User/infomation/index';
import Member from "./page/User/Member/index";
import Homeuser from "./page/User/Home/index";
import Room from "./page/User/Room/index";
import Sidebaruser from './Components/Sidebar/User/index'
import Sidebaradmin from './Components/Sidebar/Admin/index'



export default function App() {
  const [open, setOpen] = React.useState(false);
  const [token, setToken] = React.useState<String>("");

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);



  function router() {
    return (
      <>
      <Sidebaradmin />
      <Sidebaruser />
      
        {/* <Routes>
          <Route path="/" element={<Sidebaruser />} />
          <Route path="/Homeuser" element={<Sidebaruser />} />
          <Route path="/infomation" element={<Sidebaruser />} />
          <Route path="/Member" element={<Sidebaruser />} />
          <Route path="/Room" element={<Sidebaruser />} />
        </Routes> */}
      </>
    );
    
    } 
      return <>{router()}</>;
    }
    
  //   if (localStorage.getItem("position") === "ีUser") {
  //   return (
      
  //       <Routes>
  //         <Route path="/" element={<User />} />
  //         <Route path="/Homeuser" element={<Homeuser />} />
  //         <Route path="/infomation" element={<Imfomation />} />
  //         <Route path="/Member" element={<Member />} />
  //       </Routes>

      
      
  //   );
  // }else if (localStorage.getItem("position") === "Admin") {
  //   return (
  //     <Routes>
  //         <Route path="/" element={<Admin />} />
  //         <Route path="/Homeadmin" element={<Homeadmin />} />
  //     </Routes>
      
  //   );
  // }




