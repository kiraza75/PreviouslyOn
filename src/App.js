import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, withRouter
} from "react-router-dom";
import Home from './components/Home';

import LogForm from "./components/login"
import Serie from './components/Serie';

class App extends React.Component {

  render() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={LogForm}/>
        <Route exact path={"/home"} render={withRouter(Home)}/>
        <Route exact path={"/series/:id"} render={withRouter(Serie)}/>
      </Switch>
    </Router>
  )
  }
}

export default App;
