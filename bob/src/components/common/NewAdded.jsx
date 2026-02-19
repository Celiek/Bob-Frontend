import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/newAdded.css";

export default function NewAdded() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLatest();
  }, []);

  const fetchLatest = async () => {
    const res = await fetch("http://localhost:8080/api/offers/latest");
    const data = await res.json();

    setOffers(data.content ?? []);
    setLoading(false);
  };

  if (loading) return <p>Ładowanie ofert...</p>;

  return (
    <div className="container mt-4 customTop">
      <h3 className="mb-4">Najnowsze oferty</h3>

      <div className="row">
        {offers.map(o => (
          <div key={o.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/oferta/${o.id}`)}
            >
              <img
                src={
                  o.images?.length > 0
                    ? o.images[0]
                    : "https://via.placeholder.com/400x250?text=Brak+zdjęcia"
                }
                className="card-img-top"
                alt={o.nazwa}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{o.nazwa}</h5>

                <p className="card-text text-muted mb-1">
                  📍 {o.miasto}
                </p>

                <p className="card-text fw-bold">
                  💰 {o.stawka ?? "Brak danych"} zł
                </p>
              </div>


              <div className="card-footer bg-white border-0">
                <span className="badge bg-success">{o.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}