import React, { useState } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { Member } from '../../types/member';
import MemberCard from './MemberCard';
import MemberThumbnailNav from './MemberThumbnailNav';

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

export default MembersDisplay; 