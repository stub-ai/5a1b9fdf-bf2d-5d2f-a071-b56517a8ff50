import React from 'react';

const Dashboard: React.FC = () => {
  const openStoreDialog = () => {
    // Implement store dialog opening logic here
  };

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
            <button className="w-12 h-12 rounded-full bg-steelblue text-white flex items-center justify-center" onClick={openStoreDialog}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#32CD32" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-steelblue text-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA500" viewBox="0 0 24 24" stroke="#FFA500" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M9 6v14l-7-7m7 7v-14m7 14l-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;