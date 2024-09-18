import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import Categories from "./components/Categories.jsx";
import CreateEvent from "./components/CreateEvent.jsx";
import EventDetail from "./components/EventDetail.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import RegisterEvent from "./components/RegisterEvent.jsx";
import SignupUser from "./components/SignupUser.jsx";
import UpdateEvent from "./components/UpdateEvents.jsx";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const login = { isLoggedIn, setIsLoggedIn };
  const user = { currentUser, setCurrentUser };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login login={login} user={user} />}></Route>
        <Route path="/signup" element={<SignupUser login={login} user={user} />}></Route>
        <Route path="/createEvent" element={<CreateEvent login={login} user={user} />}></Route >
        <Route path="/updateEvent" element={<UpdateEvent login={login} user={user} />}></Route>
        <Route path="/registerEvent" element={<RegisterEvent login={login} user={user} />}></Route >
        <Route path="/categories" element={<Categories />}></Route >
        <Route path="/events/:id" element={<EventDetail login={login} user={user} />} />
        {/* <Route path="/event" element={< />}></Route > 
        {/* <Route path="/payment" element={< />}></Route > 
        {/* <Route path="/myprofile" element={< />}></Route >
        */}
      </Routes>
    </BrowserRouter>

  );
};
export default App;
