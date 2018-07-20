import React from 'react';
import WelcomePage from './WelcomePage';
import NewSmokerForm from './NewSmokerForm';
import PropTypes from 'prop-types';

class WelcomeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleWelcomeConfirmation = this.handleWelcomeConfirmation.bind(this);
  }

  handleWelcomeConfirmation(){
    this.setState({formVisible: true});
  }

  render() {
    let visibleContent = null;
    if (this.state.formVisible) {
      visibleContent = <NewSmokerForm onNewUserCreation={this.props.onNewUserCreation}/>;
    } else {
      visibleContent = <WelcomePage onWelcomeConfirmation={this.handleWelcomeConfirmation}/>
    }
    return (
      <div>
        {visibleContent}
      </div>
    )
  }
}

WelcomeControl.propTypes = {
  onNewUserCreation: PropTypes.func
}

export default WelcomeControl;
