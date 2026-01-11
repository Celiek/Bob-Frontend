import React, { useEffect, useState } from "react";
import Footer from "../components/common/FooterMain";

const Lista = () => {
  const [uzytkownicy, setUzytkownicy] = useState([]);
  const [error, setError] = useState(null);

  // Funkcja pobierająca dane z backendu
  const pobierzDaneZBackendu = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/uzytkownicy/wildcard", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Błąd: ${response.status}`);
      }

      const data = await response.json();
      setUzytkownicy(data);
    } catch (err) {
      console.error("Błąd podczas pobierania danych:", err);
      setError("Nie udało się pobrać danych z backendu.");
    }
  };

  // Pobieranie danych przy załadowaniu komponentu
  useEffect(() => {
    pobierzDaneZBackendu();
  }, []);

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h2>Lista użytkowników</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "left",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th>Login</th>
            <th>Hasło</th>
            <th>Email</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Wiek</th>
            <th>Status</th>
            <th>Zdjęcie</th>
            <th>Opis</th>
          </tr>
        </thead>
        <tbody>
          {uzytkownicy.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ textAlign: "center" }}>
                Brak użytkowników
              </td>
            </tr>
          ) : (
            uzytkownicy.map((uzytkownik, index) => (
              <tr key={index}>
                <td>{uzytkownik.login}</td>
                <td>{uzytkownik.haslo}</td>
                <td>{uzytkownik.email}</td>
                <td>{uzytkownik.imie}</td>
                <td>{uzytkownik.nazwisko}</td>
                <td>{uzytkownik.wiek}</td>
                <td>{uzytkownik.status}</td>
                <td>
                  <img
                    src={
                      uzytkownik.zdjecie
                        ? `data:image/jpeg;base64,${uzytkownik.zdjecie}`
                        : "https://via.placeholder.com/100"
                    }
                    alt="Zdjęcie"
                    style={{ width: "80px", borderRadius: "8px" }}
                  />
                </td>
                <td>{uzytkownik.opis}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  );
};

export default Lista;
