import Navbar from "../../components/common/Navbar";
import FooterMain from "../../components/common/FooterMain";
import { useEffect,useState } from "react";

export default function Profile() {
    const[user, setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(""); 
    const[form,setForm] = useState({
        login: "",
        imie: "",
        nazwisko: "",
        email: "",
    });

    useEffect(()=> {
        fetchMe();
    },[]);

    const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("nowe Dane" + form);
    
    };

    const fetchMe = async () => {
    try {
      const token = localStorage.getItem("jwt");

      const res = await fetch("http://localhost:8080/api/uzytkownicy/me", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      if (!res.ok) {
        throw new Error("Brak autoryzacji");
      }

      const data = await res.json();
      setUser(data);
      console.log(data);
    } catch (err) {
      setError("Nie udało się pobrać danych użytkownika");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Ładowanie danych...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="card shadow-sm">

      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Dane użytkownika</h5>
      </div>

      <div className="card-body">

        <form onSubmit={handleSubmit}>

          <table className="table table-bordered">

            <tbody>

              <tr>
                <th>Login</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="login"
                    value={form.login}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <th>Imię</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="imie"
                    value={form.imie}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <th>Nazwisko</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="nazwisko"
                    value={form.nazwisko}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <th>Email</th>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <th>Rola</th>
                <td>
                  <span className="badge bg-secondary">
                    {user.rola}
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

          <button className="btn btn-primary">
            Zapisz zmiany
          </button>

        </form>

      </div>
    </div>
  );
}