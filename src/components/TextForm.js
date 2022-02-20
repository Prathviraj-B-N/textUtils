import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, updateText] = useState("");
    // const [theme, setTheme] = useState({color:'black',backgroundColor:'white'});
    const handleOnChange = (event) => {
        updateText(event.target.value);
    };

    const handleUpClick = () => {
        updateText(text.toUpperCase());
        props.showAlert(" Converted to uppercase!","success");
    };

    const handleLowerClick = () => {
        updateText(text.toLowerCase());
        props.showAlert(" Converted to lowercase!","success");
    };

    const handleMonoClick = () => {
        updateText(text.toUpperCase().split('').join(" "));
        props.showAlert(" Converted to mono!","success");

    };

    const handleClearClick = () => {
        updateText('');
        props.showAlert(" All cleared!","danger");

    };

    return (
        <div className={`container p-3 rounded my-3 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <form>
                <div className="form-group my-1">
                    <p>{props.textBoxHeader}</p>
                    <textarea className={`form-control my-2 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} name="textBox" id="textBox" rows="5" />
                    <button type="button" onClick={handleUpClick} className="btn btn-primary btn-sm mx-1">Upper Case</button>
                    <button type="button" onClick={handleLowerClick} className="btn btn-primary btn-sm mx-1">Lower Case</button>
                    <button type="button" onClick={handleMonoClick} className="btn btn-primary btn-sm mx-1">Monospace</button>
                    <button type="button" onClick={handleClearClick} className="btn btn-primary btn-sm mx-1">Clear Text</button>
                </div>
            </form>
            <p>{text.split(" ").filter(function (element) { return element !== ""; }).length} words and {text.split("").filter(function (element) { return element !== " "; }).length}  characters</p>
        </div>
    );
}

TextForm.propTypes = { textBoxHeader: PropTypes.string, buttonName: PropTypes.string };
