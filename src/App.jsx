import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notfound from './pages/not-found/not-found.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
