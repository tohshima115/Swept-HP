import { Box, Typography, SxProps, Theme } from '@mui/material';

interface CompanyProps {
  sx?: SxProps<Theme>;
}

const Company: React.FC<CompanyProps> = ({ sx }) => {
  const companyInfo = {
    name: '株式会社Swept',
    establishment: '2024年1月',
    capital: '1,000万円',
    location: '東京都渋谷区',
    business: 'ITソリューション開発・提供',
    employees: '10名',
  }

  return (
    <Box sx={sx}>
      <Typography variant="h4" component="h1" gutterBottom>
        会社概要
      </Typography>
      <Typography variant="body1">
        ここに会社概要の内容が入ります。
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          会社概要
        </Typography>
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
    </Box>
  );
};

export default Company; 