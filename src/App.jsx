import "./App.css";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/not-found/not-found.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import About from "./pages/about-us/about-us.jsx";
import Rooms from "./pages/rooms/rooms.jsx";
import Gallery from "./pages/gallery/gallery.jsx";
import Menu from "./pages/restaurant/restaurant.jsx";
import ContactUs from "./pages/contact/contact.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/restaurant" element={<Menu />} />
                <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
