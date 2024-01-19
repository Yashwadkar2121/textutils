import React, { useState } from "react";

function TextForm(props) {
  //   text = "new text"; Wrong way to change the state
  const [text, setText] = useState("Enter Your Text Here");
  //   setText = ("new text") ; Correct way to cahnge the state

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // To convert upperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  //   To convert LowerCase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  //   To Clear the Textarea
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  //   To copy Text
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  //   Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  //   Capitalization
  const handleCapitalization = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    let newText2 = newText.join(" ");
    setText(newText2);
  };
  return (
    <>
      {/* Creating a textarea */}
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      {/* Buttons Section */}
      <div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCapitalization}
        >
          Capitalization
        </button>
      </div>
      {/* Text Summary section */}
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          <b>
            {/* Fix the 0 Word count by filter()  Function*/}
            {
              text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length
            }
          </b>{" "}
          Words and
          <b>{text.length}</b> Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        {/* Start Preview Section */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
