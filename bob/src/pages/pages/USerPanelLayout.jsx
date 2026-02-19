import {Outlet, NavLink} from "react-router-dom";
import "../../components/cssuserPanel.css";

export default function UserPanelLayout() {

    if (!localStorage.getItem("jwt")) {
        return <Navigate to="/login" />;
    }

    return(
        <>
        <div className="user-panel">
            <aside className = "sidebar">
                <h5 className="logo">PANEL UŻYTKOWNIKA</h5>
                <NavLink to="/panel/dashboard">Dasvhboard</NavLink>
                <NavLink to="/panel/oferty">Twoje oferty</NavLink>
                <NavLink to="/panel/profil">Ustawienia profilu</NavLink>
                <NavLink to="/panel/ustawienia">Dane</NavLink>
            </aside>
            <main className="content">
                <Outlet/>
            </main>
        </div>
        </>
    )
}