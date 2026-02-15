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
  <div>
    <Navbar/>
    <div className="container mt-4">
      <h2>{offer.nazwa}</h2>

      {offer.images?.length > 0 && (
        <img
          src={offer.images[0]}
          alt={offer.nazwa}
          className="img-fluid mb-3"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      )}

      <p><b>Miasto:</b> {offer.miasto}</p>
      <p><b>Stawka:</b> {offer.stawka ?? "Brak danych"} zł</p>
      <p><b>Status:</b> {offer.status}</p>
      <p><b>Właściciel:</b> {offer.ownerLogin}</p>

      <hr />

      <h5>Opis</h5>
      <p>{offer.opis}</p>
    </div>
  <FooterMain/>
  </div>
  );
}