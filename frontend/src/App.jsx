import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import CreateEvent from "./components/CreateEvent.jsx";
import { useState } from "react";

const App = () => {
  const [isloggedin, setisloggedin] = useState(false)
  const [isuser, setisuser] = useState(true)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isloggedin={isloggedin} isuser={isuser} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createEvent" element={<CreateEvent isloggedin={isloggedin} isuser={isuser} />}></Route >
        {/* <Route path="/event" element={< />}></Route > 
        {/* <Route path="/payment" element={< />}></Route > 
        {/* <Route path="/myprofile" element={< />}></Route >
        */}
      </Routes>
    </BrowserRouter>

  );
};
export default App;
