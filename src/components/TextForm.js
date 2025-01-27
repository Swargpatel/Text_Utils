import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newLowerText = text.toLowerCase()
        setText(newLowerText)
    }
    const handleOnChange = (event) => {
        // console.log("On changed")
        setText(event.target.value);
    }
    const handleClearClick = () => {

        let newText = "";
        setText(newText);
    }
  

    const [text, setText] = useState('Enter text here');
    // text= "new text"; //Wrong way to change the state
    //setText("new text");
    return (
        <>
            <div className="container">

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} placeholder={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length}Minutes for reading</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    )
}
