import React from 'react';
import Header from './Header';
import DetailsList from './DetailsList'
import { Switch, Route } from 'react-router-dom';
import Time from './Time';
import WelcomeControl from './WelcomeControl';
import Error404 from './Error404';
import Info from './Info';
import Health from './Health';

function App() {
    return (
      <div className="conatainerStyles">
        <Header />
        <Switch>
          <Route exact path='/' component={WelcomeControl} />
          <Route path='/details' component={DetailsList} />
          <Route path='/time' component={Time} />
          <Route path='/info' component={Info} />
          <Route path='/health' component={Health} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

export default App;
