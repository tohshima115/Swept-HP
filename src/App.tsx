import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer.tsx'
import News from './components/pages/News.tsx'
import Contact from './components/pages/Contact.tsx'
import Home from './components/pages/Home.tsx'
import Team from './components/pages/Team.tsx'
import Vision from './components/pages/Vision.tsx'
import Service from './components/pages/Service.tsx'
import Company from './components/pages/Company.tsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              pt: 8, // ヘッダーの高さ分のパディング
            }}
          >
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/vision" element={<Vision/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/company" element={<Company/>} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
