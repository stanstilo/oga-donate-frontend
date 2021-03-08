import { combineReducers } from 'redux';
import auth from './Auth';
import Settings from './Settings'


const rootReducer = combineReducers({
    auth,
    settings: Settings
});

export default rootReducer