import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './configureStore';
import './assets/styles/index.scss';

import WelcomeContainer from './Components/Welcome/WelcomeContainer';
import HeroListContainer from './Components/HeroList/HeroListContainer';
import HeroProfileContainer from './Components/HeroProfile/HeroProfileContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/heroes">Heroes</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={WelcomeContainer} />
          <Route path="/heroes" component={HeroListContainer} />
          <Route path="/heroes/:heroId" component={HeroProfileContainer} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
