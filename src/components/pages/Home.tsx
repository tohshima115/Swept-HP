import { Box, Container, Typography, SxProps, Theme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import { newsItems } from '../../data/news'
import { Heading1 } from '../atoms/typography'
import { Image } from '../atoms/Image'
import NewsCard from '../molecules/NewsCard'

interface HomeProps {
  sx?: SxProps<Theme>
}

const Home: React.FC<HomeProps> = ({ sx }) => {
  const navigate = useNavigate()

  return (
    <Box sx={sx}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: 'calc(100dvh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#F5F5F5',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 4,
            }}
          >
            <Box>
            <Typography variant="h1" mb={1}
              sx={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              自分の人生を
            </Typography>
            <Typography variant="h1"
              sx={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
            自分のものに
            </Typography>
            </Box>
            <Typography
              variant="h4" fontWeight={400} color='text.secondary'
            >
              ありのままを受け入れて、<br/>
              あなたの人生を歩む第一歩に
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* News Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="sm">
          <Box my={13}>
            <Heading1 titleEn={'Vision'} titleJa={'理念'}/>
            <Typography variant='h3' mt={3} mb={5} color='primary.main' sx={{display:'flex', justifyContent:'center'}}>
              自分の人生を
              自分のものに
            </Typography>
            <Button
                onClick={() => navigate('/vision')}
              >
                詳しく見る
            </Button>
          </Box>

          <Box my={13}>
            <Heading1 titleEn={'Service'} titleJa={'事業内容'}/>
            <Box p={3} mt={3} sx={theme => ({
              position: 'relative',
              borderRadius: '24px',
              zIndex: 0,
              overflow: 'hidden',
              background: theme.palette.background.default,
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: '24px',
                padding: '4px',
                background: 'var(--gradient-primary)',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                pointerEvents: 'none',
                zIndex: 1,
              },
            })}>
              <Image src={'/src/assets/logo_yoko.svg'} alt={''} />
            </Box>
            <Typography variant='h3' color='primary.main' mt={2}>
              ataccha（アタッチャ）
            </Typography>
            <Typography variant='h6' color='text.secondary' mt={1}>
              あなたの最初の「こころの安全基地」となるAI
            </Typography>
            <Typography mb={5} mt={2}>
            あなたが過去の経験と向き合い、自分自身や他者とのより良い関係性を築くための信頼できる最初の相談相手となり、人生をともに歩んでいきます。
            </Typography>
            <Button
                onClick={() => navigate('/service')}
              >
                詳しく見る
            </Button>
          </Box>

          <Box my={13}>
            <Heading1 titleEn={'Member'} titleJa={'メンバー'}/>
            <Image src={'/assets/member.avif'} alt={''} aspectRatio='16:9'/>

            <Typography variant='h3'>
              ataccha
            </Typography>
            <Button
                onClick={() => navigate('/member')}
              >
                詳しく見る
            </Button>
          </Box>
          <Box my={5}>
            <Heading1 titleEn={'News'} titleJa={'ニュース'}/>
            <Box>
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
            <Button
                onClick={() => navigate('/news')}
              >
                詳しく見る
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 