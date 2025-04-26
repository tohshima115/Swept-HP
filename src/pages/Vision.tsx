import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const Vision = () => {
  const [expanded, setExpanded] = useState({
    vision: false,
    mission: false,
    value: false,
    experience: false,
  });

  const toggleExpand = (section: keyof typeof expanded) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" sx={{ 
            fontFamily: 'Caveat, cursive',
            fontSize: '64px',
            color: '#334380',
            mb: 2
          }}>
            Vision / ビジョン
          </Typography>
          <Typography variant="h2" sx={{ 
            fontFamily: 'Yorutegaki Bold, cursive',
            fontSize: '42.666px',
            color: '#1F2337',
            lineHeight: 1.4
          }}>
            安心できるつながりの中で<br />
            自分らしく輝ける社会へ
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  ビジョン
                </Typography>
                <Typography variant="body1" paragraph>
                  人と人をつなぎ、安全で快適な空間を創造する
                </Typography>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  onClick={() => toggleExpand('vision')}
                >
                  詳細を見る
                </Button>
                {expanded.vision && (
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    私たちは、人々が安心して暮らせる空間を提供することで、
                    より良い社会の実現を目指しています。
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  ミッション
                </Typography>
                <Typography variant="body1" paragraph>
                  安全で快適な空間を提供する
                </Typography>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  onClick={() => toggleExpand('mission')}
                >
                  詳細を見る
                </Button>
                {expanded.mission && (
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    私たちは、最新の技術と専門知識を活用して、
                    お客様のニーズに応えるサービスを提供します。
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  バリュー
                </Typography>
                <Typography variant="body1" paragraph>
                  誠実さ、専門性、革新性
                </Typography>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  onClick={() => toggleExpand('value')}
                >
                  詳細を見る
                </Button>
                {expanded.value && (
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    私たちは、誠実な対応と専門的な知識、
                    そして常に進化し続ける姿勢を大切にしています。
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  経験
                </Typography>
                <Typography variant="body1" paragraph>
                  豊富な実績と専門知識
                </Typography>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  onClick={() => toggleExpand('experience')}
                >
                  詳細を見る
                </Button>
                {expanded.experience && (
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    長年にわたる経験と専門知識を活かし、
                    お客様に最適なソリューションを提供します。
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Vision;