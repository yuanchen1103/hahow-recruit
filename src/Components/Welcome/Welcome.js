import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './Welcome.module.scss';

const Welcome = ({ history }) => {
  const handleGotoHeroes = React.useCallback(() => {
    history.push('/heroes');
  }, []);
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div className={styles.landing}></div>
      <h1 className={styles.title}>Explore Your Heroes !!</h1>
      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={handleGotoHeroes}
        className={styles.welcomeBtn}
      >
        GET STARTED
      </Button>
    </div>
  );
};

Welcome.propTypes = {
  history: PropTypes.shape().isRequired
};

export default React.memo(Welcome);
