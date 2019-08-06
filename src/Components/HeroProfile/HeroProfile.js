import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'antd';

import styles from './HeroProfile.module.scss';

const KEY_LIST = ['str', 'int', 'agi', 'luk'];

const HeroProfile = ({
  fetchHeroProfile,
  match,
  updateSelectedHero,
  generalData,
  profileData,
  profileIsFetching,
  heroesIsFetching,
  history
}) => {
  const [editingData, setEditingData] = useState({});

  useEffect(() => {
    if (match.params.heroId) {
      updateSelectedHero(match.params.heroId);
      fetchHeroProfile(match.params.heroId);
    }
  }, [match.params.heroId]);

  useEffect(() => {
    setEditingData(profileData);
  }, [profileData]);

  const handleGoToList = useCallback(() => {
    history.push('/heroes');
  }, []);

  return (
    <div className="container" style={{ marginTop: 20 }}>
      {!heroesIsFetching && (
        <Card
          title={generalData.name}
          extra={<a onClick={handleGoToList}>Close</a>}
          loading={profileIsFetching}
        >
          {KEY_LIST.map((key) => (
            <p>
              {key.toUpperCase()}:
              <Button
                type="primary"
                shape="circle"
                icon="minus"
                size="small"
                className={styles.minusBtn}
              />
              {editingData[key]}
              <Button
                type="primary"
                shape="circle"
                icon="plus"
                size="small"
                className={styles.plusBtn}
              />
            </p>
          ))}
        </Card>
      )}
    </div>
  );
};

HeroProfile.propTypes = {
  fetchHeroProfile: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  updateSelectedHero: PropTypes.func.isRequired,
  profileIsFetching: PropTypes.bool.isRequired,
  heroesIsFetching: PropTypes.bool.isRequired,
  generalData: PropTypes.shape().isRequired,
  profileData: PropTypes.shape().isRequired
};

export default React.memo(HeroProfile);
