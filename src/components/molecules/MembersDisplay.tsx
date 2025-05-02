import React, { useState, useEffect } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { Member } from '../../types/member';
import MemberCard from './MemberCard';
import MemberThumbnailNav from './MemberThumbnailNav';
import { useNavigate, useLocation } from 'react-router-dom';

interface MembersDisplayProps {
  members: Member[];
  sx?: SxProps<Theme>;
}

const MembersDisplay: React.FC<MembersDisplayProps> = ({ members, sx }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // hashからslugを取得（例: #niwa-katsuma）
  const slug = location.hash ? location.hash.replace(/^#/, '') : undefined;

  useEffect(() => {
    if (slug) {
      const index = members.findIndex(member => member.slug === slug);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [slug, members]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + members.length) % members.length;
    setCurrentIndex(newIndex);
    navigate(`#${members[newIndex].slug}`);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % members.length;
    setCurrentIndex(newIndex);
    navigate(`#${members[newIndex].slug}`);
  };

  const handleSelectMember = (id: number) => {
    const member = members.find(m => m.id === id);
    if (member) {
      const newIndex = members.findIndex(m => m.id === id);
      setCurrentIndex(newIndex);
      navigate(`#${member.slug}`);
    }
  };

  const handleSelectIndex = (index: number) => {
    setCurrentIndex(index);
    navigate(`#${members[index].slug}`);
  };

  const currentMember = members[currentIndex];

  if (!currentMember) return null;

  return (
    <Box sx={sx}>
      <MemberCard
        member={currentMember}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        onSelectIndex={handleSelectIndex}
      />
      <MemberThumbnailNav
        members={members}
        currentMemberId={currentMember.id}
        onSelectMember={handleSelectMember}
      />
    </Box>
  );
};

export default MembersDisplay; 