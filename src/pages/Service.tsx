import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material'

const Service = () => {
  const services = [
    {
      name: 'サービス1',
      description: 'サービス1の説明文',
      image: '/images/service1.jpg',
      features: ['特徴1', '特徴2', '特徴3'],
    },
    {
      name: 'サービス2',
      description: 'サービス2の説明文',
      image: '/images/service2.jpg',
      features: ['特徴1', '特徴2', '特徴3'],
    },
    {
      name: 'サービス3',
      description: 'サービス3の説明文',
      image: '/images/service3.jpg',
      features: ['特徴1', '特徴2', '特徴3'],
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          サービス一覧
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid key={service.name} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.name}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {service.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    主な特徴
                  </Typography>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <Typography variant="body1">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Service 