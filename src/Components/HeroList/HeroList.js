import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Spin } from 'antd';

import styles from './HeroList.module.scss';
import metalIcon from '../../assets/img/metal.svg';

const HeroList = ({
  fetchHeroes,
  heroes,
  history,
  match,
  selectedHero,
  updateSelectedHero
}) => {
  // did mount
  useEffect(() => {
    if (heroes.needToFetch && !heroes.isFetching) {
      fetchHeroes();
    }
  }, []);

  // will unmount
  useEffect(() => {
    return () => {
      updateSelectedHero(undefined);
    };
  }, []);

  const handleGoToProfile = useCallback((id) => {
    history.push(`${match.path}/${id}`);
  }, []);

  return (
    <div className="container">
      {heroes.isFetching ? (
        <div className={styles.spinContainer}>
          <Spin />
        </div>
      ) : (
        <Row gutter={40}>
          {heroes.list.map((item) => (
            <Col sm={8} md={6} key={item.id}>
              <div className={styles.card}>
                <Card
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                  onClick={() => handleGoToProfile(item.id)}
                  size="small"
                >
                  <Card.Meta title={item.name} description={`id: ${item.id}`} />
                  {selectedHero === item.id && (
                    <img src={metalIcon} alt="metal-icon" className={styles.metalIcon}/>
                  )}
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

HeroList.propTypes = {
  fetchHeroes: PropTypes.func.isRequired,
  heroes: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  selectedHero: PropTypes.string,
  updateSelectedHero: PropTypes.func.isRequired
};

HeroList.defaultProps = {
  selectedHero: undefined
};

export default React.memo(HeroList);
