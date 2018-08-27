import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function adminUsersReducer(state = initialState.user, action){
  switch (action.type) {
    case types.GET_USER:
      return action.user;
    case types.UPDATE_USER:
      return {...action.user};
    default:
      return {...state};
  }
}