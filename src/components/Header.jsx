import React from "react";
import { Link } from 'react-router-dom';
import nosmoking from './../assets/images/no-smoking.png';
function Header(){
  const linkStyling = {
    textDecoration: "none",
    color: "red"

  }
  return (
    <div className="header">
      <img className="logo" src={nosmoking} />
      <h1>smokeLess</h1>
      <div className="headerLinks">
        <Link style={linkStyling} to="/details">Details</Link> | <Link style={linkStyling} to="/time">Time</Link> | <Link style={linkStyling} to="/info">Info</Link> | <Link style={linkStyling} to="/health">Health</Link> | <Link style={linkStyling} to="/share">Share</Link>
      </div>
    </div>
  );
}

export default Header;
