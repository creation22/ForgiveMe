import React from 'react'
import { useState } from 'react'
const TypeBox = () => {
  const [context, setContext] = useState("");
  const [person, setPerson] = useState("");
  const [toWhom, setToWhom] = useState("");
  const [length, setLength] = useState("");
  const [tone, setTone] = useState("");
  const [relationship, setRelationship] = useState("");
  const [answers, setAnswers] = useState({});

  const handleGenerate = () => {
    setAnswers({
      context ,
      person , 
      toWhom , 
      length , 
      tone , 
      relationship
    }); 
  }
  return (
    <div>
      <div>
        <div>
        <input type="text" value = {context}
        onChange={(e) => setContext(e.target.value)}
        placeholder='write context here' />
        <button>Generate</button>
        </div>
        
        <input type="text"  placeholder='person name '
        value = {person}
        onChange={(e) => setPerson(e.target.value)}
        
        />

        
        

        <input type="text" placeholder=' to whom'  value={toWhom} 
        onChange={(e) => setToWhom(e.target.value)}/> 
<select name="length" value = {length} onChange={(e) => setLength(e.target.value)}
  >
  <option value="" disabled >
    How long
  </option>
  <option value="long">long</option>
  <option value="medium">medium</option>
  <option value="short">short</option>

</select>
<select name="tone" id="tone" value = {tone} onChange={(e) => setTone(e.target.value)}>
  <option value="" disabled >
    Select Tone
  </option>
  <option value="formal">Formal</option>
  <option value="informal">Informal</option>
  <option value="friendly">Friendly</option>
</select>
<select name="" id="tone" value={relationship}  onChange={(e) => setRelationship(e.target.value)}>
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
    </div>
  )
}

export default TypeBox
