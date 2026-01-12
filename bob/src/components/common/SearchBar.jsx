import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/searchbar.css"


const SearchBar = () => {
    return (
        <div class="container mt-6">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6">
                    <form>
                        <div class="mb-3 d-flex">
                            <div className = "search-box">
                                <input type="text"
                                className="search-part"
                                placeholder="Szukaj fachowca"
                                />

                                <input type="text"
                                className="search-part"
                                placeholder="Lokalizacja"
                                />

                                <select className="search-part search-select"> 
                                    <option>+30 km</option>
                                    <option>+10 km</option>
                                    <option>+50 km</option>
                                    <option>Cała Polska</option>
                                </select>
                            </div>
                            <button type="submit" class="btn button-carousel-main ms-md-3">Szukaj</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
