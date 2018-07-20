import React from 'react';
import Header from './Header';
import DetailsList from './DetailsList'
import { Switch, Route } from 'react-router-dom';
import Time from './Time';
import NewSmokerForm from './NewSmokerForm';

function App() {
    return (
      <div className="conatainerStyles">
        <Header />
        <Switch>
          <Route exact path='/' component={NewSmokerForm} />
          <Route path='/details' component={DetailsList} />
        </Switch>
      </div>
    );
  }

export default App;
