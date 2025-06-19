import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { theme } from './styles/theme'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer.tsx'
import News from './components/pages/News.tsx'
import NewsDetail from './components/pages/NewsDetail.tsx'
import Contact from './components/pages/Contact.tsx'
import Home from './components/pages/Home.tsx'
import Team from './components/pages/Team.tsx'
import Vision from './components/pages/Vision.tsx'
import Service from './components/pages/Service.tsx'
import Company from './components/pages/Company.tsx'
import { AnimatePresence, motion } from 'framer-motion'
import useScrollToTop from './hooks/useScrollToTop'
import AttachartApp from './attachart/App'

function AnimatedRoutes() {
  const location = useLocation()
  useScrollToTop(location)
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.3 }}
        style={{ flexGrow: 1, position: 'relative' }}
      >
        <Box component="main" sx={{ flexGrow: 1,  bgcolor:'background.default' }}>
          <Routes location={location}>
            <Route path="/" element={<Home/>} />
            <Route path="/member" element={<Team/>} />
            <Route path="/vision" element={<Vision/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/information" element={<Company/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/news/:slug" element={<NewsDetail/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/member/:slug" element={<Team/>} />
            <Route path="/attachart/*" element={<AttachartApp />} />
          </Routes>
        </Box>
      </motion.div>
    </AnimatePresence>
  )
}

function AppWithLocationBasedLayout() {
  const location = useLocation();
  const isAttachart = location.pathname.startsWith('/attachart');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {!isAttachart && <Navbar />}
      <AnimatedRoutes />
      {!isAttachart && <Footer />}
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppWithLocationBasedLayout />
      </Router>
    </ThemeProvider>
  )
}

export default App