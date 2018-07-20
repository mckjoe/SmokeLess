import React from 'react';
import Header from './Header';
import DetailsList from './DetailsList'
import { Switch, Route } from 'react-router-dom';
import Time from './Time';
import WelcomeControl from './WelcomeControl';
import Error404 from './Error404';
import Info from './Info';
import Health from './Health';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterSmokerDetails: []
    };
    this.handleCreatingNewUser = this.handleCreatingNewUser.bind(this);
  }

  handleCreatingNewUser(newUser) {
    var newMasterSmokerDetails = this.state.masterSmokerDetails.slice();
    newMasterSmokerDetails.push(newUser);
    this.setState({masterSmokerDetails: newMasterSmokerDetails});
  }

  render(){
    return (
      <div className="conatainerStyles">
        <Header />
        <Switch>

          <Route exact path='/' render={()=><WelcomeControl onNewUserCreation={this.handleCreatingNewUser} />} />

          <Route path='/details' render={()=><DetailsList smokerDetails={this.state.masterSmokerDetails} />} />

          <Route path='/time' component={Time} />
          <Route path='/info' component={Info} />
          <Route path='/health' component={Health} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
