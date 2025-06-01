import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GenerateText from '../function/generateText';
import { BackgroundLines } from './ui/background-lines';
const OutputPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  if (!answers) {
    return (
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

      
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-xl mb-4">No data available. Please fill the form first.</p>
          <button 
            onClick={() => navigate('/')}
            >
            Go Back
          </button>
        </div>
      </div>
      </BackgroundLines>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold dark:text-white">Generated Apology</h1>
            <button 
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Go Back
            </button>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <GenerateText answers={answers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputPage;