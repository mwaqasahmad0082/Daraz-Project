import React from "react";


const NotFound = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-2xl text-gray-600 mb-8">
          Click the button below to go back
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
