import { Link } from '@mui/material';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}
const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link href={href} underline="none" color="inherit" >
    {children}
  </Link>
);

export default FooterLink;
