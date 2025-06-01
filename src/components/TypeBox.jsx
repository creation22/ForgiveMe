import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TypeBox = () => {
  const navigate = useNavigate();
  const [context, setContext] = useState('');
  const [person, setPerson] = useState('');
  const [toWhom, setToWhom] = useState('');
  const [length, setLength] = useState('');
  const [tone, setTone] = useState('');
  const [relationship, setRelationship] = useState('');
  const [englishlevel, setEnglishLevel] = useState('');

  const handleGenerate = () => {
    const answers = {
      context,
      person,
      toWhom,
      length,
      tone,
      relationship,
      englishlevel,
    };
    navigate('/output', { state: { answers } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-2xl mx-auto mt-8 p-8 bg-black dark:bg-gray-900 rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white dark:text-gray-100 text-center">
        Generate Your Apology Letter
      </h2>

      {/* Context input + generate button */}
      <div className="flex gap-3 items-start">
        <input
          type="text"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Write the context here..."
          className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleGenerate}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all"
        >
          Generate
        </motion.button>
      </div>

      {/* Other inputs/selects */}
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Person's Name"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          className="flex-grow min-w-[150px] p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all"
        />

        <input
          type="text"
          placeholder="To Whom"
          value={toWhom}
          onChange={(e) => setToWhom(e.target.value)}
          className="flex-grow min-w-[150px] p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all"
        />

        <div className="relative flex-grow min-w-[150px]">
          <select
            name="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              How long?
            </option>
            <option value="long">Long</option>
            <option value="medium">Medium</option>
            <option value="short">Short</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative flex-grow min-w-[150px]">
          <select
            name="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              Select Tone
            </option>
            <option value="formal">Formal</option>
            <option value="informal">Informal</option>
            <option value="friendly">Friendly</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative flex-grow min-w-[150px]">
          <select
            name="relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              Relationship
            </option>
            <option value="teacher">Teacher</option>
            <option value="principal">Principal</option>
            <option value="girlfriend">Girlfriend</option>
            <option value="friends">Friends</option>
            <option value="boss">Boss</option>
            <option value="colleague">Colleague</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative flex-grow min-w-[150px]">
          <select
            name="englishlevel"
            value={englishlevel}
            onChange={(e) => setEnglishLevel(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              English Level
            </option>
            <option value="normal">Normal</option>
            <option value="polished">Polished</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TypeBox;