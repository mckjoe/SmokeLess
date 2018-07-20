import React from "react";
import Smoker from './Smoker';

var masterSmokerDetails = [
  {
    date: 'Sept 4th 2018',
    time: '7:02 PM',
    perDay: '15',
    packPrice: '$7.75',
    cigaretteTime: '12',
    smokerTime: '12'
  }
];
function DetailsList(){
  return (
    <div>
    {masterSmokerDetails.map((smoker, index) =>
      <Smoker
      date="Sept 4th 2018"
      time="7:02 PM"
      perDay="15"
      packPrice="$7.75"
      cigaretteTime="12"
      smokerTime="12"
      key={index} />
    )}
    </div>
  );
}

export default DetailsList;
