import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
