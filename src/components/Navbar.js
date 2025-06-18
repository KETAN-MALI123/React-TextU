// React function based component hame chahiye to -rfc- shortcut ka use karenge (isse pura F.B.C. aa jayega )

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    //  <nav>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Contact</li>
    //       </nav>
    //       <div className="container">
    //         <h1>Hello {name} </h1>
    //         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga incidunt aperiam voluptas beatae, alias sint labore eligendi dolor saepe neque perferendis minus tempora cumque facilis minima repellendus delectus numquam? Delectus maxime laboriosam aperiam doloremque.</p>
    //       </div>

    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>

            {/* 
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link disabled">Disabled</a>
        </li>   */}
          </ul>

          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "35px", width: "30px", cursor: "pointer" }}
            ></div>

            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "35px", width: "30px", cursor: "pointer" }}
            ></div>

            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "35px", width: "30px", cursor: "pointer" }}
            ></div>

            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "35px", width: "30px", cursor: "pointer" }}
            ></div>

            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.toggleMode("light");
              }}
              style={{ height: "35px", width: "30px", cursor: "pointer" }}
            ></div>

            <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                props.toggleMode("dark");
              }}
              style={{ height: "35px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={() => {
                props.toggleMode(null);
              }}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
}; // {...} ye ek object hai

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text here",
// };

// boostrap me -green- ka code -success- hota hai, -blue- ka -primary- hota hai, -red- ka -danger-

// ``   --is template literal ke andar jo bhi likha hai wo ek string ban gayi hai, in js. jab  me `` use karta hu Js me tab me $ lagakar koi bhi variable use kar sakta hu $ Our {} laga kar, toh ye -${props.mode==='light'? 'dark':'light'}- pura ka pura ek variable hai Our is variable ke andar ek ternary operator hai jo ye keh raha hai ki props ka mode dark hai toh light ho jaye light hai to dark ho jaye







//  onClick - ko function chahiye hota hai function call nhi chahiye hota hai 