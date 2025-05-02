import { FC } from 'react';
import { Typography } from '@mui/material';

interface TextBlockProps {
  texts: string[];
  my?: number | string;
}

const TextBlock: FC<TextBlockProps> = ({ texts, my = 1 }) => (
  <>
    {texts.map((text, i) => (
      <Typography my={my} key={i}>
        {text}
      </Typography>
    ))}
  </>
);

export default TextBlock; 