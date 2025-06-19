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

function App() {
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