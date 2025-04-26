import { Container, Typography, Box, Grid, Paper } from '@mui/material'

const News = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          お知らせ・ノート
        </Typography>
        <Grid container spacing={4}>
        <Grid size={{ xs:12, md:6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                お知らせ
              </Typography>
              <Typography variant="body1" paragraph>
                ここにお知らせの内容が入ります。
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs:12, md:6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                ノート
              </Typography>
              <Typography variant="body1" paragraph>
                ここにノートの内容が入ります。
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default News 