import Navbar from "../../components/common/Navbar.jsx";
import FooterMain from "../../components/common/FooterMain.jsx";
import Searchbar from "../../components/common/SearchBar.jsx";
import CategorySlider from "../../components/common/CategorySlider.jsx";

import "../../components/css/mainPage.css"

export default function Home() {
    return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-content">
        <Searchbar />
        <CategorySlider />
      </main>

      <FooterMain />
    </div>
  );
}