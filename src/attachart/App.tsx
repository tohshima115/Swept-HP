import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from './theme';
import { useEffect } from 'react';
import Home from './pages/Home';
import Quiz from './pages/quiz';
import Result from './pages/result';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AttachartHeader from './components/AttachartHeader';
import AttachartFooter from './components/AttachartFooter';

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
  const location = useLocation();

  useEffect(() => {
    const originalTitle = document.title;
    const originalFavicon = document.querySelector("link[rel*='icon']")?.getAttribute('href') || '';
    
    const metaInfo = {
      title: 'attachart | 愛着スタイル診断テスト',
      description: 'あなたの愛着スタイルを診断し、人間関係のパターンを理解するためのテストです。簡単な質問に答えて、自分のタイプを見つけましょう。',
      url: `${window.location.origin}/attachart`,
      imageUrl: `${window.location.origin}/assets/logoMark-attachart.svg`,
    };

    document.title = metaInfo.title;
    
    const metaTags = [
      { name: 'description', content: metaInfo.description },
      { property: 'og:title', content: metaInfo.title },
      { property: 'og:description', content: metaInfo.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: metaInfo.url },
      { property: 'og:image', content: metaInfo.imageUrl },
      { name: 'twitter:card', content: 'summary' },
    ];

    const addedTags: Element[] = [];
    const originalTags: { element: Element; content: string | null }[] = [];

    metaTags.forEach(tag => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
      let element = document.querySelector(selector);

      if (element) {
        originalTags.push({ element, content: element.getAttribute('content') });
        element.setAttribute('content', tag.content);
      } else {
        element = document.createElement('meta');
        if (tag.name) {
          element.setAttribute('name', tag.name);
        } else if (tag.property) {
          element.setAttribute('property', tag.property);
        }
        element.setAttribute('content', tag.content);
        document.head.appendChild(element);
        addedTags.push(element);
      }
    });

    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/assets/logoMark-attachart.svg';
    }

    return () => {
      document.title = originalTitle;
      if (favicon) {
        favicon.href = originalFavicon;
      }

      addedTags.forEach(tag => document.head.removeChild(tag));
      originalTags.forEach(tag => {
        if (tag.content) {
          tag.element.setAttribute('content', tag.content);
        } else {
          tag.element.removeAttribute('content');
        }
      });
    };
  }, []);

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
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'var(--color-surface)' }}>
        <AttachartHeader />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '900px',
            mx: 'auto',
            px: 2,
            pt: '104px', // Header height (64px) + margin (32px)
            pb: 4,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%' }}
            >
              <Routes>
                <Route index element={<Home />} />
                <Route path="quiz/:page" element={<Quiz />} />
                <Route path="result" element={<Result />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Box>
        <AttachartFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App; 