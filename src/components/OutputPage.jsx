import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GenerateText from '../function/generateText';
import { IconArrowLeft } from '@tabler/icons-react';

const OutputPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  if (!answers) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            No Message Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Please start by creating your apology message first.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Your Apology Letter
            </h1>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              <IconArrowLeft size={20} />
              <span>Back</span>
            </button>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 shadow-inner">
              <GenerateText answers={answers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputPage;