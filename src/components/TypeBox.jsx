import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="space-y-4">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Write context here"
            className="flex-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          <button 
            onClick={handleGenerate}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Generate
          </button>
        </div>
        
        <input 
          type="text"  
          placeholder="Person name"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />

        <input 
          type="text" 
          placeholder="To whom"  
          value={toWhom} 
          onChange={(e) => setToWhom(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />

        <select 
          name="length" 
          value={length} 
          onChange={(e) => setLength(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="" disabled>How long</option>
          <option value="long">Long</option>
          <option value="medium">Medium</option>
          <option value="short">Short</option>
        </select>

        <select 
          name="tone" 
          value={tone} 
          onChange={(e) => setTone(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="" disabled>Select Tone</option>
          <option value="formal">Formal</option>
          <option value="informal">Informal</option>
          <option value="friendly">Friendly</option>
        </select>

        <select 
          name="relationship" 
          value={relationship}  
          onChange={(e) => setRelationship(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="" disabled>Relationship</option>
          <option value="teacher">Teacher</option>
          <option value="principal">Principal</option>
          <option value="girlfriend">Girlfriend</option>
          <option value="friends">Friends</option>
          <option value="boss">Boss</option>
          <option value="colleague">Colleague</option>
        </select>
      </div>
    </div>
  )
}

export default TypeBox