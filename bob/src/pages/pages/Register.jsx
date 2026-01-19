import React , {useState} from "react";
import Navbar from "../../components/common/Navbar";
import FooterMain from "../../components/common/FooterMain";
import { useNavigate } from "react-router-dom";
import "../../components/css/register.css";

export default function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        login: "",
        password: "",
        password2: "",
        email: "",
        imie: "",
        nazwisko: "",
        status: "",
        wiek: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(form.password !== form.password2) {
            setMessage("Hasła się różnią !");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    login: form.login,
                    haslo: form.password,
                    email: form.email,
                    imie: form.imie,
                    nazwisko: form.nazwisko,
                    status: form.status,
                    wiek: form.wiek,
                })
            });

            if (response.status === 201) {
                setMessage("Poprawnie zarejestrowano");

                setTimeout(() => {
                    navigate("/login");
                },1500);
                return;
            }

            setMessage("Poprawnie zarejestrowano");
        } catch (error){
            setMessage("Błąd podczas łączenia z serwerem !");
        }
    }

    return(
        <>
        <Navbar/>

        <div className="container form-wrapper pb-5">
        <div className = "form-center">
        <div className="card shadow-lg p-4" style={{ maxWidth: "420px", width: "80%" }}>
            <h3 className="text-center mb-4">Rejestracja</h3>

            {message && (
                <div className="alert alert-info text-center">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Login</label>
                <input type="text"
                className="form-control"
                name="login"
                value={form.login}
                onChange={handleChange}/>
            </div>

            <div className="mb-3">
            <label className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required/>
            </div>

            <div className="mb-3">
                <label className="form-label">Hasło</label>
                <input type="password"
                className="form-control"
                name="password"
                value={form.password}
                onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Potwierdź hasło</label>
                <input type="password"
                className="form-control"
                name="password2" 
                value={form.password2}
                onChange={handleChange}/>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                <label className="form-label">Imię</label>
                <input type="text"
                className="form-control"
                name="imie"
                value={form.imie}
                onChange={handleChange}/>
                </div>

                <div className="col-md-6 mb-3">
                <label className="form-label">Nazwisko</label>
                <input type="text"
                className="form-control"
                name="nazwisko"
                value={form.nazwisko}
                onChange={handleChange}/>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Wiek</label>
                <input type="number"
                className="form-control"
                name="wiek"
                value={form.wiek}
                onChange={handleChange}/>
            </div>

            <div className="mb-4">
                <label className="form-label">Typ konta</label>
                <select className="form-select"
                name="status"
                value={form.status}
                onChange={handleChange}>
                <option value="">Wybierz...</option>
                <option value="klient">Klient</option>
                <option value="specjalist">Specjalista</option>
                </select>
            </div>

            <button className="btn btn-primary w-100" type="submit">
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