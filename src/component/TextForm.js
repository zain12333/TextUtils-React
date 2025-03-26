import React, { useState } from 'react';


export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUppercase = () => {
    setText(text.toUpperCase());  // ✅ Converts text to uppercase
    props.showAlert("Converted to uppercase","Success");
  };

  const handlelowercase = () => {
    setText(text.toLowerCase());  // ✅ Converts text to lowercase
    props.showAlert("Converted to lowercase","Success"); 
  };
  const handleclearcase = () => {
    setText(('')); 
    props.showAlert("Clear to Text","Success");
 // ✅ Converts text to uppercase
  };

  const handleSentencecase = () => {
    setText(text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, match => match.toUpperCase()));
    props.showAlert("Converted to Sentence","Success");
  };
  // ✅ Converts text to  copy to Clipboard
  
  const handleCopycase = () => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Text copied to clipboard!"))
      .catch(err => console.error("Failed to copy:", err));
      props.showAlert("Copy the Text","Success");
  };
  // ✅ Converts   Download text 


  const handleDownloadcase = () => {
    const blob = new Blob([text], { type: "text/plain" }); // Create a text file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "download.txt"; // Set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    props.showAlert("Download Success","Success");
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
        <button className="btn btn-primary  mx-2" onClick={handleclearcase}>
          Clear the Text
        </button>

        <button className="btn btn-primary  mx-2" onClick={handleSentencecase}>
         Check Sentence Text
        </button>

        <button className="btn btn-primary  mx-2" onClick={handleCopycase}>
         Copy To Clipboard
        </button>

        <button className="btn btn-primary  mx-2" onClick={handleDownloadcase}>
         Download Text
        </button>

        {/* // some Mathmatrice sare involves in this section */}
        

      </div>
      <div className="container   my-3">
        <h1>Your Text Summary</h1>
        <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
        {/* // so this count the text length and count the word ther */}
        
       <p>{text.trim() ? (0.008 * text.trim().split(/\s+/).length).toFixed(2) : 0} Read one word per min</p>
       {/* // this is used for show the speed of the user can read a text/word per minute */}
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter the Text in box to preview here"}</p>


      </div>
    </>
  );
}
