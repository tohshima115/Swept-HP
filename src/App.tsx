import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { Routes, Route, useLocation } from 'react-router-dom'
import { theme } from './styles/theme'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer'
import News from './components/pages/News'
import NewsDetail from './components/pages/NewsDetail'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Team from './components/pages/Team'
import Vision from './components/pages/Vision'
import Service from './components/pages/Service'
import Company from './components/pages/Company'
import { AnimatePresence } from 'framer-motion'
import useScrollToTop from './hooks/useScrollToTop'
import AttachartApp from './attachart/App'

function App() {
  const location = useLocation()
  useScrollToTop(location)
  const isAttachart = location.pathname.startsWith('/attachart')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isAttachart && <Navbar />}
      <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/service" element={<Service />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/attachart/*" element={<AttachartApp />} />
          </Routes>
        </AnimatePresence>
      </Box>
      {!isAttachart && <Footer />}
    </ThemeProvider>
  )
}

export default App