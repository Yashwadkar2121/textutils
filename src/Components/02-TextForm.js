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
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>
          Clear
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
