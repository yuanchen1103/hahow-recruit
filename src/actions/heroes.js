import { CALL_API } from '../middleware/api';

export const FETCH_HEROES_REQUEST = 'FETCH_HEROES_REQUEST';
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const FETCH_HEROES_FAILURE = 'FETCH_HEROES_FAILURE';

export const fetchHeroes = () => ({
  [CALL_API]: {
    types: [FETCH_HEROES_REQUEST, FETCH_HEROES_SUCCESS, FETCH_HEROES_FAILURE],
    endpoint: 'heroes',
    headers: { 'Content-Type': 'application/json' }
  }
});
