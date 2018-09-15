import {loadCohorts} from "./AdminActions/AdminCohortActions";
import {loadStudents} from "./AdminActions/AdminStudentActions";
import {getLoggedUser} from "./AdminActions/AdminUsersActions";
import {loadUserProjects} from "./AdminActions/AdminProjectActions";

export const checkUser = () => (dispatch) => {
  if (!localStorage.getItem('user')) return;
  const user = JSON.parse(localStorage.getItem('user'));
  if(user.role === 'admin') {
    //admin actions
    dispatch(getLoggedUser());
    dispatch(loadCohorts());
    dispatch(loadStudents());
      dispatch(loadUserProjects(user._id));
  } else {
    //dist actions
    dispatch(getLoggedUser());
    dispatch(loadUserProjects(user._id));
  }
};