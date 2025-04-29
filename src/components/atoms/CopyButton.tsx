import { IconButton, SxProps, Theme } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

interface CopyButtonProps {
  textToCopy: string;
  sx?: SxProps<Theme>;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, sx }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <IconButton
      onClick={handleCopy}
      size="small"
      sx={{ color: copied ? 'success.main' : 'inherit', ...sx }}
    >
      <ContentCopyIcon fontSize="small" />
    </IconButton>
  );
};

export default CopyButton; 