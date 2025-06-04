import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
