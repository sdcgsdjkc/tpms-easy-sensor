
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
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
    <FadeIn delay={delay} direction={direction} className="h-full">
      <div className={cn(
        'bg-white p-6 rounded-lg shadow-soft transition-all duration-300 h-full',
        'hover:shadow-md hover:translate-y-[-2px]',
        className
      )}>
        <div className="flex flex-col h-full">
          <div className="mb-4 text-tpms-blue text-3xl">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default BenefitCard;
