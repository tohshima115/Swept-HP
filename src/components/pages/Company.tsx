import { Container, Typography, Box, Grid } from '@mui/material'
import { Heading1, Heading2 } from '../atoms/typography'
import ContactDetails from '../organisms/ContactDetails'

const Company = () => {
  const companyInfo = {
    name: 'ataccha（アタッチャ）',
    establishment: '2024年1月',
    ceo: '丹羽勝麻',
    location: '東京都小平市',
    business: 'メンタルヘルスサービス提供',
    employees: '3名',
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 3 }}>
        <Heading1 titleEn={'Info'} titleJa={'運営者情報'}/>
        <Grid container columnSpacing={3}>
          <Grid size={{ xs:12, md:6 }}>
              <Heading2 title={'基本情報'}/>
              <Box component="dl" ml={1} sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    チーム名
                  </Typography>
                  <Typography component="dd">{companyInfo.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    結成
                  </Typography>
                  <Typography component="dd">{companyInfo.establishment}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    代表
                  </Typography>
                  <Typography component="dd">{companyInfo.ceo}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    所在地
                  </Typography>
                  <Typography component="dd">{companyInfo.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    事業内容
                  </Typography>
                  <Typography component="dd">{companyInfo.business}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    メンバー数
                  </Typography>
                  <Typography component="dd">{companyInfo.employees}</Typography>
                </Box>
              </Box>
          </Grid>
          <Grid size={{ xs:12, md:6 }}>
          <ContactDetails />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Company 