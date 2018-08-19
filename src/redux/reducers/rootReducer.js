import {combineReducers} from 'redux';
import adminStudents from './AdminReducers/AdminStudentsReducer';
import adminCohorts from './AdminReducers/AdminCohortsReducer';

const rootReducer = combineReducers({
  adminStudents,
  adminCohorts
});

export default rootReducer;