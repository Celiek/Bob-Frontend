import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/searchbar.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [miasto, setMiasto] = useState("");
  const [range, setRange] = useState("30");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      miasto,
      minStawka: 0,
      maxStawka: 1000,
      page: 0,
      size: 25
    });

    navigate(`/listaOfert?${params.toString()}`);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <form onSubmit={handleSearch}>
            <div className="mb-3 d-flex">
              <div className="search-box">
                <input
                  type="text"
                  className="search-part"
                  placeholder="Szukaj fachowca"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />

                <input
                  type="text"
                  className="search-part"
                  placeholder="Lokalizacja"
                  value={miasto}
                  onChange={e => setMiasto(e.target.value)}
                />

                <select
                  className="search-part search-select"
                  value={range}
                  onChange={e => setRange(e.target.value)}
                >
                  <option value="10">+10 km</option>
                  <option value="30">+30 km</option>
                  <option value="50">+50 km</option>
                  <option value="9999">Cała Polska</option>
                </select>
              </div>

              <button type="submit" className="btn button-carousel-main ms-md-3">
                Szukaj
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
