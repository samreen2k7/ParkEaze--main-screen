import { useState, useEffect } from 'react';

export const useCounter = (level: number) => {
  const [count, setCount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const MAX_CAPACITY = 300;
  
  useEffect(() => {
    // Set initial random values based on level
    const getInitialCount = () => {
      if (level === 1) {
        return 85; // Start higher for first level
      } else if (level === 2) {
        return 65;
      } else {
        return 45;
      }
    };
    
    setCount(getInitialCount());
    
    const interval = setInterval(() => {
      setCount(prevCount => {
        let newCount;
        
        if (prevCount < 200) {
          // Keep increasing until 200
          newCount = prevCount + Math.floor(Math.random() * 5) + 1;
          if (newCount >= 200) {
            setIsIncreasing(false);
          }
        } else {
          // Fluctuate between 180 and 220
          const change = Math.floor(Math.random() * 10) - (isIncreasing ? -3 : 3);
          newCount = prevCount + change;
          
          if (newCount > 220) {
            setIsIncreasing(false);
          } else if (newCount < 180) {
            setIsIncreasing(true);
          }
        }
        
        // Calculate and set the percentage
        const newPercentage = (newCount / MAX_CAPACITY) * 100;
        setPercentage(newPercentage);
        
        return newCount;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, [level, isIncreasing]);
  
  return { count, percentage };
};