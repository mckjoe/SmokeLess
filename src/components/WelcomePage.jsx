import React from 'react';
import PropTypes from 'prop-types';

function WelcomePage(props) {
  return (
    <div className="welcome">
      <h3>Welcome to smokeLess</h3>
      <p>We are here to help you keep track of how well you are doing at breaking your addiction to cigarettes.  Please give us a little information about yourself, and we'll figure out the rest!</p>
      <button onClick={props.onWelcomeConfirmation}>Go!</button>

    </div>
  );
}

WelcomePage.propTypes = {
  onWelcomeConfirmation: PropTypes.func
}

export default WelcomePage;
