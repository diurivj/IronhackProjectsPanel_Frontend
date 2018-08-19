import * as types from '../actionTypes';
import * as cohortServices from '../../../services/cohortServices';

//actions
export const getCohortsSuccess = (cohorts) => (
  { type: types.GET_COHORTS, cohorts }
);

//thunks
export const loadCohorts = () => (dispatch) => {
  cohortServices.getCohorts()
    .then(cohorts => {
      dispatch(getCohortsSuccess(cohorts));
      console.log(cohorts);
    })
    .catch(error => console.log(error))
};