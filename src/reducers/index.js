import { combineReducers } from 'redux';
import solutionsReducer from './solutionsReducer';

export default combineReducers({
    solutions: solutionsReducer
});