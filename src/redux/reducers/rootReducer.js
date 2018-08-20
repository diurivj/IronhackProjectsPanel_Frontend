import {combineReducers} from 'redux';
import students from './AdminReducers/AdminStudentsReducer';
import cohorts from './AdminReducers/AdminCohortsReducer';

// VERY IMPORTANT!!!! NAMING REDUCERS AS IDK //

const rootReducer = combineReducers({
  students,
  cohorts
});

export default rootReducer;