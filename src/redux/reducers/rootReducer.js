import {combineReducers} from 'redux';
import students from './AdminReducers/AdminStudentsReducer';
import cohorts from './AdminReducers/AdminCohortsReducer';
import user from './AdminReducers/AdminUsersReducer';

// VERY IMPORTANT!!!! NAMING REDUCERS AS IDK //

const rootReducer = combineReducers({
  students,
  cohorts,
  user
});

export default rootReducer;