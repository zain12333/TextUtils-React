import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here');

  const handleUppercase = () => {
    setText(text.toUpperCase());  // ✅ Converts text to uppercase
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-5">
        <textarea 
          className="form-control"
          value={text} 
          id="mybox" 
          rows="8"
          onChange={(e) => setText(e.target.value)}  // ✅ Handles input change   yes foe input in blank fill 
        />
        <hr />
        <button className="btn btn-primary" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
      </div>
    </>
  );
}
