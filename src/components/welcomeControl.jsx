import React from 'react';
import WelcomePage from './WelcomePage';
import NewSmokerForm from './NewSmokerForm';

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
      visibleContent = <NewSmokerForm />;
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

export default WelcomeControl;
