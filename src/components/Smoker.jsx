import React from "react";
import PropTypes from "prop-types";

function Smoker(props){
  return (
    <div className="smokerDetails">
      <p>For about {props.smokerTime } years,</p>
      <p>I smoked {props.perDay} cigarettes each day,</p>
      <p>I paid ${props.packPrice} per pack,</p>
      <p>and spent {props.cigaretteTime} minutes smoking each cigarette.</p>
    </div>
  );
}

Smoker.propTypes = {
  date: PropTypes.string.isRequired,
  perDay: PropTypes.string.isRequired,
  packPrice: PropTypes.string.isRequired,
  cigaretteTime: PropTypes.string.isRequired,
  smokerTime: PropTypes.string.isRequired
}

export default Smoker;
