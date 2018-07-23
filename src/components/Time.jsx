import React from 'react';
import TimeAgo from 'react-timeago';

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

function Time(){
  var time=convertMS(41246121609);
  return (
    <div>
      <p>{time.d} Days</p>
      <p>{time.h} Hours</p>
      <p>{time.m} Minutes</p>
      <p>{time.s} Seconds</p>
    </div>
  );
}

export default Time;
