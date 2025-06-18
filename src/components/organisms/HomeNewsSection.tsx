import {  Box } from '@mui/material';
import { Heading1 } from '../atoms/typography';
import Button from '../atoms/Button';
import NewsCard from '../molecules/NewsCard';
import { newsItems } from '../../data/news';

interface HomeNewsSectionProps {
  navigate: (path: string) => void;
}

const HomeNewsSection = ({ navigate }: HomeNewsSectionProps) => (
      <Box  sx={{display:'flex',flexDirection:'column'}}>
        <Heading1 titleEn={'News'} titleJa={'ニュース'}/>
        <Box mb={5}>
          {newsItems.map((news) => (
            <NewsCard
              key={news.slug}
              date={news.date}
              title={news.title}
              imageSrc={news.imageUrl}
              imageAlt={news.title}
              isNews={news.tag === 'ニュース'}
              onClick={() => navigate(`/news/${news.slug}`)}
            />
          ))}
        </Box>
        <Button color='primaryTonal' onClick={() => navigate('/news')}>
          詳しく見る
        </Button>
  </Box>
);

export default HomeNewsSection; 