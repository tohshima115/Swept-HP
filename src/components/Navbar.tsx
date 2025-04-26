import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          会社名
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            ホーム
          </Button>
          <Button color="inherit" component={Link} to="/team">
            チーム
          </Button>
          <Button color="inherit" component={Link} to="/vision">
            ビジョン
          </Button>
          <Button color="inherit" component={Link} to="/service">
            サービス
          </Button>
          <Button color="inherit" component={Link} to="/company">
            会社情報
          </Button>
          <Button color="inherit" component={Link} to="/news">
            お知らせ
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            お問い合わせ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar 