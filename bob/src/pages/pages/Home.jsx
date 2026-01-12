import Navbar from "../../components/common/Navbar.jsx";
import FooterMain from "../../components/common/FooterMain.jsx";
import Searchbar from "../../components/common/SearchBar.jsx";
import CategorySlider from "../../components/common/CategorySlider.jsx";

export default function Home() {
    return(
        <>
        <Navbar/>
        <FooterMain/>
        <Searchbar/>
        <CategorySlider/>
        </>
    );
}