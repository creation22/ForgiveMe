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
      className="max-w-2xl mx-auto mt-8 p-4 sm:p-8 bg-black dark:bg-gray-900 rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white dark:text-gray-100 text-center">
        Make Things Right
      </h2>

      {/* Context input + generate button */}
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <input
          type="text"
          required
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Write the context here briefly ..."
          className="flex-1 w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleGenerate}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all"
        >
          Create
        </motion.button>
      </div>

      {/* Other inputs/selects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            required 
            placeholder="Person's Name"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Addressed To" 
            required
            value={toWhom}
            onChange={(e) => setToWhom(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all"
          />
        </div>

        <div className="relative">
          <select
            name="length"
            value={length}
            required 
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              Length Preference
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

        <div className="relative">
          <select
            name="tone"
            required
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              Vibe
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

        <div className="relative">
          <select
            name="relationship"
            value={relationship}
            required
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              Connection
            </option>
            <option value="teacher">Teacher</option>
            <option value="principal">Principal</option>
            <option value="boss">Boss</option>
            <option value="colleague">Colleague</option>
            <parents value = "parents">Parents</parents>
            <option value="friends">Friends</option>
            <option value="girlfriend">Girlfriend</option>
            <option value="boyfriend">Boyfriend</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select
            name="englishlevel"
            value={englishlevel}
            required 
            onChange={(e) => setEnglishLevel(e.target.value)}
            className="w-full p-3 pl-3 pr-8 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-400">
              Writing Style
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