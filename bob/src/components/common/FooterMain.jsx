import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"
import "../css/footer.css"

const FooterMain = () => {
    return(
    <div className="container-fluid">
    <footer className="row border-top fixed-bottom" id="customFooter">
            <div className="col mb-3 ms-md-4 mt-md-3">
                <h5>Linki</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Strona główna</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">O nas</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Kontakt</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Informacje prawne</a></li>
                </ul>
            </div>
            <div className="col mb-3"></div>
            <div className="col mb-5"> 
                <p className="text-body-secondary text-end mt-3 me-3">&copy; 2025</p>
            </div>

        </footer> </div>);
};
export default FooterMain;