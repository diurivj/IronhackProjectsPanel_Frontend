import {loadCohorts} from "./AdminActions/AdminCohortActions";
import {loadStudents} from "./AdminActions/AdminStudentActions";

export const checkUser = () => (dispatch) => {
  if (!localStorage.getItem('user')) return;
  const user = JSON.parse(localStorage.getItem('user'));
  if(user.role === 'admin') {
    //admin actions
    dispatch(loadCohorts());
    dispatch(loadStudents());
  } else {
    //dist actions
    console.log('it works?');
  }
};