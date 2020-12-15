import { combineReducers } from 'redux';

import favourite from './favourite/reducer';
import position from './position/reducer';

export default combineReducers({ favourite, position });
