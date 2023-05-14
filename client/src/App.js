import { Home } from "./pages/Home/Home";
import { Registeration } from "./pages/Registeration/Registeration";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import DataProvider from "./context/authContext";
import { ToastContainer } from "react-toastify";
// import {OTP} from "./pages/OTP/Otp"

function App() {
  return (
    <DataProvider>
    <ToastContainer/>
      <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Registeration/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/otp" element={<OTP/>}/> */}
    </Routes>

    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
