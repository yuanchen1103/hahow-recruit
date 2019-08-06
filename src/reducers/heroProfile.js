import {
  FETCH_HERO_PROFILE_REQUEST,
  FETCH_HERO_PROFILE_SUCCESS,
  FETCH_HERO_PROFILE_FAILURE,
  UPDATE_SELECTED_HERO
} from '../actions/heroProfile';

const initState = {
  isFetching: false
};

const heroProfile = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_HERO:
      return {
        ...state,
        selectedHero: action.heroId
      }
    case FETCH_HERO_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_HERO_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.response
      };
    case FETCH_HERO_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default heroProfile;
