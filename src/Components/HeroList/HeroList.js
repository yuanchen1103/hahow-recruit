import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Row, Col, Card, Spin } from 'antd';

import styles from './HeroList.module.scss';

const HeroList = ({ fetchHeroes, heroes, history, match }) => {
  useEffect(() => {
    if (heroes.needToFetch && !heroes.isFetching) {
      fetchHeroes();
    }
  }, []);

  const handleGoToProfile = useCallback((id) => {
    history.push(`${match.path}/${id}`);
  }, []);

  return (
    <div>
      <div className={styles.wrapper}>
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
                    {/* match.params.heroId === item.id ? styles.selected : null */}
                  )}
                >
                  <Card
                    hoverable
                    cover={<img alt={item.name} src={item.image} />}
                    onClick={() => handleGoToProfile(item.id)}
                  >
                    <Card.Meta
                      title={item.name}
                      description={`id: ${item.id}`}
                    />
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

HeroList.propTypes = {
  fetchHeroes: PropTypes.func.isRequired,
  heroes: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired
};

export default React.memo(HeroList);
