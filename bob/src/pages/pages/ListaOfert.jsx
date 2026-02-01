import React, {useEffect,useState} from "react";
import { apiFetch } from "../../utils/api";

export default function ListaOfert() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    console.log("ListaOfert render");
  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const token = localStorage.getItem("jwt");

      const response = await fetch("http://localhost:8080/api/offers");

      if (!response.ok) {
        throw new Error("Błąd pobierania ofert");
      }

      const data = await response.json();
      setOffers(data);

    } catch (err) {
      setError("Nie udało się pobrać ofert " + err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>⏳ Ładowanie ofert...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h3>Lista ofert</h3>

      <table className="table table-bordered table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nazwa</th>
            <th>Opis</th>
            <th>Krótki opis</th>
            <th>Stawka</th>
            <th>Miasto</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {offers.map(offer => (
            <tr key={offer.id}>
              <td>{offer.id}</td>
              <td>{offer.nazwa}</td>
              <td>{offer.opis}</td>
              <td>{offer.krotkiOpis}</td>
              <td>{offer.stawka} zł</td>
              <td>{offer.miasto}</td>
              <td>
                <span className={
                  offer.status === "AKTYWNA"
                    ? "badge bg-success"
                    : "badge bg-secondary"
                }>
                  {offer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}