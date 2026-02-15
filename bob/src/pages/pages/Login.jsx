import React, {useState} from "react";
import Navbar from "../../components/common/Navbar";
import FooterMain from "../../components/common/FooterMain";
import { useNavigate} from "react-router-dom";
import "../../components/css/register.css";

export default function Login() {

    const navigate = useNavigate();

    const[form,setForm] = useState({
        login: "",
        haslo: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Błędne dane logowania");
      }

      const data = await response.json();

      // ZAPIS JWT
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("user", JSON.stringify({
        login: data.login,
        role: data.role
      }));

      navigate("/"); // landing page

    } catch (err) {
      setMessage("Nieprawidłowy login lub hasło");
    }
  };

    return(
        <div>
            <Navbar/>
      <div className="container form-wrapper pb-5">
        <div className="form-center">
          <div className="card shadow-lg p-4">

            <h3 className="text-center mb-4">Logowanie</h3>

            {message && (
              <div className="alert alert-danger text-center">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Login</label>
                <input
                  type="text"
                  className="form-control"
                  name="login"
                  value={form.login}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Hasło</label>
                <input
                  type="password"
                  className="form-control"
                  name="haslo"
                  value={form.haslo}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary w-100" type="submit">
                Zaloguj się
              </button>

              
              <button
                className="btn btn-outline-secondary w-100 mt-2"
                type="button"
                onClick={() => navigate("/register")}
              >
                Rejestracja
              </button>
            </form>
          </div>
        </div>
      </div>
            <FooterMain/>
        </div>
    )
}