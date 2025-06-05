import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Ydelser from './pages/Ydelser'
import Kontakt from './pages/Kontakt'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isScrolled={isScrolled} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ydelser" element={<Ydelser />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
