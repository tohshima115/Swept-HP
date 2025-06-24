import Button from '@/components/atoms/Button';
import { Box, Typography } from '@mui/material';
import { sendGAEvent } from '@/lib/ga';

interface ReferenceBookCardProps {
  title: string;
  url: string;
}

const ReferenceBookCard = ({ title, url }: ReferenceBookCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
      onClick={() => sendGAEvent('click_amazon', { label: title })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          p: 2,
          mt: 2,
          gap: 2,
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <Typography
          variant="h6"
          component="p"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          amzn.to
        </Typography>
        <Button
        color='primaryTonal'
        >
          Amazon.co.jpで見る
        </Button>
      </Box>
    </a>
  );
};

export default ReferenceBookCard; 