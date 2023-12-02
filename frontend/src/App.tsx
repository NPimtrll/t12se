import * as React from "react";
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Imfomation from './page/infomation';
import Siderbar from './Components/Sidebar/index'
import Member from "./page/Member";
import Home from "./page/Home";


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
        <Siderbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/infomation" element={<Imfomation />} />
          <Route path="/Member" element={<Member />} />
        </Routes>
      </>
    );
  }
  return <>{router()}</>;
}




