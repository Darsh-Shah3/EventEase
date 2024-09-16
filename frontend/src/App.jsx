import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import CreateEvent from "./components/CreateEvent.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createEvent" element={<CreateEvent />}></Route >
        {/* <Route path="/event" element={< />}></Route > 
        {/* <Route path="/payment" element={< />}></Route > 
        {/* <Route path="/myprofile" element={< />}></Route >
        */}
      </Routes>
    </BrowserRouter>

  );
};
export default App;
