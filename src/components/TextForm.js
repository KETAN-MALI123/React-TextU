// React ka function based component hame chahiye -use short cut -rfc-

// is component ke andar me ek form ko render karunga -bootstrap-

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
    };

  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am a Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //getSelecction() &removeAllRanges() - ye dono functions hai, isse text copy hoga but selected nhi dikhega  
    props.showAlert("Text Copied!", "success");
  };

  const [text, setText] = useState("Enter text here2 ");
  //  setText("Ketan");   // to meri text value "Enetr text here" se "Ketan" ho jayegi

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div> */}

        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#134" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }} // object ke liye double {} lagaya yaha pe, ek{} ja ka, ek {} object ka
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          {" "}
          Convert to Uppercase{" "}
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          {" "}
          Convert to Lowercase{" "}
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          {" "}
          Copy Text{" "}
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words & {text.length} characters</p> */}

        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length !== 0).length
          }{" "}
          words & {text.length} characters
        </p>
        <p>
          {0.008 *
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length !== 0).length}{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}

// button.btn.btn-primary (shortcut)

// EK -JSX Fragment- me mene isko wrap kar diya hai, kyuki me ek se jyada chis return nhi kar sakta

// my-2  --> is a boostrap class ye -y- me upar se margin dega

// mx-2  --> is a boostrap class ji -x- me margin deta hai
// agar aapko custom distance chahiye to aap apni bhi class likh sakte ho CSS file lagakar
