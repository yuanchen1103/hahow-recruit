import {
  FETCH_HERO_PROFILE_REQUEST,
  FETCH_HERO_PROFILE_SUCCESS,
  FETCH_HERO_PROFILE_FAILURE,
  UPDATE_SELECTED_HERO,
  UPDATE_HERO_PROFILE_REQUEST,
  UPDATE_HERO_PROFILE_SUCCESS,
  UPDATE_HERO_PROFILE_FAILURE
} from '../actions/heroProfile';

const initState = {
  isFetching: false,
  isUpdating: false
};

const heroProfile = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_HERO:
      return {
        ...state,
        selectedHero: action.heroId
      };
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
    case UPDATE_HERO_PROFILE_REQUEST:
      return {
        ...state,
        isUpdating: true
      };
    case UPDATE_HERO_PROFILE_SUCCESS:
    case UPDATE_HERO_PROFILE_FAILURE:
      return {
        ...state,
        isUpdating: false
      };
    default:
      return state;
  }
};

export default heroProfile;
