// rfc :- we can get React ka function based component 

import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

let myStyle = {
  color: props.mode === "dark" ? "white" : "#042743",
  backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  // border: "2px solid",
  // borderColor: "dark" ? "white" : "#042743",
};

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

//  const toggleStyle = ()=>{
//        if(myStyle.color === 'black') {
       
//         setMyStyle({
//           color: "white",
//           backgroundColor: "black",
//           border: "2px solid white"
//         });
//         setBtnText("Enable Light Mode")

//        }
//        else{
//         setMyStyle({
//           color: "black",
//           backgroundColor: "white"
//         })
//         setBtnText("Enable Dark Mode");
//        }
//     }







  return (
    <div className="container my-5 mx-3">
      <h2
        className="my-3 mx-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              {/* <strong>This is the first item's accordion body.</strong>  <code>.accordion-body</code> */}
              TextUtils gives you a way to analyze your text quickly and
              effectively. Be it word count, characters count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              {/* <strong>This is the second item's accordion body.</strong> <code>.accordion-body</code> */}
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              {/* <strong>This is the third item's accordion body.</strong> <code>.accordion-body</code> */}
              This word counter software works in any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel, document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div> */}
    </div>
  );
}







// Kuch is tarah se -State- variables ka use karke aap -Enable dark/light mode enable- kar sakte ho apne website pe. Usually hum apne -body- ka -dark mode-change karte he, right side me ek -switch- laga kar 