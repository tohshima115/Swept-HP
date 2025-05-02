import { Box, Container, Grid } from '@mui/material';
import { Heading1, Heading2 } from '@/components/atoms/typography';
import { Image } from '@/components/atoms/Image';
import ResponsiveTypography from '../atoms/ResponsiveTypography'
import TextBlock from '../molecules/TextBlock';

const Vision = () => {

  return (
      <Container maxWidth="md" sx={{ pt: 3, pb:5 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Heading1 titleEn={'Vision'} titleJa={'理念'}/>
          <ResponsiveTypography
            variantXs="h3"
            variantSm="h2"
            color="text.primary"
            sxXs={{ my: 3 }}
            sxSm={{ my: 5 }}
          >
            自分の人生を
            自分のものに
          </ResponsiveTypography>
        </Box>
        <Box>

          <Grid container sx={{mx:1}} spacing={2}>
            <Grid size={{xs:12,sm:4}}>
              <Image src={'/assets/vision.avif'} alt={'Vision Image'} aspectRatio='16:9' margin='0'/>
            </Grid>
            <Grid size={{xs:12,sm:8}}>
              <TextBlock texts={rinenTexts} />
            </Grid>
          </Grid>

          <Heading2 title={'Mission'}/>

          <Box sx={{ textAlign: 'center' }}>
            <ResponsiveTypography
              variantXs="h5"
              variantSm="h3"
              color="text.primary"
              sxXs={{ my: 3 }}
              sxSm={{ my: 3 }}
            >
              最初の「こころの安全基地」となること
            </ResponsiveTypography>
          </Box>

          <Grid container sx={{mx:1}} spacing={2}>
            <Grid size={{xs:12,sm:4}}>
              <Image src={'/assets/mission.avif'} alt={'Mission Image'} aspectRatio='16:9' margin='0'/>
            </Grid>
            <Grid size={{xs:12,sm:8}}>
              <TextBlock texts={visionTexts} />
            </Grid>
          </Grid>

        </Box>
      </Container>
  );
};

// テキストブロックを配列化し、可読性向上のためのコンポーネントを作成
const visionTexts = [
  'わたしたちは、幼少期に形成された不安定な愛着スタイルからくる生きづらさという課題に対し、利用者が安全な場所で根源的な自信を身に着け、過去を、そして未来を再構築していくプロセスそのものを支援します。',
  '専門的な知見と温かな関わりを通して、人生への希望を取り戻すための最初の「こころの安全基地」となること。',
  'それが私たちの使命です。',
];

const rinenTexts = [
  '愛着形成で孤独や生きづらさを感じる方の「こころの安全基地」を築きます。',
  'あなたはあなたのままで、否定されない。',
  '精神的な支えとなり、あなた自身の人生を取り戻すお手伝いを目指します。',
];

export default Vision;