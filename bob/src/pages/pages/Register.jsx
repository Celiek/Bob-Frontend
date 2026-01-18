import React from "react";
import Navbar from "../../components/common/Navbar";
import FooterMain from "../../components/common/FooterMain";
import "../../components/css/register.css";

export default function Register() {
    return(
        <>
        <Navbar/>

        <div className="container form-wrapper pb-5">
        <div className = "form-center">
        <div className="card shadow-lg p-4" style={{ maxWidth: "420px", width: "80%" }}>
            <h3 className="text-center mb-4">Rejestracja</h3>
            <form>
            <div className="mb-3">
                <label className="form-label">Login</label>
                <input type="text" className="form-control" name="login" />
            </div>

            <div className="mb-3">
                <label className="form-label">Hasło</label>
                <input type="password" className="form-control" name="password" />
            </div>

            <div className="mb-3">
                <label className="form-label">Potwierdź hasło</label>
                <input type="password" className="form-control" name="password2" />
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                <label className="form-label">Imię</label>
                <input type="text" className="form-control" name="imie" />
                </div>

                <div className="col-md-6 mb-3">
                <label className="form-label">Nazwisko</label>
                <input type="text" className="form-control" name="nazwisko" />
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Wiek</label>
                <input type="number" className="form-control" name="wiek" />
            </div>

            <div className="mb-4">
                <label className="form-label">Typ konta</label>
                <select className="form-select" name="typ_konta">
                <option value="">Wybierz...</option>
                <option value="klient">Klient</option>
                <option value="specjalist">Specjalista</option>
                </select>
            </div>

            <button className="btn btn-primary w-100">
                Zarejestruj się
            </button>
            </form>
        </div>
        </div>
        </div>

        <FooterMain/>
        </>
    )
}