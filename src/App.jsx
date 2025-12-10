import './App.css'
import Notfound from './pages/not-found/not-found.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'
import RoomCard from './components/room-card/room-card.jsx'
import HeroSection from './components/hero-section/hero-section.jsx'

function App() {


  return (
    <>
      <Header />
      <Notfound/>
      <Footer />
    </>
  )
}

export default App
