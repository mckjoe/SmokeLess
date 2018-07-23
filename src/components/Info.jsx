import React from 'react';

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
function Info() {
  var time = convertMSToDays(41246121609);
  var cigarettes = time.d * 15;
  var money = cigarettes / 20 * 7.25;
  var spent = money.toFixed(2);
  return (
    <div>
      <p>In {time.d} days, </p>
      <p>I would have smoked {cigarettes} cigarettes</p>
      <p>and spent ${spent}</p>
      <p>This will be info about stats</p>
    </div>
  );
}

export default Info;
