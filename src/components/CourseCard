import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CourseCardProps {
  title: string;
  provider: string;
  certificateLink?: string;
}

const CourseCard = ({ title, provider, certificateLink }: CourseCardProps) => {
  return (
    <Card className="w-full sm:w-[300px] shadow-md hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{provider}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Add skills or tags here if needed */}
      </CardContent>
      <CardFooter>
        {certificateLink && (
          <Button variant="link" size="sm" asChild>
            <a href={certificateLink} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              View Certificate
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};



export default CourseCard;
