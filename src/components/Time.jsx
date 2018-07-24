import React from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';

const time=null;

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
};

function Time(props){
  if (props.smokerDetails.length > 0) {
    var stoppedSmokingDate =  props.smokerDetails[0].date;
  }

  let quitTime = new Date(stoppedSmokingDate);
  let todaysDate = new Date();
  let timeEllapsed = todaysDate - quitTime;
  var time = convertMS(timeEllapsed);
  console.log(timeEllapsed);

  return (
    <div className='output'>
      <p>I quit smoking cigarettes</p>
      <p>{time.d} Days</p>
      <p>{time.h} Hours</p>
      <p>{time.m} Minutes</p>
      <p>{time.s} Seconds</p>
      <p>Ago...</p>
    </div>
  );
}

Time.propTypes = {
  smokerDetails: PropTypes.array
}

export default Time;
