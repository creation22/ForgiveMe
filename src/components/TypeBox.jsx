import React from 'react'

const TypeBox = () => {
  return (
    <div>
      <div>
        <div>
        <input type="text"
        placeholder='write context here' />
        <button>Generate</button>
        </div>
        
        <input type="text"  placeholder='person name '/>
        
        

        <input type="text" placeholder=' to whom' /> 
<select name="length" id="length">
  <option value="" disabled selected hidden>
    How long
  </option>
  <option value="long">long</option>
  <option value="medium">medium</option>
  <option value="short">short</option>

</select>
<select name="tone" id="tone">
  <option value="" disabled selected hidden>
    Select Tone
  </option>
  <option value="formal">Formal</option>
  <option value="informal">Informal</option>
  <option value="friendly">Friendly</option>
</select>
<select name="" id="tone">
  <option value="" disabled selected hidden>
    Select Tone
  </option>
  <option value="formal">Formal</option>
  <option value="informal">Informal</option>
  <option value="friendly">Friendly</option>
</select>


        

      </div>
    </div>
  )
}

export default TypeBox
