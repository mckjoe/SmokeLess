import React from "react";
import { Link } from 'react-router-dom';
import nosmoking from './../assets/images/no-smoking.png';
function Header(){
  return (
    <div className="header">
      <img className="logo" src={nosmoking} />
      <h1>smokeLess</h1>
      <div>
        <Link to="/details">Details</Link> | <Link to="/time">Time</Link>
      </div>
    </div>
  );
}

export default Header;
