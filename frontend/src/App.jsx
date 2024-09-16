import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import SignupTypeSelection from "./components/SignupTypeSelection.jsx";
import SignupUser from "./components/SignupUser.jsx";
import SignupOrganizer from "./components/SignupOrganizer.jsx";
import CreateEvent from "./components/CreateEvent.jsx";
import RegisterEvent from "./components/RegisterEvent.jsx";
import Categories from "./components/Categories.jsx";
import EventDetail from "./components/EventDetail.jsx";
import AboutUs from "./components/AboutUs.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignupTypeSelection />}></Route>
        <Route path="/signup-user" element={<SignupUser />}></Route>
        <Route path="/signup-organizer" element={<SignupOrganizer />}></Route>
        <Route path="/createEvent" element={<CreateEvent />}></Route >
        <Route path="/registerEvent" element={<RegisterEvent />}></Route >
        <Route path="/categories" element={<Categories />}></Route >
        <Route path="/event/:id" element={<EventDetail />} />
        {/* <Route path="/event" element={< />}></Route > 
        {/* <Route path="/payment" element={< />}></Route > 
        {/* <Route path="/myprofile" element={< />}></Route >
        */}
      </Routes>
    </BrowserRouter>

  );
};
export default App;
