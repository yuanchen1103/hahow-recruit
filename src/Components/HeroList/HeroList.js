import React from 'react';

import { Row, Col, Card } from 'antd';

import styles from './HeroList.module.scss';

const HeroList = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Row gutter={16}>
          <Col sm={8} md={6}>
            <div className={styles.card}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
                  />
                }
              >
                <Card.Meta title="Daredevil" description="id: 1" />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default React.memo(HeroList);
