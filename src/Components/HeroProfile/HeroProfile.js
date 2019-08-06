import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Spin } from 'antd';

import styles from './HeroProfile.module.scss';

const HeroProfile = ({ fetchHeroProfile, match }) => {
  useEffect(() => {
    if (match.params.heroId) {
      fetchHeroProfile(match.params.heroId);
    }
  }, [match.params.heroId])
  return (
    <div>

    </div>
  );
};

HeroProfile.propTypes = {
  fetchHeroProfile: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired
};

export default React.memo(HeroProfile);
