import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './configureStore';

import WelcomeContainer from './Components/Welcome/WelcomeContainer';
import HeroList from './Components/HeroList/HeroList';

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
          <Route path="/heroes" component={HeroList} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
