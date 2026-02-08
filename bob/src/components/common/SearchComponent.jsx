import React from "react";
import "../css/searchComponentCss.css";

const SearchComponent = () => {
  return (
    <div>
      <h5>Filtry</h5>

      <div className="mb-3">
        <label>Kategoria</label>
        <select className="form-select">
          <option>Wykonczenia</option>
          <option>Hydraulika</option>
          <option>Elektryka</option>
          <option>Glazura</option>
          <option>Dach</option>
          <option>Klimatyzacja</option>
          <option>Stolarka</option>
          <option>Inne</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Miasto</label>
        <input className="form-control" />
      </div>

      <div className="mb-3">
        <label>Dostępność</label>
        <select className="form-select">
          <option>Dziś</option>
          <option>W tym tygodniu</option>
        </select>
      </div>
    </div>
  );
};
export default SearchComponent;