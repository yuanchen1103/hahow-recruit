import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import HeroListContainer from '../HeroList/HeroListContainer';
import HeroProfileContainer from '../HeroProfile/HeroProfileContainer';

const Heroes = ({ match }) => {
  return (
    <>
      <Route path={`${match.url}`} component={HeroListContainer} />
      <Route path={`${match.url}/:heroId`} component={HeroProfileContainer} />
    </>
  );
};

Heroes.propTypes = {
  match: PropTypes.shape().isRequired
}

export default Heroes;