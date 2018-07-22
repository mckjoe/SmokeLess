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
  console.log('you are ' + d );
  return { d: d, h: h, m: m, s: s };
};

function Time(){
  convertMS(41109648466);
  return (
    <div>
      <TimeAgo date="april 2, 2017"  />
    </div>
  );
}

export default Time;
