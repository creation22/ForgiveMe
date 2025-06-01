import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSend } from '@tabler/icons-react';

const TypeBox = () => {
  const navigate = useNavigate();
  const [context, setContext] = useState("");
  const [person, setPerson] = useState("");
  const [toWhom, setToWhom] = useState("");
  const [length, setLength] = useState("");
  const [tone, setTone] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleGenerate = () => {
    const answers = {
      context,
      person,
      toWhom,
      length,
      tone,
      relationship
    };
    navigate('/output', { state: { answers } });
  };

  const isFormValid = context && person && toWhom && length && tone && relationship;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              What would you like to apologize for?
            </label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="I want to apologize for..."
              className="input-field min-h-[120px] resize-none"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Your name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Recipient's name
              </label>
              <input
                type="text"
                placeholder="Their name"
                value={toWhom}
                onChange={(e) => setToWhom(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Length
              </label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="select-field"
              >
                <option value="">Select length</option>
                <option value="short">Short & Sweet</option>
                <option value="medium">Balanced</option>
                <option value="long">Detailed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="select-field"
              >
                <option value="">Select tone</option>
                <option value="formal">Professional</option>
                <option value="informal">Casual</option>
                <option value="friendly">Warm & Friendly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Relationship
              </label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="select-field"
              >
                <option value="">Select relationship</option>
                <option value="teacher">Teacher</option>
                <option value="principal">Principal</option>
                <option value="girlfriend">Partner</option>
                <option value="friends">Friend</option>
                <option value="boss">Boss</option>
                <option value="colleague">Colleague</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!isFormValid}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <span>Generate Apology</span>
          <IconSend size={18} className="inline-block" />
        </button>
      </div>
    </div>
  );
};

export default TypeBox;