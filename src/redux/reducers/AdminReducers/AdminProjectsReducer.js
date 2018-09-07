import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function adminProjectsReducer(state = initialState.project, action){
  switch (action.type) {
    case types.CREATE_PROJECT:
      return {...action.project};
    default:
      return state;
  }
}