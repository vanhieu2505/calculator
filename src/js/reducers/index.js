import { combineReducers } from 'redux';
import calculatoreReducer from './calculatorReducer';

export default combineReducers({
    calState: calculatoreReducer
});