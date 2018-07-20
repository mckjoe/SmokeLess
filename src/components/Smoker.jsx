import React from "react";
import PropTypes from "prop-types";

function Smoker(props){
  return (
    <div>
      <p>I quit Smoking {props.date}</p>
      <p>at {props.time}</p>
      <p>I smoked {props.perDay} per cigarettes per day</p>
      <p>I paid {props.packPrice} per pack</p>
      <p>and spent {props.cigaretteTime} minutes each cigarette </p>
      <p>for about {props.smokerTime} years</p>
    </div>
  );
}

Smoker.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  perDay: PropTypes.string.isRequired,
  packPrice: PropTypes.string.isRequired,
  cigaretteTime: PropTypes.string.isRequired,
  smokerTime: PropTypes.string.isRequired
}

export default Smoker;
