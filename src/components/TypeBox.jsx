import React, { useState } from 'react';

const TypeBox = ({ setAnswers }) => {
  const [context, setContext] = useState("");
  const [person, setPerson] = useState("");
  const [toWhom, setToWhom] = useState("");
  const [length, setLength] = useState("");
  const [tone, setTone] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleGenerate = () => {
    const answerObject = {
      context,
      person,
      toWhom,
      length,
      tone,
      relationship,
    };
    setAnswers(answerObject);
  };

  return (
    <div className="p-4 flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        placeholder="Write context here"
        className="border p-2 rounded"
      />
            <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Generate
      </button>

      <input
        type="text"
        placeholder="Person name"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="To whom"
        value={toWhom}
        onChange={(e) => setToWhom(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="" disabled>
          How long
        </option>
        <option value="long">Long</option>
        <option value="medium">Medium</option>
        <option value="short">Short</option>
      </select>

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="" disabled>
          Select Tone
        </option>
        <option value="formal">Formal</option>
        <option value="informal">Informal</option>
        <option value="friendly">Friendly</option>
      </select>

      <select
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="" disabled>
          Relationship
        </option>
        <option value="teacher">Teacher</option>
        <option value="principal">Principal</option>
        <option value="girlfriend">Girlfriend</option>
        <option value="friends">Friends</option>
        <option value="boss">Boss</option>
        <option value="colleague">Colleague</option>
      </select>


    </div>
  );
};

export default TypeBox;
