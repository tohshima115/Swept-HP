import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Chip } from '@mui/material';
import useStore from '../../store/useStore';
import logoUrl from '../../assets/logoHorizontal169.svg?url';
import Button from '../atoms/Button';
import parse, { domToReact, HTMLReactParserOptions, Element, DOMNode } from 'html-react-parser';
import { Heading2, Heading3 } from '../atoms/typography';
import { Image } from '../atoms/Image';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const fetchNewsById = useStore((state) => state.fetchNewsById);
  const news = useStore((state) => (id ? state.newsDetails[id]?.data : null));
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchNewsById(id);
    }
  }, [id, fetchNewsById]);

  if (!news) {
    return <Container maxWidth="md" sx={{ mt: 16, mb: 5 }}><p>読み込み中...</p></Container>;
  }

  const publishedDate = new Date(news.publishedAt || news.createdAt).toLocaleDateString();

  // html-react-parserのオプション
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === 'h2') {
          return <Heading2 title={domToReact(domNode.children as DOMNode[], options) as string} />;
        }
        if (domNode.name === 'h3') {
          return <Heading3 title={domToReact(domNode.children as DOMNode[], options) as string} />;
        }
        if (domNode.name === 'p') {
          return <Typography >{domToReact(domNode.children as DOMNode[], options)}</Typography>;
        }
        if (domNode.name === 'img') {
          const { src, alt } = domNode.attribs;
          if (src) {
            return <Image src={src} alt={alt || ''} />;
          }
          return null;
        }
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 16, mb: 5 }}>
      <Box sx={{ mb: 5 }}>
        <Image src={news.thumbnail?.url || logoUrl} alt={news.title} aspectRatio="16:9" />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, mb: 2 }}>
          <Typography variant="body1" color="textSecondary">
            {publishedDate}
          </Typography>
          {news.category && <Chip label={news.category.name} />}
        </Box>
        <Typography variant="h2" component="h2" gutterBottom>
          {news.title}
        </Typography>
        <Box>
          {parse(news.content, options)}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Button sizeType="medium" color="primary" variant="contained" onClick={() => navigate('/news')}>
          ニュース一覧に戻る
        </Button>
      </Box>
    </Container>
  );
};

export default NewsDetail; 