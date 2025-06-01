import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTwitter, FaCopy, FaGithub, FaCoffee } from 'react-icons/fa';
import GenerateText from '../function/generateText';

const OutputPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  if (!answers) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black font-sans">
        <div className="text-center text-white">
          <p className="text-xl mb-4">No data available. Please fill the form first.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-medium shadow-lg hover:shadow-blue-500/20"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleCopy = () => {
    if (!textRef.current) return;
    const text = textRef.current.innerText || textRef.current.textContent;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleTweet = () => {
    const tweetText = encodeURIComponent(
      `${textRef.current.innerText.slice(0, 240)}...\n\n#SaySorry`
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center font-sans relative">
      {/* GitHub Link */}
      <a
        href="https://github.com/creation22/ForgiveMe"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 left-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition text-sm z-50 flex items-center gap-2 shadow-md"
      >
        <FaGithub />
        GitHub
      </a>

      {/* Buy Me a Coffee */}
      <a
        href="https://www.buymeacoffee.com/creation22"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-red-400 transition text-sm font-semibold z-50 flex items-center gap-2 shadow-md"
      >
        <FaCoffee />
        Buy Me a Coffee
      </a>

      {/* Centered Box */}
      <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-2xl p-8 text-white border border-gray-800">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Your Apology Letter
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-white font-medium border border-gray-700 hover:border-gray-600 shadow hover:shadow-lg"
          >
            Create Another
          </button>
        </div>

        <div
          ref={textRef}
          className="prose dark:prose-invert max-w-none text-gray-200 mb-8 leading-relaxed"
        >
          <GenerateText answers={answers} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            onClick={handleCopy}
            className={`px-6 py-3 rounded-lg transition flex items-center justify-center gap-2 font-medium ${
              copied
                ? 'bg-green-600 text-white shadow-inner'
                : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 shadow hover:shadow-lg'
            }`}
          >
            <FaCopy />
            {copied ? 'Copied!' : 'Copy Text'}
          </button>

          <button
            onClick={handleTweet}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#0d8ddb] transition font-medium shadow-lg hover:shadow-blue-500/30"
          >
            <FaTwitter size={18} />
            Share on Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutputPage;