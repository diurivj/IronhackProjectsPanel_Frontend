import {combineReducers} from 'redux';
import students from './AdminReducers/AdminStudentsReducer';
import cohorts from './AdminReducers/AdminCohortsReducer';
import user from './AdminReducers/AdminUsersReducer';
import project from './AdminReducers/AdminProjectsReducer';

// VERY IMPORTANT!!!! NAMING REDUCERS AS IDK //

const rootReducer = combineReducers({
  students,
  cohorts,
  user,
  project
});

export default rootReducer;