import { Box } from '@mui/material';
import { Heading1 } from '../atoms/typography';
import Button from '../atoms/Button';
import NewsCard from '../molecules/NewsCard';
// import { newsItems } from '../../data/news';
import { useEffect } from 'react';
import useStore from '../../store/useStore';
import logoUrl from '../../assets/logoHorizontal169.svg?url';

interface HomeNewsSectionProps {
  navigate: (path: string) => void;
}

const HomeNewsSection = ({ navigate }: HomeNewsSectionProps) => {
  const newsList = useStore((state) => state.newsList.data);
  const fetchNewsList = useStore((state) => state.fetchNewsList);

  useEffect(() => {
    fetchNewsList();
  }, [fetchNewsList]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Heading1 titleEn={'News'} titleJa={'ニュース'} />
      <Box mb={5}>
        {newsList.slice(0, 3).map((item) => (
          <NewsCard
            key={item.id}
            date={new Date(item.publishedAt || item.createdAt).toLocaleDateString()}
            title={item.title}
            imageSrc={item.thumbnail?.url || logoUrl}
            imageAlt={item.title}
            isNews={item.category?.name === 'ニュース'}
            onClick={() => navigate(`/news/${item.id}`)}
          />
        ))}
      </Box>
      <Button color='primaryTonal' onClick={() => navigate('/news')}>
        詳しく見る
      </Button>
    </Box>
  );
};

export default HomeNewsSection; 