
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  price, 
  className,
  delay = 0 
}) => {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className={cn(
        'glass-card p-6 rounded-lg transition-all duration-300 h-full',
        'hover:shadow-lg hover:translate-y-[-2px]',
        className
      )}>
        <div className="flex flex-col h-full">
          <div className="mb-4 text-tpms-blue text-3xl">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {price && (
            <div className="mb-3 font-bold text-tpms-blue-dark">{price}</div>
          )}
          <p className="text-gray-600 flex-grow">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default ServiceCard;
