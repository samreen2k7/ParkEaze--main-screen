import React, { useState, useEffect } from 'react';
import { useCounter } from '../hooks/useCounter';

interface ParkingLevelCardProps {
  level: number;
}

const ParkingLevelCard: React.FC<ParkingLevelCardProps> = ({ level }) => {
  const MAX_CAPACITY = 300;
  
  // Custom hook to manage counter state
  const { count, percentage } = useCounter(level);
  
  // Calculate available slots based on occupied slots
  const availableSlots = MAX_CAPACITY - count;

  return (
    <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1">
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-800">Level {level}</h2>
        
        <div className="mb-4">
          <h3 className="font-bold text-gray-700 mb-2">Occupied Slots</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-medium text-blue-600 transition-all duration-300 ease-in-out">
              {count}
            </span>
            <span className="ml-1 text-gray-500">/ {MAX_CAPACITY}</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-gray-700 mb-2">Available Slots</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-medium text-blue-600 transition-all duration-300 ease-in-out">
              {availableSlots}
            </span>
            <span className="ml-1 text-gray-500">/ {MAX_CAPACITY}</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(availableSlots / MAX_CAPACITY) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingLevelCard;