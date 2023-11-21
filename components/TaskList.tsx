import React from 'react';

const TaskList: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-steelblue font-bold text-lg text-#333333">Title</h2>
        <p className="text-gray-600 mt-2">Description</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">Due Date</span>
          <span className="text-steelblue">Difficulty Level</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-steelblue" />
            <button className="w-6 h-6 text-steelblue">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="w-6 h-6 text-steelblue">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2m-2 0v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full bg-steelblue" style={{ width: '50%' }}></div>
            </div>
            <div className="ml-2">Difficulty</div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-4">
          <button className="w-6 h-6 text-steelblue mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="w-6 h-6 text-steelblue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2m-2 0v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
            </svg>
          </button>
        </div>
      </div>
      {/* More Task items go here */}
    </div>
  );
};

export default TaskList;