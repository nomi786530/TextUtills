import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    };

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Your text Reversed Successfully!", "success");
    };

    const handleSpeakClick = () => {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        synth.speak(utterThis);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared Successfully!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="myBox"
                        rows="6"
                        placeholder="Enter Text"
                    ></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-dark mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-dark mx-1" onClick={handleReverseClick}>Reverse Text</button>
                    <button className="btn btn-dark mx-1" onClick={handleSpeakClick}>Speak</button>
                    <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
                    <button className="btn btn-dark mx-1" onClick={handleClearClick}>Clear All</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text Summary</h2>
                <p><b>{text.split(" ").length - 1}</b> Words and <b>{text.replace(/\s/g, "").length}</b> Characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something To Preview.."}</p>
            </div>
        </>
    );
}
