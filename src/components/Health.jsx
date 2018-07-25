import React from 'react';
import HealthStatDetails from './HealthStatDetails';
import PropTypes from 'prop-types';
import Header from './Header';

function Health(props) {
  return (

    <div className="list">
    <Header />
    {props.quitStats.map((stat, index) =>
      <HealthStatDetails
        time={stat.time}
        bennefit={stat.benefit}
        key={index} />
      )}
    </div>
  );
}

Health.propTypes = {
  quitStats: PropTypes.array.isRequired
}

export default Health;
