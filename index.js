import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import PersonalWorks from './PersonalWorks';
import AboutMe from './AboutMe';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personal-works" component={PersonalWorks} />
        <Route path="/about-me" component={AboutMe} />
      </Switch>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
