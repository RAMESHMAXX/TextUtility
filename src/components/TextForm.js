import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("clicked button" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Case Converted","success");
        if(text.length===0){
            props.showAlert("Please enter Text","danger");
        }
    }
    const handleOnChange = (event) => {
        // when i write on text that are saved on text varibale (onchange is handler)
        setText(event.target.value);
    }
    const handleRemoveClick = () => {
        // when i write on text that are saved on text varibale (onchange is handler)
        let rm_text = "";
        setText(rm_text);
        props.showAlert("Text Cleard","success");


    }
    const handleLcClick = () => {
        // when i write on text that are saved on text varibale (onchange is handler)
        let rm_text = text.toLowerCase();
        setText(rm_text);
        props.showAlert("Lower Case Converted","success");


    }
    // const handleCountSentClick = () => {
    //     // when i write on text that are saved on text varibale (onchange is handler)
    //     let rm_text = text.split('.').length - 1;
    //     if (rm_text === 0) {
    //         rm_text++;
    //     }
    //     setText(rm_text);

    // }

    const [text, setText] = useState("plese input text");
    return (
        <div style={{color: props.mode==='dark' ? 'white':'#4A403E'}}>
            <h1>{props.header}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control my-2" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#4A403E':'white', color: props.mode==='dark' ? 'white':'#4A403E'}}></textarea>
                <button type="button" className="btn btn-primary my-1" onClick={handleUpClick} value={text}>Upercase Convert</button>
                <button type="button" className="btn btn-info mx-1" onClick={handleLcClick}>LowerCase Convert</button>
                <button type="button" className="btn btn-danger mx-1" onClick={handleRemoveClick}>Clear Text</button>
                {/* <button type="button" className="btn btn-dark mx-1" onClick={handleCountSentClick}>Count Sentence</button> */}
            </div>
            <div className="container my-3">
                <h3>Your Text summary</h3>
                <p>{text.length > 0 ? text.split(' ').length:0 } words or {text.length} Charactors</p>
                <p>Reading time <strong>{0.008*(text.length > 0 ? text.split(' ').length:0)}</strong> Minutes!</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
