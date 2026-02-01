import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/pages/Home.jsx";
import Lista from "./pages/pages/Lista.jsx";
import Register from "./pages/pages/Register.jsx";
import Login from './pages/pages/Login.jsx';
import AddOferta from "./pages/pages/AddOferta.jsx";
import ListaOfert from "./pages/pages/ListaOfert.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addOferta"  element={
          <ProtectedRoute>
            <AddOferta />
          </ProtectedRoute>
        }/>
        <Route path="/listaOfert" element={<ListaOfert/>}/>
      </Routes>
    </BrowserRouter>
  );
}
