import * as types from '../actionTypes';
import * as userServices from '../../../services/authServices';

//actions
export const updateUserProfileSuccess = (profile) => (
  { type: types.UPDATE_USER, profile }
);

//thunks
export const updateUserProfile = (changes, id) => (dispatch) => {
  userServices.editProfile(changes, id)
    .then(profile => dispatch(updateUserProfileSuccess(profile)))
    .catch(error => console.log(error))
};