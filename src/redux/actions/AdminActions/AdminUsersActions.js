import * as types from '../actionTypes';
import * as userServices from '../../../services/authServices';

//actions
export const updateUserProfileSuccess = (profile) => (
  { type: types.UPDATE_USER, profile }
);

export const getLoggedUserSuccess = (user) => (
  { type: types.GET_USER, user}
);

//thunks
export const updateUserProfile = (changes, id) => (dispatch) => {
  userServices.editProfile(changes, id)
    .then(profile => dispatch(updateUserProfileSuccess(profile)))
    .catch(error => console.log(error))
};

export const getLoggedUser = (id) => (dispatch) => {
  userServices.getloggedUser(id)
    .then(user => dispatch(getLoggedUserSuccess(user)))
    .catch(error => console.log(error))
};