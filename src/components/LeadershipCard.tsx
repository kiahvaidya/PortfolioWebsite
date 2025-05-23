
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface LeadershipCardProps {
  emoji: string;
  title: string;
  organization: string;
  description: string;
  className?: string;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({
  emoji,
  title,
  organization,
  description,
  className,
}) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader>
        <div className="text-3xl mb-2">{emoji}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default LeadershipCard;
