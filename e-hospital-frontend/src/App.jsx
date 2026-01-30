import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Patient from "./pages/patient.jsx";
import Doctor from "./pages/doctor.jsx";
import Admin from "./pages/admin.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

