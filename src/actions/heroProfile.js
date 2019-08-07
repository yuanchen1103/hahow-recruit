import axios from 'axios';
import {message} from 'antd';
import { CALL_API } from '../middleware/api';
import { API_ROOT } from '../utils/request';

export const FETCH_HERO_PROFILE_REQUEST = 'FETCH_HERO_PROFILE_REQUEST';
export const FETCH_HERO_PROFILE_SUCCESS = 'FETCH_HERO_PROFILE_SUCCESS';
export const FETCH_HERO_PROFILE_FAILURE = 'FETCH_HERO_PROFILE_FAILURE';

export const fetchHeroProfile = (heroId) => ({
  [CALL_API]: {
    types: [
      FETCH_HERO_PROFILE_REQUEST,
      FETCH_HERO_PROFILE_SUCCESS,
      FETCH_HERO_PROFILE_FAILURE
    ],
    endpoint: `heroes/${heroId}/profile`,
    headers: { 'Content-Type': 'application/json' }
  }
});

export const UPDATE_SELECTED_HERO = 'UPDATE_SELECTED_HERO';

export const updateSelectedHero = (heroId) => ({
  type: UPDATE_SELECTED_HERO,
  heroId
});

export const UPDATE_HERO_PROFILE_REQUEST = 'UPDATE_HERO_PROFILE_REQUEST';
export const UPDATE_HERO_PROFILE_SUCCESS = 'UPDATE_HERO_PROFILE_SUCCESS';
export const UPDATE_HERO_PROFILE_FAILURE = 'UPDATE_HERO_PROFILE_FAILURE';

// fetch bug: method 'patch'
export const updateHeroProfile = (heroId, data) => (dispatch) => {
  dispatch({
    type: UPDATE_HERO_PROFILE_REQUEST
  });

  axios({
    method: 'patch',
    url: `${API_ROOT}heroes/${heroId}/profile`,
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      message.success('Update Success');
      dispatch({
        type: UPDATE_HERO_PROFILE_SUCCESS,
        response: res.data
      });
    })
    .catch((err) => {
      message.error('Update Error')
      dispatch({
        type: UPDATE_HERO_PROFILE_FAILURE,
        error: err
      });
    });
};
