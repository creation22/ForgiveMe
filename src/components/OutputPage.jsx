import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import GenerateText from '../function/generateText';

const OutputPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  if (!answers) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center bg-[linear-gradient(to_bottom_right,_#03f4fc,_#1c1c1c)] font-sans">
        <div className="text-center text-white">
          <p className="text-xl mb-4">No data available. Please fill the form first.</p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition text-white"
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
      `${textRef.current.innerText.slice(0, 240)}...\n\n#ApologyLetterGenerator`
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-[linear-gradient(to_bottom_right,_#03f4fc,_#1c1c1c)] font-sans relative">
      {/* GitHub Link */}
      <a
        href="https://github.com/yourusername/your-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 left-4 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition text-sm z-50"
      >
        GitHub Repo
      </a>

      {/* Buy Me a Coffee */}
      <a
        href="https://www.buymeacoffee.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition text-sm font-semibold z-50"
      >
        ☕ Buy Me a Coffee
      </a>

      {/* Centered Box */}
      <div className="w-full max-w-3xl bg-black rounded-xl shadow-xl p-8 text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Generated Apology</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>

        <div
          ref={textRef}
          className="prose dark:prose-invert max-w-none text-white mb-6"
        >
          <GenerateText answers={answers} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-md transition ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {copied ? 'Copied!' : 'Copy Text'}
          </button>

          <button
            onClick={handleTweet}
            className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-[#0d8ddb] transition"
          >
            <FaTwitter />
            Share on Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutputPage;
