import { CALL_API } from '../middleware/api';

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
