import React from "react";
import Smoker from './Smoker';
import PropTypes from 'prop-types';

function DetailsList(props){
  return (
    <div>
    {props.smokerDetails.map((smoker, index) =>
      <Smoker
      date={smoker.date}
      time={smoker.time}
      perDay={smoker.perDay}
      packPrice={smoker.packPrice}
      cigaretteTime={smoker.cigaretteTime}
      smokerTime={smoker.smokerTime}
      key={index} />
    )}
    </div>
  );
}

DetailsList.propTypes = {
  smokerDetails: PropTypes.array
}

export default DetailsList;
