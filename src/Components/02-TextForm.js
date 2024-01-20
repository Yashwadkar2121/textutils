import React, { useState } from "react";

function TextForm(props) {
  //   text = "new text"; Wrong way to change the state
  const [text, setText] = useState("");
  //   setText = ("new text") ; Correct way to cahnge the state

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // To convert upperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !", "success");
  };
  //   To convert LowerCase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !", "success");
  };
  //   To Clear the Textarea
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear the text !", "success");
  };
  //   To copy Text
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to Clipboard !", "success");
  };
  //   Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spacces!", "success");
  };
  //   Capitalization
  const handleCapitalization = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] =
        newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
    }
    let newText2 = newText.join(" ");
    setText(newText2);
    props.showAlert(" Capitalization The text!", "success");
  };
  return (
    <>
      {/* Creating a textarea */}
      <div>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
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
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyClick}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCapitalization}
          disabled={text.length === 0}
        >
          Capitalization
        </button>
      </div>
      {/* Text Summary section */}
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {/* Fix the 0 Word count by filter()  Function*/}
            {
              text.split(/\s+/).filter((ele) => {
                return ele.length !== 0;
              }).length
            }
          </b>{" "}
          Words and <b>{text.length}</b> Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>

        {/* Start Preview Section */}
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Some Your Text To Preview"}</p>
      </div>
    </>
  );
}

export default TextForm;
