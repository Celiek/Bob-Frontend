import React, {useState} from "react";
import Navbar from "../../components/common/Navbar";
import FooterMain from "../../components/common/FooterMain";
import { useNavigate} from "react-router-dom";
import "../../components/css/register.css";

export default function Login() {

    const navigate = useNavigate();

    const[form,setForm] = useState({
        login: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
    };

    return(
        <div>
            <Navbar/>
                <div className="container form-wrapper pb-5">
                    <div className="form-center">
                        <div className="card shadow-lg p-4">
                            <h3 className="text-center mb-4">Logowanie</h3>
                            <form action="">
                                <div className="mb-3">
                                    <label className="form-label">Login </label>
                                    <input type="text"
                                    className="form-control"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Haslo</label>
                                    <input type="text" 
                                    className="form-control"/>
                                </div>

                                <button className="btn btn-primary w-100" type="submit">
                                Zaloguj Się
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            <FooterMain/>
        </div>
    )
}