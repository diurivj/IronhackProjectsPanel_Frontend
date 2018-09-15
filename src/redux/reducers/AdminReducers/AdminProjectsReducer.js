import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function adminProjectsReducer(state = initialState.projects, action){
  switch (action.type) {
    case types.CREATE_PROJECT:
      return [...action.projects];
      case types.GET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}