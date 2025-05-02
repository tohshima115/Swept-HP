import { useState, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: number | string;
  margin?: string;
  aspectRatio?: string; // '16:9' | '4:3' | '1:1' などの形式
}

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  verticalAlign: 'middle',
  flexShrink: 0,
});

export const Image = ({
  src,
  alt,
  width = '100%',
  height = '100%',
  objectFit = 'cover',
  borderRadius = '24px',
  margin = '24px 0',
  aspectRatio
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
    };
  }, [src]);

  const aspectRatioValue = aspectRatio
    ? (() => {
        const [w, h] = aspectRatio.split(':').map(Number);
        if (!w || !h) return undefined;
        return w / h;
      })()
    : undefined;

  return (
    <ImageContainer
      sx={{
        width,
        ...(aspectRatioValue
          ? {
              aspectRatio: `${aspectRatioValue}`,
              height: 'auto',
              minHeight: 0,
              maxHeight: '100%',
            }
          : { height }),
        borderRadius,
        margin,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      ) : error ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey.200',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          画像の読み込みに失敗しました
        </Box>
      ) : (
        <StyledImage
          src={src}
          alt={alt}
          style={{ 
            objectFit,
            position: aspectRatio ? 'absolute' : 'relative',
            top: 0,
            left: 0
          }}
          loading="lazy"
        />
      )}
    </ImageContainer>
  );
}; 