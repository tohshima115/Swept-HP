import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Avatar,
  ButtonBase,
  SxProps,
  Theme,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TwitterIcon from '@mui/icons-material/Twitter'; // 例としてX (Twitter) アイコン
import { Member } from '../../types/member';
import { membersData } from '../../data/members';

// --- Atomic Design Components ---

// == Atoms ==

// Heading1 (作成済みと仮定)
const Heading1 = ({ children, sx }: { children: React.ReactNode, sx?: SxProps<Theme> }) => (
  <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', ...sx }}>
    {children}
  </Typography>
);

// Heading2 (作成済みと仮定)
const Heading2 = ({ children, sx }: { children: React.ReactNode, sx?: SxProps<Theme> }) => (
  <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1, ...sx }}>
    {children}
  </Typography>
);

// MemberImage Atom
interface MemberImageProps {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
}
const MemberImage: React.FC<MemberImageProps> = ({ src, alt, sx }) => (
  <Box
    sx={{
      width: '100%',
      paddingTop: '125%', // アスペクト比 4:5 を維持 (5/4 * 100%)
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 2, // 角丸
      ...sx,
    }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </Box>
);

// MemberTitle Atom
interface MemberTitleProps {
  title: string;
  sx?: SxProps<Theme>;
}
const MemberTitle: React.FC<MemberTitleProps> = ({ title, sx }) => (
  <Typography variant="body2" color="text.secondary" sx={sx}>
    {title}
  </Typography>
);

// MemberName Atom
interface MemberNameProps {
  name: string;
  nameEn: string;
  sx?: SxProps<Theme>;
}
const MemberName: React.FC<MemberNameProps> = ({ name, nameEn, sx }) => (
  <Box sx={sx}>
    <Typography variant="h5" component="p" sx={{ fontWeight: 'bold' }}>
      {name}
    </Typography>
    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
      {nameEn}
    </Typography>
  </Box>
);

// SocialLink Atom
interface SocialLinkProps {
  href?: string;
  icon: React.ReactElement;
  sx?: SxProps<Theme>;
}
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, sx }) => {
  if (!href) return null;
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
      sx={{ color: 'text.primary', ...sx }}
    >
      {icon}
    </IconButton>
  );
};

// MemberBioItem Atom
interface MemberBioItemProps {
  item: string;
  sx?: SxProps<Theme>;
}
const MemberBioItem: React.FC<MemberBioItemProps> = ({ item, sx }) => (
  <Typography variant="body2" component="p" sx={sx}>
    {item}
  </Typography>
);

// MemberThoughtText Atom
interface MemberThoughtTextProps {
  text: string;
  sx?: SxProps<Theme>;
}
const MemberThoughtText: React.FC<MemberThoughtTextProps> = ({ text, sx }) => (
  <Typography variant="body2" component="p" sx={sx}>
    {text}
  </Typography>
);

// MemberThumbnail Atom
interface MemberThumbnailProps {
  member: Member;
  isSelected: boolean;
  onClick: () => void;
  sx?: SxProps<Theme>;
}
const MemberThumbnail: React.FC<MemberThumbnailProps> = ({ member, isSelected, onClick, sx }) => (
  <ButtonBase onClick={onClick} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1, borderRadius: 1, opacity: isSelected ? 1 : 0.6, transition: 'opacity 0.2s', ...sx }}>
    <Avatar src={member.imageUrl} alt={member.name} sx={{ width: 48, height: 48, mb: 0.5 }} />
    <Typography variant="caption" sx={{ textAlign: 'center', lineHeight: 1.2 }}>{member.title}</Typography>
    <Typography variant="caption" sx={{ textAlign: 'center', lineHeight: 1.2, fontWeight: 'medium' }}>{member.name}</Typography>
  </ButtonBase>
);

// == Molecules ==

// MemberHeader Molecule
interface MemberHeaderProps {
  member: Member;
  sx?: SxProps<Theme>;
}
const MemberHeader: React.FC<MemberHeaderProps> = ({ member, sx }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, ...sx }}>
    <Box>
      <MemberTitle title={member.title} sx={{ mb: 0.5 }} />
      <MemberName name={member.name} nameEn={member.nameEn} />
    </Box>
    <SocialLink href={member.social.x} icon={<TwitterIcon />} />
  </Box>
);

