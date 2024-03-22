import React, { useState } from 'react'


const Hey = () => {
    return <button onClick={() => alert('hey JS')} className='btn btn-primary ms-4' >Click</button>
}

export default function TextForm(props) {
    const hendleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const hendleLoClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const hendleClearClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = " ";
        setText(newText);
    }
    const hendleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');

    return (
        <>
            <div className="mb-3 container">
                <h4 className='mt-4'>{props.heading}</h4>
                <textarea className="form-control" value={text} onChange={hendleOnChange} id="myBox" rows="10"></textarea>
                <button className="btn btn-primary mt-3" onClick={hendleUpClick}>Convert to Upercase</button>
                <button className="btn btn-primary mt-3 ms-4" onClick={hendleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mt-3 ms-4" onClick={hendleClearClick}>Clear Text</button>

                {/* <Hey /> */}
            </div>

            <div className="container">
                <h4>Your text summary</h4>
                <p>  {text.split(" ").length} and {text.length} characters</p>
                <p>  {0.008 * text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}

