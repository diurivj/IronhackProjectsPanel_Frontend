import * as types from '../../actions/actionTypes';
import initialState from "../initialState";

export default function adminCohortsReducer(state = initialState.cohorts, action) {
  switch (action.type) {
    case types.GET_COHORTS:
      return action.cohorts;
    default:
      return state;
  }
}