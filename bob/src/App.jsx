import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/pages/Home.jsx";
import Lista from "./pages/pages/Lista.jsx";
import Register from "./pages/pages/Register.jsx";
import Login from './pages/pages/Login.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
