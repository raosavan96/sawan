import React, { useState } from 'react'




export default function TextForm(props) {
    const hendleUpClick = () => {
        console.log("Uppercase was Clicked");
        setText("You have clicked on handleUpClick");
    }

    const hendleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div className="mb-3">
            <h4>{props.heading}</h4>
            <textarea className="form-control" value={text} onChange={hendleOnChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mt-3" onClick={hendleUpClick}>Convert to Upercase</button>
        </div>
    )
}

