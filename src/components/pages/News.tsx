import { Container,  Box } from '@mui/material'
import NewsCard from '../molecules/NewsCard'
import { Heading1 } from '../atoms/typography'

const News = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Heading1 titleEn={'News'} titleJa={'ニュース'}/>
        <Box sx={{mt:5}}>
          <NewsCard date={'2025/03/02'} title={'するとしばらくたってから、さっきの卓子の足もとから何やら奇妙な'} imageSrc={'https://picsum.photos/200'} imageAlt={''} isNews={false}/>
          <NewsCard date={'2025/03/02'} title={'するとしばらくたってから、さっきの卓子の足もとから何やら奇妙な'} imageSrc={'https://picsum.photos/200'} imageAlt={''} isNews={true}/>
          <NewsCard date={'2025/03/02'} title={'するとしばらくたってから、さっきの卓子の足もとから何やら奇妙な'} imageSrc={'https://picsum.photos/200'} imageAlt={''} isNews={false}/>
          <NewsCard date={'2025/03/02'} title={'するとしばらくたってから、さっきの卓子の足もとから何やら奇妙な'} imageSrc={'https://picsum.photos/200'} imageAlt={''} isNews={true}/>
        </Box>
      </Box>
    </Container>
  )
}

export default News 