import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags?: string[];
}

const ExperienceCard = ({
  role,
  company,
  duration,
  description,
  tags
}: ExperienceCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <CardHeader>
        <CardTitle className="text-lg">{role}</CardTitle>
        <p className="text-sm text-gray-500">
          {company} · {duration}
        </p>
      </CardHeader>

      <CardContent>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <ul className="list-disc pl-5 space-y-1 text-sm">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
