import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import FooterMain from "../../components/common/FooterMain";
import Navbar from "../../components/common/Navbar";

export default function OfertaDetails(){
    const {id} = useParams();
    const [offer, setOffer] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        fetchOffer();
    },[id]);

    const fetchOffer = async () => {
        const res = await fetch(`http://localhost:8080/api/offers/${id}`);

        if (!res.ok){
          throw new Error("Nie znaleziono oferty");
        }

        const data = await  res.json();

        setOffer(data);
        setLoading(false);
    };

    if(loading) return <p>Ładowanie oferty...</p>
    if(!offer) return <p>Nie znaleziono oferty</p>

    return (
      <>
      <Navbar/>
  <div className="container mt-4">
  <div className="row">
    
    {/* ===== LEWA KOLUMNA – SLIDER ===== */}
    <div className="col-md-8">
      {offer.images?.length > 0 && (
        <div
          id="offerCarousel"
          className="carousel slide mb-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {offer.images.map((img, index) => (
              <div
                key={img}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Zdjęcie ${index + 1}`}
                  style={{
                    maxHeight: "450px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#offerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#offerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      )}
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="card-body">

          <h3 className="mb-3">{offer.nazwa}</h3>

          <h4 className="text-success">
            {offer.stawka ? `${offer.stawka} zł` : "Cena do ustalenia"}
          </h4>

          <p className="mb-2">
            📍 <b>Miasto:</b> {offer.miasto}
          </p>

          <p className="mb-2">
            👤 <b>Właściciel:</b> {offer.ownerLogin}
          </p>

          <p className="mb-3">
            <b>Status:</b>{" "}
            <span className="badge bg-success">
              {offer.status}
            </span>
          </p>

          <button className="btn btn-primary w-100">
            Skontaktuj się
          </button>

        </div>
      </div>
    </div>

  </div>

  <div className="mt-4 border-1" >
    <h5>Opis</h5>
    <p>{offer.opis}</p>
  </div>

</div>
  <FooterMain/>
</>
  );
}