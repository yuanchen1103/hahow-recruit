import { combineReducers } from 'redux';

import heroes from './heroes';
import heroProfile from './heroProfile';

const allReducers = combineReducers({ heroes, heroProfile });

export default allReducers;
