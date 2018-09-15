import {combineReducers} from 'redux';
import students from './AdminReducers/AdminStudentsReducer';
import cohorts from './AdminReducers/AdminCohortsReducer';
import user from './AdminReducers/AdminUsersReducer';
import projects from './AdminReducers/AdminProjectsReducer';

// VERY IMPORTANT!!!! NAMING REDUCERS AS IDK //

const rootReducer = combineReducers({
  students,
  cohorts,
  user,
  projects
});

export default rootReducer;