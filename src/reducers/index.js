import { combineReducers } from 'redux';
import solutionsReducer from './solutionsReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
    solutions: solutionsReducer,
    navigation: navigationReducer
});