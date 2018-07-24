import React from "react";
import { Link } from 'react-router-dom';
import nosmoking from './../assets/images/no-smoking.png';
function Header(){
  const linkStyling = {
    textDecoration: "none",
  }

  return (
    <div className="header">
      <img className="logo" src={nosmoking} />
      <h1 className="title">smokeLess</h1>
      <div className="headerLinks">
        <Link className="links" style={linkStyling} to="/details">Details</Link> | <Link className="links" style={linkStyling} to="/time">Time</Link> | <Link className="links" style={linkStyling} to="/info">Info</Link> | <Link className="links" style={linkStyling} to="/health">Health</Link> | <Link className="links" style={linkStyling} to="/share">Share</Link>
      </div>
    </div>
  );
}

export default Header;
