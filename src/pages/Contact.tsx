import { Container, Typography, Box, Grid, Paper, TextField, Button } from '@mui/material'

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          お問い合わせ
        </Typography>
        <Grid container spacing={4}>
        <Grid size={{ xs:12, md:6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                お問い合わせフォーム
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                <Grid size={{ xs:12, md:6 }}>
                    <TextField
                      required
                      fullWidth
                      label="お名前"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs:12, md:6 }}>
                    <TextField
                      required
                      fullWidth
                      label="メールアドレス"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs:12, md:6 }}>
                    <TextField
                      required
                      fullWidth
                      label="件名"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs:12, md:6 }}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="お問い合わせ内容"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs:12, md:6 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      送信
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs:12, md:6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                SNSリンク
              </Typography>
              <Typography variant="body1" paragraph>
                ここにSNSリンクが入ります。
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, mt: 2 }}>
              <Typography variant="h4" gutterBottom>
                プライバシーポリシー
              </Typography>
              <Typography variant="body1" paragraph>
                ここにプライバシーポリシーが入ります。
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Contact 