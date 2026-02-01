import { useState } from "react";

export default function AddOferta() {

  const [nazwa, setNazwa] = useState("");
  const [opis, setOpis] = useState("");
  const [cena, setCena] = useState("");
  const [miasto, setMiasto] = useState("");
  const [zdjecie, setZdjecie] = useState(null);
  const [result, setResult] = useState(null);
  const [krotkiOpis, setKrotkiOpis] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt");

    const formData = new FormData();

    const status = "Aktywna";

    const offerDto = {
      nazwa,
      opis,
      krotkiOpis,
      cena: Number(cena),
      miasto,
      status
    };

    formData.append(
      "offer",
      new Blob([JSON.stringify(offerDto)], {
        type: "application/json"
      })
    );

    formData.append("image", zdjecie);

    const res = await fetch("http://localhost:8080/api/offers", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      },
      body: formData
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <h2>Dodaj ofertę</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Tytuł"
          value={nazwa}
          onChange={e => setNazwa(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Opis"
          value={opis}
          onChange={e => setOpis(e.target.value)}
        />

        <textarea 
            placeholder="Krótki Opis"
            value={krotkiOpis}
            onChange={e => setKrotkiOpis(e.target.value)}
        />

        <br />

        <input
          type="number"
          placeholder="Cena"
          value={cena}
          onChange={e => setCena(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Miasto"
          value={miasto}
          onChange={e => setMiasto(e.target.value)}
        />

        <br />

        <input
          type="file"
          accept="image/*"
          onChange={e => setZdjecie(e.target.files[0])}
        />

        <br /><br />

        <button type="submit">Wyślij ofertę</button>
      </form>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
