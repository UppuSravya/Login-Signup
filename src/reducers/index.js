import { combineReducers } from 'redux';
import login from '../reducers/login';
const rootReducer = combineReducers({
    status: login
})

export default rootReducer;