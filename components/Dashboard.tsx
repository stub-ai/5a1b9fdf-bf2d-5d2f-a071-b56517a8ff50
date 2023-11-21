import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gray-200 text-steelblue">
      <div className="flex h-full">
        <div className="w-1/3 overflow-y-auto">
          {/* Task List goes here */}
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex-1">
            {/* expDisplay and lvlDisplay go here */}
          </div>
          <div className="flex flex-col items-end space-y-4 pr-4">
            {/* addBtn and storeBtn go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;