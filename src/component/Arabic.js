import React,{useState}from 'react'
import axios from 'axios';

export default  function Arabic(props){

    const [text , setText]= useState('');
    const handleUppercase = () => {
        setText(text.toUpperCase());  //  Converts text to uppercase
        props.showAlert("Converted to uppercase","Success");
    }
    const handlelowercase = () => {
        setText(text.toLowerCase());  //  Converts text to lowercase
        props.showAlert("Convert to lowercase","Success");

    }
    const handlecleartext =() =>{
        setText(('')); 
        props.showAlert("Clear to Text","Success");
 
    }
  
    const handlecopycase  =() =>{
        navigator.clipboard.writeText(text)
            .then(() => alert("Text copied to clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
        props.showAlert("Copy the Text","Success");
    }
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

  const handleTranslateToUrdu = async () => {
    try {           
        const res = await axios.get('https://api.mymemory.translated.net/get', {
            params: {
            q: text,
            langpair: 'en|ar'
            }
        });
        setText(res.data.responseData.translatedText);
        props.showAlert("Translated to Arabic", "Success");
    }
    catch (error) {
        console.error("Translation error:", error);
        props.showAlert("Translation failed", "Danger");
    }
    }

return (
    <>
    <h1>{props.heading}</h1>
    <div className="  container   mb-5">    
        <textarea 
            className="form-control"
            value={text} 
            
            id="mybox" 

            rows="8"
            style={{
                direction: /[\u0600-\u06FF]/.test(text) ? 'rtl' : 'ltr',
                textAlign: /[\u0600-\u06FF]/.test(text) ? 'right' : 'left'
            }}

           onChange={
                (e) => setText(e.target.value)  // Handles input change   yes for input in blank fill   
           }
        
                 // Handles input change   yes foe input in blank fill 
        />
        <hr />
        <button disabled={text.length===0}   className="btn btn-primary mx-2 my-1" onClick={handleUppercase}>Convert to Uppercase</button>
        <button disabled={text.length===0}   className="btn btn-primary mx-2 my-1" onClick={handlelowercase}>Convert to Lowercase</button>
        <button disabled={text.length===0}   className="btn btn-primary mx-2 my-1" onClick={handlecleartext}>Clear Text</button>
        <button disabled={text.length===0}   className="btn btn-primary mx-2 my-1" onClick={handleTranslateToUrdu}>Translate to Arabic</button>
        <button disabled={text.length===0}   className="btn btn-primary mx-2 my-1" onClick={handlecopycase}>Copy Text</button>
        <button disabled={text.length===0}   className="btn btn-primary mx-2 my-1" onClick={handleDownloadcase}>Download Text</button>

    </div>
    <div className="container   my-3">
        <h1>Your Text Summary</h1>
        <p>{text.trim().split(/\s+/). filter((element)=>{return element. length!=0}).length} words and {text.length} characters</p>
        {/* // so this count the text length and count the word there */}
        {/* // and also .filter method is used  for default 1 is count to set */}
        <p>{text.trim() ? (0.008 * text.trim().split(/\s+/).length).toFixed(2) : 0} Read one word per min</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to preview"}</p>
    </div>
    {/* // this is the preview section  */}
   </>
    );
}
    
    
    
    
    
    

