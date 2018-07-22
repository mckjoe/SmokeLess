import React from 'react';
import PropTypes from 'prop-types';

function HealthStatDetails(props) {
  return (
    <div className="listDisplay">
      <div  className="healthStat">
      <h4>At {props.time}</h4>
      <p>{props.bennefit}</p>
      </div>
    </div>
  );
}

HealthStatDetails.propTypes = {
  time: PropTypes.string,
  bennefit: PropTypes.string
}

export default HealthStatDetails;
