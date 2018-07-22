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
      quitStats: [
        {
          time: "20 Min",
          benefit: "Your blood pressure, pulse rate and the temperature of your hands and feet have returned to normal."
        },
        {
          time: "8 Hours",
          benefit: "Remaining nicotine in your bloodstream has fallen to 6.25% of normal peak daily levels, a 93.75% reduction."
        },
        {
          time: "12 Hours",
          benefit: "Your blood oxygen level has increased to normal. Carbon monoxide levels have dropped to normal."
        },
        {
          time: "24 Hours",
          benefit: "Anxieties have peaked in intensity and within two weeks should return to near pre-cessation levels."
        },
        {
          time: "48 Hours",
          benefit: "Damaged nerve endings have started to regrow and your sense of smell and taste are beginning to return to normal. Cessation anger and irritability will have peaked."
        },
        {
          time: "72 Hours",
          benefit: "Your entire body will test 100% nicotine-free. Over 90% of all nicotine metabolites (the chemicals nicotine breaks down into) have passed from your body via your urine.  Symptoms of chemical withdrawal have peaked in intensity, including restlessness. Unless use cues have been avoided, the number of cue induced crave episodes experienced during any quitting day have peaked for the 'average' ex-user. Lung bronchial tubes leading to air sacs (alveoli) are beginning to relax in recovering smokers. Breathing is becoming easier and your lung's functional abilities are improving."
        },
        {
          time: "5-8 Days",
          benefit: "The 'average' ex-smoker is down to experiencing just three cue induced crave episodes per day. Although we may not be 'average' and although minutes may feel like hours when normal cessation time distortion combines with the body's panic response, it is unlikely that any single episode will last longer than 3 minutes. Keep a clock handy and time the episode to maintain an honest perspective on time."
        },
      ],
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
          <Route path='/health' render={()=><Health quitStats={this.state.quitStats} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
