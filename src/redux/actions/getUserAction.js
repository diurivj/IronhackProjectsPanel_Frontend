import {loadCohorts} from "./AdminActions/AdminCohortActions";

export const getUser = () => (dispatch) => {
  if (!localStorage.getItem('user')) return;
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.role === "admin") {
    //dispatch admin actions
    dispatch(loadCohorts());
  } else {
    //do nothing
  }
};