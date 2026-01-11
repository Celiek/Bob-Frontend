// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/common/Navbar.jsx";
// import FooterMain from "./components/common/FooterMain.jsx";
// import SearchBar from "./components/common/SearchBar.jsx";

// import Home from "./pages/pages/Home.jsx";
// import Lista from "./pages/pages/Lista.jsx";
// import Register from "./pages/pages/Register.jsx";

// const Layout = ({ children }) => (
//   <>
//     <Navbar />
//     {children}
//     <SearchBar />
//     <FooterMain />
//   </>
// );

// export default function App() {
//   return (
//     <Router>
//       <Routes>

//         <Route
//           path="/"
//           element={
//             <Layout>
//               <Home />
//             </Layout>
//           }
//         />

//         <Route
//           path="/lista"
//           element={
//             <Layout>
//               <Lista />
//             </Layout>
//           }
//         />

//         <Route
//           path="/register"
//           element={
//             <Layout>
//               <Register />
//             </Layout>
//           }
//         />

//       </Routes>
//     </Router>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/pages/Home.jsx";
import Lista from "./pages/pages/Lista.jsx";
import Register from "./pages/pages/Register.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
