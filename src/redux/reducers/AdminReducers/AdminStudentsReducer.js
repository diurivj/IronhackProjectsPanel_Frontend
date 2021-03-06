import * as types from '../../actions/actionTypes';
import initialState from "../initialState";

export default function AdminStudentsReducer(state = initialState.students, action) {
  switch (action.type) {
    case types.GET_STUDENTS:
      return action.students;
    case types.CREATE_STUDENT:
      return [
        ...state,
        {...action.student}
      ];

    default:
      return state;
  }
}