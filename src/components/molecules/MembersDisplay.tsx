import React, { useState, useEffect } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { Member } from '../../types/member';
import MemberCard from './MemberCard';
import MemberThumbnailNav from './MemberThumbnailNav';
import { useParams, useNavigate } from 'react-router-dom';

interface MembersDisplayProps {
  members: Member[];
  sx?: SxProps<Theme>;
}

const MembersDisplay: React.FC<MembersDisplayProps> = ({ members, sx }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

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
    navigate(`/member/${members[newIndex].slug}`);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % members.length;
    setCurrentIndex(newIndex);
    navigate(`/member/${members[newIndex].slug}`);
  };

  const handleSelectMember = (id: number) => {
    const member = members.find(m => m.id === id);
    if (member) {
      const newIndex = members.findIndex(m => m.id === id);
      setCurrentIndex(newIndex);
      navigate(`/member/${member.slug}`);
    }
  };

  const handleSelectIndex = (index: number) => {
    setCurrentIndex(index);
    navigate(`/member/${members[index].slug}`);
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