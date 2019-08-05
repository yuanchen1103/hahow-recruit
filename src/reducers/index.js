import { combineReducers } from 'redux';

import heroes from './heroes';

const allReducers = combineReducers({ heroes });

export default allReducers;
