import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here');

  const handleUppercase = () => {
    setText(text.toUpperCase());  // ✅ Converts text to uppercase
  };

  const handlelowercase = () => {
    setText(text.toLowerCase());  // ✅ Converts text to uppercase
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="  container   mb-5">
        <textarea 
          className="form-control"
          value={text} 
          id="mybox" 
          rows="8"
          onChange={(e) => setText(e.target.value)}  // ✅ Handles input change   yes foe input in blank fill 
        />
        <hr />
        <button className="btn btn-primary mx-2" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary  mx-2" onClick={handlelowercase}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container   my-3">
        <h1>Your Text Summary</h1>
        <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
        {/* // so this count the text length and count the word ther */}
        
       <p>{text.trim() ? (0.008 * text.trim().split(/\s+/).length).toFixed(2) : 0} Read one word per min</p>
       {/* // this is used for show the speed of the user can read a text/word per minute */}
       <h2>Preview</h2>
       <p>{text}</p>


      </div>
    </>
  );
}
