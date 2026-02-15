import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import FooterMain from "../../components/common/FooterMain";
import SearchComponent from "../../components/common/SearchComponent";
import { useNavigate } from "react-router-dom";
import "../../components/css/offersLayout.css";

export default function ListaOfert() {
  const [offers, setOffers] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchOffers();
  }, [searchParams]);

  const fetchOffers = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        page: searchParams.get("page") ?? 0,
        size: searchParams.get("size") ?? 25,
        miasto: searchParams.get("miasto") ?? "",
        minStawka: searchParams.get("minStawka") ?? "",
        maxStawka: searchParams.get("maxStawka") ?? "",
        sortBy: searchParams.get("sortBy") ?? "createdAt",
        direction: searchParams.get("direction") ?? "desc"
      });

      const res = await fetch(
        `http://localhost:8080/api/offers/search?${params.toString()}`
      );

      if (!res.ok) {
        throw new Error("Błąd pobierania ofert");
      }

      const data = await res.json();

      setOffers(Array.isArray(data.content) ? data.content : []);
      setPageInfo(data);
    } catch (err) {
      console.error(err);
      setOffers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="offers-layout">
        <aside className="filters">
          <SearchComponent />
        </aside>

        <main className="results">
          <h3>Lista ofert</h3>

          {loading && <p>⏳ Ładowanie...</p>}

          {!loading && offers.length === 0 && (
            <p>Brak wyników</p>
          )}

          {!loading && offers.length > 0 && (
            <ul className="list-group">
            {offers.map(o => {
              const imageUrl =
                Array.isArray(o.images) && o.images.length > 0
                  ? o.images[0]              
                  : "/no-image.png";       

              return (
                <li
                  key={o.id}
                  style={{ cursor: "pointer" }}
                  className="list-group-item d-flex gap-3"
                  onClick={() => navigate(`/oferta/${o.id}`)}
                  >

                  <img
                    src={imageUrl}
                    alt={o.nazwa}
                    style={{
                      width: "120px",
                      height: "90px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />

                  <div>
                    <b>{o.nazwa}</b>
                    <div>{o.miasto}</div>
                    <div>{o.stawka ?? "—"} zł</div>
                  </div>
                </li>
              );
            })}
          </ul>
          )}

          {pageInfo && pageInfo.totalPages > 1 && (
            <div className="mt-3 text-muted">
              Strona {pageInfo.number + 1} z {pageInfo.totalPages}
            </div>
          )}
        </main>
      </div>

      <FooterMain />
    </>
  );
}
