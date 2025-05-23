
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, className }) => {
  return (
    <div className={cn('skill-badge', className)}>
      {name}
    </div>
  );
};

export default SkillBadge;
