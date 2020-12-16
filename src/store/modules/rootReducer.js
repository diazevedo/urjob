import { combineReducers } from 'redux';

import favourite from './favourite/reducer';
import position from './position/reducer';
import jobs from './jobs/reducer';

export default combineReducers({ favourite, position, jobs });
