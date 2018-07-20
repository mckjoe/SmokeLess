import React from "react";
import { Link } from 'react-router-dom';
import nosmoking from './../assets/images/no-smoking.png';
function Header(){
  return (
    <div className="header">
      <img className="logo" src={nosmoking} />
      <h1>smokeLess</h1>
      <div className="headerLinks">
        <Link to="/details">Details</Link> | <Link to="/time">Time</Link> | <Link to="/info">Info</Link> | <Link to="/health">Health</Link>
      </div>
    </div>
  );
}

export default Header;
