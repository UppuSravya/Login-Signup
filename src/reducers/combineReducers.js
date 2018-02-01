import { combineReducers } from 'redux';
import getname from '../reducers/index';
const rootReducer = combineReducers({
    fname: getname
})

export default rootReducer;