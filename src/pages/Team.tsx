import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material'

const Team = () => {
  const members = [
    {
      name: '丹羽 勝麻',
      role: '代表',
      image: '/images/niwa.jpg',
      career: '経歴テキスト',
      background: '背景テキスト',
      vision: '事業への想いテキスト',
      sns: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
    {
      name: '住岡 真穂',
      role: 'メンバー',
      image: '/images/sumioka.jpg',
      career: '経歴テキスト',
      background: '背景テキスト',
      vision: '事業への想いテキスト',
      sns: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
    {
      name: '豊島 昇悟',
      role: 'メンバー',
      image: '/images/toshima.jpg',
      career: '経歴テキスト',
      background: '背景テキスト',
      vision: '事業への想いテキスト',
      sns: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          チームメンバー
        </Typography>
        <Grid container spacing={4}>
          {members.map((member) => (
            <Grid key={member.name} size={{xs:12, md:4}}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.career}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.background}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.vision}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Team 