import { Box, Container, Grid, Typography } from '@mui/material';
import { Heading1, Heading2, Heading3 } from '@/components/atoms/typography';
import { Image } from '@/components/atoms/Image';
import ExpandableContents from '@/components/molecules/ExpandableContents';

const Vision = () => {

  return (
      <Container maxWidth="md" sx={{ pt: 3, pb:5 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Heading1 titleEn={'Vision'} titleJa={'理念'}/>
          {/* xs用 */}
          <Typography
            variant="h2"
            sx={{
              display: { xs: 'block', sm: 'none' },
              color: 'text.primary',
              my: 5,
            }}
          >
            自分の人生を<br/>
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
        <Box >
          <Grid container sx={{mx:1}} spacing={2}>
            <Grid size={{xs:12,sm:6}}>
            <Image src={'https://picsum.photos/200'} alt={''} aspectRatio='16:9' margin='0'/>
            </Grid>
            <Grid size={{xs:12,sm:6}}>
              <Typography >
                愛着形成で孤独や生きづらさを感じる方の「こころの安全基地」を築きます。
                あなたはあなたのままで、否定されない。精神的な支えとなり、あなた自身の人生を取り戻すお手伝いを目指します。
              </Typography>
            </Grid>
          </Grid>

          <Heading2 title={'Mission'}/>
          <Box sx={{mx:1}}>
          <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
          <ExpandableContents >
            <Typography >
              これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
              残りの部分は隠されています。グラデーション効果により、
              文章が下に続いていることが視覚的に示唆されます。
            </Typography>

            <Heading3 title={'セクションの見出し'}/>
            <Typography >
              ここにセクション1の詳細な内容が入ります。
              MUIのTypographyコンポーネントを使って段落を表現しています。
              カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
            </Typography>

            <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

            <Typography >
              画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
              隠されていた部分がスムーズなアニメーションと共に表示されます。
            </Typography>

            <Typography >
              さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
              適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
              再度クリックすれば、元の折りたたまれた状態に戻ります。
            </Typography>
          </ExpandableContents>
          </Box>

          <Heading2 title={'Value'}/>
          <Box sx={{mx:1}}>
          <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
          <ExpandableContents >
            <Typography >
              これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
              残りの部分は隠されています。グラデーション効果により、
              文章が下に続いていることが視覚的に示唆されます。
            </Typography>

            <Heading3 title={'セクションの見出し'}/>

            <Typography >
              ここにセクション1の詳細な内容が入ります。
              MUIのTypographyコンポーネントを使って段落を表現しています。
              カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
            </Typography>

            <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

            <Typography >
              画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
              隠されていた部分がスムーズなアニメーションと共に表示されます。
            </Typography>

            <Typography >
              さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
              適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
              再度クリックすれば、元の折りたたまれた状態に戻ります。
            </Typography>
          </ExpandableContents>
          </Box>
          
        </Box>
      </Container>
  );
};

export default Vision;