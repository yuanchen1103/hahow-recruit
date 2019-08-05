import {
  FETCH_HEROES_REQUEST,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAILURE
} from '../actions/heroes';

const initState = {
  isFetching: false,
  list: []
};

const heroes = (state = initState, action) => {
  switch (action.type) {
    case FETCH_HEROES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_HEROES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.response
      };
    case FETCH_HEROES_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default heroes;
