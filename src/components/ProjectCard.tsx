
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {githubLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {demoLink && (
          <Button size="sm" asChild>
            <a href={demoLink} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
