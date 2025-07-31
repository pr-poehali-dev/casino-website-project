import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface AnimatedJackpotProps {
  targetAmount: number;
  currency?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AnimatedJackpot = ({ 
  targetAmount, 
  currency = '₽', 
  className = '',
  size = 'md'
}: AnimatedJackpotProps) => {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  useEffect(() => {
    setIsAnimating(true);
    const duration = 2000; // 2 секунды
    const steps = 60;
    const increment = targetAmount / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      
      if (step >= steps) {
        setCurrentAmount(targetAmount);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        setCurrentAmount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetAmount]);

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <Icon 
        name="Coins" 
        className={`text-gold ${isAnimating ? 'animate-spin' : 'animate-pulse-gold'}`}
      />
      <span 
        className={`
          font-bold text-gold font-['Montserrat'] 
          ${sizeClasses[size]}
          ${isAnimating ? 'animate-pulse' : 'animate-pulse-gold'}
          drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]
        `}
      >
        {formatNumber(currentAmount)}{currency}
      </span>
      <Icon 
        name="Sparkles" 
        className={`text-gold ${isAnimating ? 'animate-bounce' : 'animate-float'}`}
      />
    </div>
  );
};

export default AnimatedJackpot;