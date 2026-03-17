import { Outlet, NavLink } from "react-router-dom";
import "../../components/css/searchComponentCss.css";
import Navbar from "../../components/common/Navbar";
import FooterMain from "../../components/common/FooterMain";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export default function UserPanelLayout() {

    const token = localStorage.getItem("jwt");

    if (!token) {
        return <Navigate to="/login" />;
    }
    try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;


        if (decoded.exp < now) {
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
            return <Navigate to="/login" />;
        }
    } catch (err) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Navbar />
            <div className="user-panel">
                <aside className="sidebar">
                    <h5 className="logo">PANEL UŻYTKOWNIKA</h5>

                    <div className="d-flex gap-2 flex-wrap">

                        <NavLink
                            to="/panel/dashboard"
                            className={({ isActive }) =>
                                `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
                            }
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/panel/oferty"
                            className={({ isActive }) =>
                                `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
                            }
                        >
                            Twoje oferty
                        </NavLink>

                        <NavLink
                            to="/panel/profil"
                            className={({ isActive }) =>
                                `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
                            }
                        >
                            Zmień dane
                        </NavLink>

                        <NavLink
                            to="/panel/ustawienia"
                            className={({ isActive }) =>
                                `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
                            }
                        >
                            Dane
                        </NavLink>

                    </div>
                </aside>
                <main className="content">
                    <Outlet />
                </main>
            </div>
            <FooterMain />
        </>
    )
}