import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Row, Col, Card, Spin } from 'antd';

import styles from './HeroList.module.scss';

const HeroList = ({ fetchHeroes, heroes, history, match, selectedHero }) => {
  useEffect(() => {
    if (heroes.needToFetch && !heroes.isFetching) {
      fetchHeroes();
    }
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
              <div
                className={cx(
                  styles.card,
                  selectedHero === item.id ? styles.selected : null
                )}
              >
                <Card
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                  onClick={() => handleGoToProfile(item.id)}
                >
                  <Card.Meta title={item.name} description={`id: ${item.id}`} />
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
  selectedHero: PropTypes.string
};

HeroList.defaultProps = {
  selectedHero: undefined
};

export default React.memo(HeroList);
