import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div className="shareMain">
      <div className="postingPerson">
      <img src={props.profilePic} alt="Profile pic" />
      <p>{props.name}</p>
      </div>
      <div className="postBody">
        <p>Stopped smoking on:  <br /><strong>{props.quitDate}</strong></p>
        <br />
        <p>{props.body}</p>
      </div>
    </div>
  );
}


Post.propTypes = {
  name: PropTypes.string,
  quitDate: PropTypes.string,
  body: PropTypes.string,
}

export default Post;
