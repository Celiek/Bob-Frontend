import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/searchbar.css"

const SearchBar = () => {
    return (
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner mx-auto">
                            <div class="carousel-item active">
                                <div class="d-flex justify-content-center gap-3 py-5">
                                    <a href="/strona1" class="btn btn-lg button-carousel-main">Wykończenia</a>  
                                    <a href="/strona2" class="btn btn-lg button-carousel-main">Hydraulika</a>
                                    <a href="/strona3" class="btn btn-lg button-carousel-main">Elektryka</a>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="d-flex justify-content-center gap-3 py-5">
                                    <a href="/raporty" class="btn btn-lg button-carousel-main">Glazura</a>
                                    <a href="/uzytkownicy" class="btn btn-lg button-carousel-main">Dach</a>
                                    <a href="/pomoc" class="btn btn-lg button-carousel-main">Klimatyzacja</a>
                                    <a href="/kontakt" class="btn btn-lg button-carousel-main">Stolarz</a>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="d-flex justify-content-center gap-3 py-5">
                                    
                                    <a href="/kontakt" class="btn btn-lg button-carousel-main">inne</a>
                                </div>
                            </div>

                        </div>

                        <button class="carousel-control-prev" type="button" id="button-prev"
                            data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" id="button-next"
                            data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>
                    <form>
                        <div class="mb-3 d-flex">
                            <input
                                type="search"
                                class="form-control"
                                id="searchInput"
                                aria-describedby="searchHelp"
                                placeholder="Wyszukaj"
                            />
                            <button type="submit" class="btn button-carousel-main ms-md-3">Szukaj</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );


};
export default SearchBar;
