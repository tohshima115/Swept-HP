import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme'
import Navbar from './components/Navbar'
import News from './pages/News.tsx'
import Contact from './pages/Contact.tsx'
import Home from './pages/Home.tsx'
import Team from './pages/Team.tsx'
import Vision from './pages/Vision.tsx'
import Service from './pages/Service.tsx'
import Company from './pages/Company.tsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/vision" element={<Vision/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
