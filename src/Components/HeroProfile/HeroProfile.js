import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Spin } from 'antd';

import styles from './HeroProfile.module.scss';

const HeroProfile = ({ fetchHeroes, heroes }) => {
  return (
    <div></div>
  );
};

HeroProfile.propTypes = {
  fetchHeroes: PropTypes.func.isRequired,
  heroes: PropTypes.shape().isRequired
};

export default React.memo(HeroProfile);
