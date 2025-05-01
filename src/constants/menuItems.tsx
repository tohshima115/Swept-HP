import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { SvgIconProps } from '@mui/material';

export interface MenuItem {
  to: string;
  label: string;
  labelJa: string;
  icon: React.ReactElement<SvgIconProps>;
}

export const menuItems: MenuItem[] = [
  { 
    to: '/', 
    label: 'Top', 
    labelJa: 'トップページ',
    icon: <HomeIcon />
  },
  { 
    to: '/vision', 
    label: 'Vision', 
    labelJa: 'ビジョン',
    icon: <InfoIcon />
  },
  { 
    to: '/service', 
    label: 'Service', 
    labelJa: '事業内容',
    icon: <BusinessIcon />
  },
  { 
    to: '/member', 
    label: 'Member', 
    labelJa: 'メンバー',
    icon: <GroupIcon />
  },
  { 
    to: '/news', 
    label: 'News', 
    labelJa: 'ニュース',
    icon: <ArticleIcon />
  },
  { 
    to: '/company', 
    label: 'Company', 
    labelJa: '会社案内',
    icon: <BusinessCenterIcon />
  },
  { 
    to: '/contact', 
    label: 'Contact', 
    labelJa: 'お問い合わせ',
    icon: <ContactMailIcon />
  },
]; 