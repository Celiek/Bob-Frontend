import React,{useEffect,useState} from "react";

const Lista = () => {

    const[users,setUsers]=useState([]);

   useEffect(()=>{
    async function pobierzUzytkownikow(){
        try{
            const response=await fetch("http://localhost:8080/api/uzytkownicy/wildcard");
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setUsers(data);
            } 
        } catch (error) {
                console.error("Błąd podczas pobierania użytkowników:", error);
            }
    }
    pobierzUzytkownikow();
},[]);

     return (
    <div className="container mt-5">
      <h2>Lista użytkowników</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>login</th>
            <th>hasło</th>
            <th>email</th>
            <th>imię</th>
            <th>nazwisko</th>
            <th>wiek</th>
            <th>status</th>
            <th>opis</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.login}</td>
                <td>{u.haslo}</td>
                <td>{u.email}</td>
                <td>{u.imie}</td>
                <td>{u.nazwisko}</td>
                <td>{u.wiek}</td>
                <td>{u.status}</td>
                <td>{u.opis}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">Brak użytkowników</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;