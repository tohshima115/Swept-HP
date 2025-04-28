import { IconButton, SxProps, Theme } from '@mui/material';
import { ReactElement } from 'react';

export interface SocialLinkProps {
  href?: string;
  icon: ReactElement;
  sx?: SxProps<Theme>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, sx }) => {
  if (!href) return null;
  
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      size="medium"
      sx={{ 
        color: 'text.primary',
        '&:hover': {
          color: 'primary.main',
        },
        ...sx 
      }}
    >
      {icon}
    </IconButton>
  );
};

export default SocialLink; 