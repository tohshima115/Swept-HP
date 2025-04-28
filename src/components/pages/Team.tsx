import React from 'react';
import { membersData } from '../../data/members';
import MemberPageTemplate from '../templates/MemberPageTemplate';

const Team: React.FC = () => {
  return <MemberPageTemplate members={membersData} />;
};

export default Team;
