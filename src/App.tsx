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
import PageTransition from './components/templates/PageTransition'
import { useEffect } from 'react'

// Google Analytics gtag型定義
declare global {
  interface Window {
    gtag?: {
      (command: 'js', config: string | Date): void;
      (command: 'config' | 'event', targetId: string, params?: Record<string, unknown>): void;
    };
  }
}

function App() {
  const location = useLocation()
  useScrollToTop(location)
  const isAttachart = location.pathname.startsWith('/attachart')

  // Google Analyticsページビュー送信
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isAttachart && <Navbar />}
      <Box component="main" sx={{ flexGrow: 1, position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<PageTransition><Home /></PageTransition>} />
              <Route path="/vision" element={<PageTransition><Vision /></PageTransition>} />
              <Route path="/service" element={<PageTransition><Service /></PageTransition>} />
              <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
              <Route path="/news" element={<PageTransition><News /></PageTransition>} />
              <Route path="/news/:id" element={<PageTransition><NewsDetail /></PageTransition>} />
              <Route path="/company" element={<PageTransition><Company /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/attachart/*" element={<AttachartApp />} />
            </Routes>
          </AnimatePresence>
        </Box>
        {!isAttachart && <Footer />}
      </Box>
    </ThemeProvider>
  )
}

export default App