import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/categorySlider.css"

const slides = [
  ["Wykończenia", "Hydraulika", "Elektryka"],
  ["Glazura", "Dach", "Klimatyzacja"],
  ["Stolarz","Inne"]
];

export default function CategorySlider() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="slider-wrapper">
      <button className="slider-btn left" onClick={prev}>‹</button>

      <div className="slider-window">
        <div className="slider-content">
          {slides[index].map((name) => (
            <a key={name} href="#" className="btn btn-lg button-carousel-main">
              {name}
            </a>
          ))}
        </div>
      </div>

      <button className="slider-btn right" onClick={next}>›</button>
    </div>
  );
}