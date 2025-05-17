import React from 'react';
import ParkingLevelCard from './ParkingLevelCard';

const Dashboard: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center">
      <ParkingLevelCard level={1} />
      <ParkingLevelCard level={2} />
      <ParkingLevelCard level={3} />
    </div>
  );
};

export default Dashboard;