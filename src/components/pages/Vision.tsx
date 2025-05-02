import { Box, Container, Grid, Typography } from '@mui/material';
import { Heading1, Heading2 } from '@/components/atoms/typography';
import { Image } from '@/components/atoms/Image';

const Vision = () => {

  return (
      <Container maxWidth="md" sx={{ pt: 3, pb:5 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Heading1 titleEn={'Vision'} titleJa={'理念'}/>
          {/* xs用 */}
          <Typography
            variant="h3"
            sx={{
              display: { xs: 'block', sm: 'none' },
              color: 'text.primary',
              my: 3,
            }}
          >
            自分の人生を
            自分のものに
          </Typography>
          {/* sm以上用 */}
          <Typography
            variant="h2"
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: 'text.primary',
              my: 5,
            }}
          >
            自分の人生を自分のものに
          </Typography>
        </Box>
        <Box>

          <Grid container sx={{mx:1}} spacing={2}>
            <Grid size={{xs:12,sm:4}}>
              <Image src={'/src/assets/vision.avif'} alt={'Vision Image'} aspectRatio='16:9' margin='0'/>
            </Grid>
            <Grid size={{xs:12,sm:8}}>
              <Typography >
                愛着形成で孤独や生きづらさを感じる方の「こころの安全基地」を築きます。<br/>
                あなたはあなたのままで、否定されない。精神的な支えとなり、あなた自身の人生を取り戻すお手伝いを目指します。
              </Typography>
            </Grid>
          </Grid>

          <Heading2 title={'Mission'}/>

          <Box sx={{ textAlign: 'center' }}>
            {/* xs用 */}
            <Typography
              variant="h5"
              sx={{
                display: { xs: 'block', sm: 'none' },
                color: 'text.primary',
                my: 3,
              }}
            >
              最初の「こころの安全基地」となること
            </Typography>
            {/* sm以上用 */}
            <Typography
              variant="h3"
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: 'text.primary',
                my: 3,
              }}
            >
              最初の「こころの安全基地」となること
            </Typography>
          </Box>

          <Grid container sx={{mx:1}} spacing={2}>
            <Grid size={{xs:12,sm:4}}>
              <Image src={'/src/assets/mission.avif'} alt={'Mission Image'} aspectRatio='16:9' margin='0'/>
            </Grid>
            <Grid size={{xs:12,sm:8}}>
              <Typography >
                わたしたちは、幼少期に形成された不安定な愛着スタイルからくる生きづらさという課題に対し、利用者が安全な場所で根源的な自信を身に着け、過去を、そして未来を再構築していくプロセスそのものを支援します。<br/>
              </Typography>
              <Typography my={1}>
              専門的な知見と温かな関わりを通して、人生への希望を取り戻すための最初の「こころの安全基地」となること。<br/>
              
              </Typography>
              <Typography my={1}>
              それが私たちの使命です。
              </Typography>
            </Grid>
          </Grid>

        </Box>
      </Container>
  );
};

export default Vision;