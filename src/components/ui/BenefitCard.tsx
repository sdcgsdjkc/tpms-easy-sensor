
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  title, 
  description, 
  icon, 
  className,
  delay = 0,
  direction = 'up' 
}) => {
  return (
    <FadeIn delay={delay} direction={direction}>
      <div className={cn(
        'flex items-start p-4',
        className
      )}>
        <div className="mr-4 text-tpms-blue text-2xl mt-1 flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default BenefitCard;
