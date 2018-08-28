import * as types from '../actionTypes';
import * as cohortServices from '../../../services/cohortServices';

//actions
export const getCohortsSuccess = (cohorts) => (
  { type: types.GET_COHORTS, cohorts }
);

export const createCohortSuccess = (cohort) => (
  { type: types.CREATE_COHORT, cohort}
);

export const updateCohortSuccess = (cohort) => (
  { type: types.UPDATE_COHORT, cohort}
);

//thunks
export const loadCohorts = () => (dispatch) => {
  cohortServices.getCohorts()
    .then(cohorts => dispatch(getCohortsSuccess(cohorts)))
    .catch(error => console.log(error))
};

export const createCohort = (newCohort) => (dispatch) => {
  cohortServices.createCohort(newCohort)
    .then(cohort => dispatch(createCohortSuccess(cohort)))
    .catch(error => console.log(error))
};

export const updateCohort = (changes, id) => (dispatch) => {
  cohortServices.updateCohort(changes, id)
    .then(cohort => dispatch(updateCohortSuccess(cohort)))
    .catch(error => console.log(error))
};