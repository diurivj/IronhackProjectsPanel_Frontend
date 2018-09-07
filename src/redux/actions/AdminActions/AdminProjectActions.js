import * as types from '../actionTypes';
import * as projectServices from '../../../services/projectServices';

export const createProjectSuccess = (project) => (
  { type: types.CREATE_PROJECT, project }
);

export const createProject = (info) => (dispatch) => {
  projectServices.createProject(info)
    .then(project => dispatch(createProjectSuccess(project)))
    .catch(error => console.log(error))
};



