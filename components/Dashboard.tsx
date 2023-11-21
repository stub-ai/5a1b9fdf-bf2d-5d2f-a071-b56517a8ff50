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
            <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full bg-steelblue" style={{ width: '50%' }}></div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 rounded-full bg-steelblue text-white flex items-center justify-center">
                1
              </div>
              <div className="ml-2">Level</div>
            </div>
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