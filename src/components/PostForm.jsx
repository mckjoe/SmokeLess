import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function PostForm(props) {
  let _body= null;

  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({profilePic:"https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",name: "Joseph McKinney", quitDate: "March 2nd, 2017", body: _body.value, key: v4()});
    _body.value = '';
  }

  return (
    <div className="postForm">
      <img className="profilePic" src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" />
      <form onSubmit={handleNewPostSubmission}>
        <textarea
        type='textarea'
        id='body'
        placeholder='Please type post here'
        ref={(textarea) => {_body = textarea;}}/>
        <button type="submit">Post!</button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  onNewPostCreation: PropTypes.func.isRequired
}

export default PostForm;
