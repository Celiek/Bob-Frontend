import {useEffect,useState} from "react";


export default function Dashboard() {

    const [offers, setOffers] = useState([]);

    useEffect(() =>{
        fetchOffers();
    },[]);

    const token = localStorage.getItem("jwt");
    const fetchOffers = async () => {
        const res = await fetch("http://localhost:8080/api/uzytkownicy/me/alloffers",{
            method: "GET",
            headers:
            {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }  
            
        });
        const data = await res.json();
        setOffers(data);
    };

    return(
        <>

            <h3>Lista ofert</h3>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Miasto</th>
                    <th>Stawka</th>
                </tr>
            </thead>
            <tbody>
                {offers.map((offer) => (
                    <tr key={offer.id}>
                        <td>{offer.id}</td>
                        <td>{offer.nazwa}</td>
                        <td>{offer.miasto}</td>
                        <td>{offer.stawka ?? "Brak"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}