import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notfound from './pages/not-found/not-found.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'
import About from './pages/about-us/about-us.jsx'
import Rooms from './pages/rooms/rooms.jsx'
import Gallery from './pages/gallery/gallery.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
