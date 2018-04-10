import { combineReducers } from 'redux';
import solutionsReducer from './solutionReducer';

export default combineReducers({
    solutions: solutionsReducer
})