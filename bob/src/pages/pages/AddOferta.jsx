import { useState } from "react";
import FooterMain from "../../components/common/FooterMain.jsx";
import Navbar from "../../components/common/Navbar.jsx";

export default function AddOferta() {

  const [nazwa, setNazwa] = useState("");
  const [opis, setOpis] = useState("");
  const [cena, setCena] = useState("");
  const [miasto, setMiasto] = useState("");
  const [zdjecie, setZdjecie] = useState([]); // 👈 jako tablica
  const [result, setResult] = useState(null);
  const [krotkiOpis, setKrotkiOpis] = useState("");
  const [kategoria, setKategoria] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("jwt");

      const formData = new FormData();

      const status = "Aktywna";

      const offerDto = {
        nazwa,
        opis,
        krotkiOpis,
        stawka: Number(cena),
        miasto,
        status,
        kategoria
      };

      // 👇 JSON jako blob
      formData.append(
        "offer",
        new Blob([JSON.stringify(offerDto)], {
          type: "application/json"
        })
      );

      // 👇 wiele zdjęć
      if (zdjecie && zdjecie.length > 0) {
        zdjecie.forEach(file => {
          formData.append("image", file);
        });
      }

      // 🔍 DEBUG
      console.log("=== FORMDATA ===");
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const res = await fetch("http://localhost:8080/api/offers", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token
          // ❗ NIE dodawaj Content-Type
        },
        body: formData
      });

      if (!res.ok) {
        throw new Error("Błąd requesta: " + res.status);
      }

      const data = await res.json();
      setResult(data);

    } catch (err) {
      console.error(err);
      setResult({ error: err.message });
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="card shadow p-4" style={{ maxWidth: 500, margin: "0 auto" }}>
          
          <h2 className="mb-4 text-center">Dodaj ofertę</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Tytuł</label>
              <input
                className="form-control"
                placeholder="Tytuł"
                value={nazwa}
                onChange={e => setNazwa(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Opis</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Opis"
                value={opis}
                onChange={e => setOpis(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Krótki opis</label>
              <textarea 
                className="form-control"
                rows="2"
                placeholder="Krótki opis"
                value={krotkiOpis}
                onChange={e => setKrotkiOpis(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Cena</label>
              <input
                type="number"
                className="form-control"
                placeholder="Cena"
                value={cena}
                onChange={e => setCena(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Miasto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Miasto"
                value={miasto}
                onChange={e => setMiasto(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Zdjęcia</label>
              <input
                type="file"
                className="form-control"
                multiple
                accept="image/*"
                onChange={e => setZdjecie(Array.from(e.target.files))} // ✅ FIX
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Kategoria</label>
              <select
                className="form-select"
                value={kategoria}
                onChange={e => setKategoria(e.target.value)}
              >
                <option value="">Wybierz kategorię</option>
                <option value="Budowlanka">Budowlanka</option>
                <option value="Remonty">Remonty</option>
                <option value="Wykończenia">Wykończenia</option>
                <option value="Hydraulika">Hydraulika</option>
                <option value="Elektryka">Elektryka</option>
                <option value="Klimatyzacja">Klimatyzacja</option>
                <option value="Glazura">Glazura</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Wyślij ofertę
            </button>
          </form>

          {result && (
            <div className="alert alert-success mt-4">
              <pre className="mb-0">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}

        </div>
      </div>

      <FooterMain />
    </>
  );
}