import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case", "success");
    }

    const handleLoClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case", "success");
    }

    const handleClearClick = () =>{
        console.log("Uppercase was clicked");
        let newText = ""
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) =>{
        console.log("Uppercase was clicked");
        
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const[text,setText] = useState('Enter text here');

  return (
    <>
    <div className="container" style = {{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control border border-secondary" value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark'?'grey':'white' ,  color : props.mode === 'dark'?'white':'black'}}id="myBox"  rows="10" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button> 
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
    </div>
    <div className="container my-4" style = {{color : props.mode === 'dark' ? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        {/* // text.split will give us an array dividing words by spaces. */}
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something to preview it here"}</p>
    </div>
    </>
    
  )
}
