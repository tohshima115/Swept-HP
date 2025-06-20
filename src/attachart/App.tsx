import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Home from './pages/Home';
import Quiz from './pages/quiz';
import Result from './pages/result';
import AttachartHeader from './components/AttachartHeader';
import AttachartFooter from './components/AttachartFooter';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const originalTitle = document.title;
    const originalFavicon = document.querySelector("link[rel*='icon']")?.getAttribute('href') || '';
    
    // --- Set Meta Tags ---
    const metaInfo = {
      title: 'attachart | 愛着スタイル診断テスト',
      description: 'あなたの愛着スタイルを診断し、人間関係のパターンを理解するためのテストです。簡単な質問に答えて、自分のタイプを見つけましょう。',
      url: `${window.location.origin}/attachart`,
      imageUrl: `${window.location.origin}/assets/logoMark.svg`,
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

    // --- Set Favicon ---
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/assets/logoMark.svg';
    }

    // --- Cleanup ---
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AttachartHeader />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column',
            pt: '96px', // ヘッダーの高さ + 余白
            minHeight: 'calc(100vh - 80px)', // 画面の高さからヘッダーの高さを引く
          }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="quiz/:page" element={<Quiz />} />
            <Route path="result" element={<Result />} />
          </Routes>
        </Box>
        <AttachartFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App; 