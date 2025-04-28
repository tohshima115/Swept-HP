import { Container, Typography, Box, Grid, Paper } from '@mui/material'

const Company = () => {
  const companyInfo = {
    name: '株式会社Swept',
    establishment: '2024年1月',
    capital: '1,000万円',
    location: '東京都渋谷区',
    business: 'ITソリューション開発・提供',
    employees: '10名',
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          会社概要
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs:12, md:6 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                基本情報
              </Typography>
              <Box component="dl" sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    会社名
                  </Typography>
                  <Typography component="dd">{companyInfo.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    設立
                  </Typography>
                  <Typography component="dd">{companyInfo.establishment}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography component="dt" sx={{ width: '120px', fontWeight: 'bold' }}>
                    資本金
                  </Typography>
                  <Typography component="dd">{companyInfo.capital}</Typography>
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
                    従業員数
                  </Typography>
                  <Typography component="dd">{companyInfo.employees}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs:12, md:6 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                アクセス
              </Typography>
              <Typography variant="body1" paragraph>
                東京都渋谷区の最寄り駅から徒歩5分
              </Typography>
              <Typography variant="body1" paragraph>
                ※詳細なアクセス情報はお問い合わせください
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Company 