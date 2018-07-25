import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function convertMSToDays(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d };
};
function Info(props) {
  if (props.smokerDetails.length > 0) {
    var stoppedSmokingDate =  props.smokerDetails[0].date;
    var smokesPerDay = props.smokerDetails[0].perDay;
    var packPrice = props.smokerDetails[0].packPrice;
    var cigaretteTime = props.smokerDetails[0].cigaretteTime;
  }
  let quitTime = new Date(stoppedSmokingDate);
  let todaysDate = new Date();
  let timeEllapsed = todaysDate - quitTime;


    var time = convertMSToDays(timeEllapsed);
    var cigarettes = time.d * smokesPerDay;
    var money = cigarettes / 20 * parseInt(packPrice);
    var spent = money.toFixed(2);
    var minutesSaved = cigarettes * cigaretteTime;

    return (
      <div>
      <Header />
        <p>In the past: </p>
        <p className = "output">{time.d} Days</p>
        <p>I would have smoked:</p>
        <p className = "output">{cigarettes} cigarettes</p>
        <p>and spent:</p>
        <p className = "output">${spent}</p>
        <p>in about:</p>
        <p className = "output">{minutesSaved} minutes.</p>
        <p>Congratulations!  You should be incredibly proud of yourself!</p>
      </div>
    );

}

Info.propTypes = {
  smokerDetails: PropTypes.array
}

export default Info;