// MemberBio Molecule
interface MemberBioProps {
  bio: string;
  sx?: SxProps<Theme>;
}
const MemberBio: React.FC<MemberBioProps> = ({ bio, sx }) => (
  <Box sx={sx}>
    <Heading2>経歴</Heading2>
    <MemberBioItem item={bio} sx={{ mb: 0.5 }} />
  </Box>
);

// MemberThoughts Molecule
interface MemberThoughtsProps {
  thoughts: string;
  sx?: SxProps<Theme>;
}
const MemberThoughts: React.FC<MemberThoughtsProps> = ({ thoughts, sx }) => (
  <Box sx={sx}>
    <Heading2>事業への想い</Heading2>
    <MemberThoughtText text={thoughts} />
  </Box>
);

// MemberNavigation Molecule
interface MemberNavigationProps {
    onPrev: () => void;
    onNext: () => void;
    sx?: SxProps<Theme>;
}
const MemberNavigation: React.FC<MemberNavigationProps> = ({ onPrev, onNext, sx }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', px: 1, pointerEvents: 'none', ...sx }}>
        <IconButton onClick={onPrev} sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)'}, pointerEvents: 'auto' }}>
            <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={onNext} sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)'}, pointerEvents: 'auto' }}>
            <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
    </Box>
);

// MemberThumbnailNav Molecule
interface MemberThumbnailNavProps {
    members: Member[];
    currentMemberId: number;
    onSelectMember: (id: number) => void;
    sx?: SxProps<Theme>;
}
const MemberThumbnailNav: React.FC<MemberThumbnailNavProps> = ({ members, currentMemberId, onSelectMember, sx }) => (
    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2, ...sx }}>
        {members.map((member) => (
            <MemberThumbnail
                key={member.id}
                member={member}
                isSelected={member.id === currentMemberId}
                onClick={() => onSelectMember(member.id)}
            />
        ))}
    </Stack>
);

// == Organisms ==

// MemberCard Organism
interface MemberCardProps {
  member: Member;
  onPrev: () => void;
  onNext: () => void;
  sx?: SxProps<Theme>;
}
const MemberCard: React.FC<MemberCardProps> = ({ member, onPrev, onNext, sx }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        p: 2,
        position: 'relative',
        ...sx
    }}>
      <Box sx={{ position: 'relative', mb: 2 }}>
        <MemberImage src={member.imageUrl} alt={member.name} />
        {!isMobile && <MemberNavigation onPrev={onPrev} onNext={onNext} />}
      </Box>
      <MemberHeader member={member} />
      <MemberBio bio={member.bio} sx={{ mb: 3 }}/>
      <MemberThoughts thoughts={member.thoughts} />
      {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <IconButton onClick={onPrev} sx={{ mx: 1 }}>
                  <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton onClick={onNext} sx={{ mx: 1 }}>
                  <ArrowForwardIosIcon />
              </IconButton>
          </Box>
      )}
    </Box>
  );
};

// MembersDisplay Organism
interface MembersDisplayProps {
    members: Member[];
    sx?: SxProps<Theme>;
}
const MembersDisplay: React.FC<MembersDisplayProps> = ({ members, sx }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? members.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === members.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSelectMember = (id: number) => {
        const newIndex = members.findIndex(m => m.id === id);
        if (newIndex !== -1) {
            setCurrentIndex(newIndex);
        }
    };

    const currentMember = members[currentIndex];

    if (!currentMember) return null;

    return (
        <Box sx={sx}>
            <MemberCard
                member={currentMember}
                onPrev={handlePrev}
                onNext={handleNext}
            />
            <MemberThumbnailNav
                members={members}
                currentMemberId={currentMember.id}
                onSelectMember={handleSelectMember}
            />
        </Box>
    );
};

// == Templates ==

// MemberPageTemplate Template
interface MemberPageTemplateProps {
  members: Member[];
  sx?: SxProps<Theme>;
}
const MemberPageTemplate: React.FC<MemberPageTemplateProps> = ({ members, sx }) => (
  <Container maxWidth="md" sx={{ py: 4, ...sx }}>
    <Heading1 sx={{ textAlign: 'center', mb: 4 }}>Member / メンバー</Heading1>
    <MembersDisplay members={members} />
  </Container>
);

// == Pages ==

// MemberPage Page
const MemberPage: React.FC = () => {
  return <MemberPageTemplate members={membersData} />;
};

export default MemberPage;
