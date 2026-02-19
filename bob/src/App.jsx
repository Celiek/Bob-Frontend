import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/pages/Home.jsx";
import Lista from "./pages/pages/Lista.jsx";
import Register from "./pages/pages/Register.jsx";
import Login from './pages/pages/Login.jsx';
import AddOferta from "./pages/pages/AddOferta.jsx";
import ListaOfert from "./pages/pages/ListaOfert.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import Offers from "./pages/pages/Offers.jsx";
import OfertaDetails from "./pages/pages/OfertaDetails.jsx";
import UserPanelLayout from "./pages/pages/UserPanelLayout.jsx";
import Dashboard from "./pages/pages/MyOffers.jsx";
import MyOffers from "./pages/pages/MyOffers.jsx"
import Profile from "./pages/pages/Profile.jsx";

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
        <Route path="/offers" element={<Offers/>} />
        <Route path="/listaOfert" element={<ListaOfert/>}/>
        <Route path="/oferta/:id" element={<OfertaDetails />} />
        <Route path="/panel" element={<UserPanelLayout />}>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="oferty" element={<MyOffers/>} />
          <Route path="profil" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
