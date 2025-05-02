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
import { useRef, useLayoutEffect } from 'react'

function usePrevious<T>(value: T) {
  const ref = useRef<T>(value)
  useLayoutEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

function isMemberPath(path: string) {
  return /^\/member(\/[^/]+)?$/.test(path)
}

function AnimatedRoutes() {
  const location = useLocation()
  useScrollToTop(location)

  const prevPathname = usePrevious(location.pathname)
  const isMemberTransition = isMemberPath(prevPathname) && isMemberPath(location.pathname)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={isMemberTransition ? undefined : { opacity: 0, y: 16 }}
        animate={isMemberTransition ? undefined : { opacity: 1, y: 0 }}
        exit={isMemberTransition ? undefined : { opacity: 0, y: -16 }}
        transition={{ duration: 0.3 }}
        style={{ flexGrow: 1, minHeight: '100vh', position: 'relative' }}
      >
        <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
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
          </Routes>
        </Box>
      </motion.div>
    </AnimatePresence>
  )
}

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
          <AnimatedRoutes />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App