import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './configureStore';

import WelcomeContainer from './Components/Welcome/WelcomeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={WelcomeContainer} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
