import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Animal from './animal';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <h2>Shortcuts</h2>
            <ul>
              <li>
                <Link to ='/'>Home</Link>
              </li>
              <li>
                <Link to ='/dogs'>Dogs</Link>
              </li>
              <li>
                <Link to ='/cats'>Cats</Link>
              </li>
              <li>
                <Link to ='/birds'>Birds</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/dogs' key='dogs'>
                <Animal animal = 'dogs'/>
              </Route>
              <Route path='/cats' key='cats'>
                <Animal animal = 'cats'/>
              </Route>
              <Route path='/birds' key='birds'>
                <Animal animal = 'birds'/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
