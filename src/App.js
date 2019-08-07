import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Button } from 'antd';

import store from './configureStore';
import './assets/styles/index.scss';

import WelcomeContainer from './Components/Welcome/WelcomeContainer';
import HeroListContainer from './Components/HeroList/HeroListContainer';
import HeroProfileContainer from './Components/HeroProfile/HeroProfileContainer';

function App({ location }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="header">
          {location.pathname !== '/' && (
            <Link to="/">
              <Button type="link" shape="round" icon="arrow-left">
                Back To Home
              </Button>
            </Link>
          )}
        </header>
        <div className="main-content">
          <Route path="/" exact component={WelcomeContainer} />
          <div className="background">
            <Route path="/heroes" component={HeroListContainer} />
            <Route path="/heroes/:heroId" component={HeroProfileContainer} />
          </div>
        </div>
      </div>
    </Provider>
  );
}

App.propTypes = {
  location: PropTypes.shape().isRequired
};

export default withRouter(App);
