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
      </div>
      {/* More Task items go here */}
    </div>
  );
};

export default TaskList;