import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/common/SearchBar";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchOffers();
  }, [searchParams]);

  const fetchOffers = async () => {
    const params = new URLSearchParams(searchParams);
    const res = await fetch(
      `http://localhost:8080/api/offers/search?${params.toString()}`
    );
    const data = await res.json();
    setOffers(data.content ?? data);
  };

  return (
    <div>
      <SearchBar />

      <ul>
        {offers.map(o => (
          <li key={o.id}>
            {o.nazwa} – {o.miasto} – {o.stawka} zł
          </li>
        ))}
      </ul>
    </div>
  );
}
