// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
// import React from 'react' - hame yaha react ko import karne ki jarurat nhi hai kyuki me function based component use kaar raha hu & isme me react ko use nhi kr raha hu (use-imr- shortcut)

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import React, {useState} from 'react';



import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"














// let name = "Ketan";    //This is a string, that's why in ""
function App() {
  const [mode, setMode] = useState("light"); // and this is my -state variable-, jo ki ye batata hai ki -dark mode- enable hai ki nhi (ye mere application ki sate hai ki jo ye batati hai)
  const [alert, setAlert] = useState(null); // yaha hum ek, -alert- name ki state banayenge, hamari -alert- by default null hongi. -alert- ek object hai,yad rakhna -alert- ko me ek object bana raha hu

  // me ek method likhunga -setAlert- nam ka, ye method Alert ko set kar dega, ye -setAlert- ek to message lega Our type of message lega
  // setAlert & showAlert - alag alag hai
  // setAlert :- jo hamara -state variable- hai -alert- name ka usko set karne ke liye hai
  // showAlert :- ek function hai jo ki hame help karega -alert- messages ko show karne ke liye
  // type:- alert ke different typea hote hai wo hai. danger, sucess,warning,...
  // alert:- alert kya hai? to alert basically, pehele mera -alert- -null- tha, ab ek -object- hai
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type, // jo bhi upar -type- hai wo yaha aa jayega, our ye ek object ban jayega
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };



// ye function mere -document.body- mese sari classes remove kar dega 
  const removeBodyClasses = ()=> {
      //  document.body.classList.remove("bg-dark");
      //  document.body.classList.remove('bg-light');
       document.body.classList.remove("bg-danger");
       document.body.classList.remove("bg-success");
       document.body.classList.remove("bg-warning");
       document.body.classList.remove("bg-primary");

  }


  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+ cls)
    if (mode === "light") {
      setMode("dark"); // setMode - ek function hai toh aaise hi call karte hai, = use mat karo function ko yaha call karne ke liye
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      // document.title = "TextUtils is Amazing";
      //   }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light"); // mode= karke me directly mode ko set nhi kar sakta, ktuki ye ek -state- hai, toh -state- variable ko directly mode= aaise set nhi kar sakte aapko -setMode- function ka use karna padega
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };






  return (
    <>
      {/* <Navbar></Navbar> */}

      <Router>
        <Navbar
          title="Props-Title"
          mode={mode}
          aboutText="About Us"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* yaha pe -alert- -state variable- hamne pass kiya hai  */}

        {/* Now you can see that text means - your components is loading on the website */}
        {/* <Navbar/> */}

        {/* <div className="container my-3">
          <Routes>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter The text to analyze below"
                mode={mode}
              />
            </Route>
          </Routes>
        </div>
      </Router>
    
    </>
  );
} */}

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

// container- se kya hota hai. Boostrap ki class hoti hai container usse aapaka box bich me aa jata hai

// my-3 :- heading ke upar se thodi space dene ke liye ye boostrap ki class use ki hai (margin -y- me de deti hai 3 ki) container ke upar se thodi si spacing vagera aa jati hai

// me chahta hu ki me -app.js- se meri puri application ki -state- ko manage karu. Iska matlab agar me -dark mode- enable/disable karna chahu to me -app.js- ke andar wo sare ke sare variables banaunga, agar me koi doosara bhi kam karna chahta hu to me jyada se jyada control -app.js- me rakhana chahunga

// setAlert :- us state ko set karne ka function hai
// showAlert :- mess, type leke run hone wala function hai, ye mes, type leta hai



// react :- me -Event- by default mil jata hai