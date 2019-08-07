import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Card, Button, Row, Col, Statistic } from 'antd';

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
  history,
  updateHeroProfile,
  isUpdating
}) => {
  const [editingData, setEditingData] = useState({});
  const [remaingPoint, setRemaingPoint] = useState(0);

  useEffect(() => {
    if (match.params.heroId) {
      updateSelectedHero(match.params.heroId);
      fetchHeroProfile(match.params.heroId);
    }
  }, [match.params.heroId]);

  useEffect(() => {
    setEditingData(profileData);
    setRemaingPoint(0);
  }, [profileData]);

  const handleGoToList = useCallback(() => {
    history.push('/heroes');
    updateSelectedHero(undefined);
  }, [history, updateSelectedHero, updateHeroProfile]);

  const handleMinus = useCallback(
    (key) => {
      setRemaingPoint(remaingPoint + 1);
      setEditingData({
        ...editingData,
        [key]: (editingData[key] -= 1)
      });
    },
    [editingData, remaingPoint]
  );

  const handlePlus = useCallback(
    (key) => {
      setRemaingPoint(remaingPoint - 1);
      setEditingData({
        ...editingData,
        [key]: (editingData[key] += 1)
      });
    },
    [editingData, remaingPoint]
  );

  const handleSave = useCallback(() => {
    updateHeroProfile(match.params.heroId, editingData);
  }, [match.params.heroId, editingData, updateHeroProfile]);

  return (
    <div className="container" style={{ marginTop: 20 }}>
      {!heroesIsFetching && (
        <Card
          title={generalData.name}
          extra={
            <Button type="link" onClick={handleGoToList}>
              Close
            </Button>
          }
          loading={profileIsFetching}
        >
          <Row gutter={16}>
            <Col sm={24} md={12}>
              <table className={styles.table}>
                <tbody>
                  {KEY_LIST.map((key) => (
                    <tr key={key}>
                      <td>
                        <span>{key.toUpperCase()}:</span>
                      </td>
                      <td>
                        <Button
                          type="primary"
                          shape="circle"
                          icon="minus"
                          size="small"
                          className={styles.minusBtn}
                          onClick={() => handleMinus(key)}
                          disabled={editingData[key] <= 0}
                        />
                        {editingData[key]}
                        <Button
                          type="primary"
                          shape="circle"
                          icon="plus"
                          size="small"
                          className={styles.plusBtn}
                          onClick={() => handlePlus(key)}
                          disabled={remaingPoint <= 0}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
            <Col sm={24} md={12}>
              <Statistic title="Remaing Point" value={remaingPoint} />
              <Button
                type="primary"
                style={{ marginTop: 30 }}
                onClick={handleSave}
                loading={isUpdating}
                disabled={remaingPoint > 0}
              >
                Save
              </Button>
            </Col>
          </Row>
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
  profileData: PropTypes.shape().isRequired,
  updateHeroProfile: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool.isRequired
};

export default React.memo(HeroProfile);
