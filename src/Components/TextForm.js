import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('enter your text here');

    const handleUpClick = () => {
        console.log("button is clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };
    
    const handleLowClick = () => {
        console.log("button is clicked");
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClear = () => {
        console.log("button is clicked");
        let newText = "";
        setText(newText);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy=()=>{
        var text1=document.getElementById("mybox");
        text1.select();
        navigator.clipboard.writeText(text1.value)
    }

    const handlePaste = async () => {
        try {
          const clipboardText = await navigator.clipboard.readText();
          setText(clipboardText);
        } catch (err) {
          console.error('Failed to read clipboard contents: ', err);
        }
      };

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} rows="8" onChange={handleChange}></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to uppercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleClear}>Clear</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handlePaste}>Paste</button>
                </div>
            </div>

            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*(text.split(" ").length)}minutes time to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

