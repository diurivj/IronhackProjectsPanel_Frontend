import * as types from '../actionTypes';
import * as projectServices from '../../../services/projectServices';

export const createProjectSuccess = (project) => (
  { type: types.CREATE_PROJECT, project }
);

export const loadUserProjectsSuccess = (projects) => (
    { type: types.GET_PROJECTS, projects }
);

export const createProject = (info) => (dispatch) => {
  projectServices.createProject(info)
    .then(project => dispatch(createProjectSuccess(project)))
    .catch(error => console.log(error))
};

export const loadUserProjects = (id) => (dispatch) => {
  projectServices.getUserProjects(id)
      .then(projects => {
          dispatch(loadUserProjectsSuccess(projects.projects))
      })
};



