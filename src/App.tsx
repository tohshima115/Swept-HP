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
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import useScrollToTop from './hooks/useScrollToTop'
import { useRef } from 'react';

function isMemberToMemberDetail(prev: string, next: string) {
  const memberRoot = /^\/member$/;
  const memberDetail = /^\/member\/[^/]+$/;
  return (
    (memberRoot.test(prev) && memberDetail.test(next)) ||
    (memberDetail.test(prev) && memberRoot.test(next)) ||
    (memberDetail.test(prev) && memberDetail.test(next)) ||
    memberDetail.test(prev)
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  useScrollToTop(location);
  const nodeRef = useRef(null);
  const prevPath = useRef(location.pathname);
  const prev = prevPath.current;
  const next = location.pathname;
  const isMemberTransition = isMemberToMemberDetail(prev, next);
  prevPath.current = next;

  if (isMemberTransition) {
    // アニメーションなし
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 8,
        }}
      >
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
    );
  }

  // 通常はアニメーションあり
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <Box
          ref={nodeRef}
          component="main"
          sx={{
            flexGrow: 1,
            pt: 8,
          }}
        >
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
      </CSSTransition>
    </SwitchTransition>
  );
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