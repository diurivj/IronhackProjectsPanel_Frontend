import * as types from '../actionTypes';
import * as studentServices  from '../../../services/studentServices';

//actions
const createStudentSuccess = (student) => (
  {type: types.CREATE_STUDENT, student}
);

// const updateStudentSuccess = (student) => (
//  {type: types.UPDATE_STUDENT, student}
// );

//thunks
export const createStudent = (student) => (dispatch, getState) => {
  studentServices.createStudent(student)
    .then(newStudent => dispatch(createStudentSuccess(newStudent)))
    .catch(error => console.log(error))
};