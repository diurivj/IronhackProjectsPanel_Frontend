import * as types from '../actionTypes';
import * as userServices from '../../../services/authServices';

//actions
export const getLoggedUserSuccess = (user) => (
  { type: types.GET_USER, user }
);

export const updateUserProfileSuccess = (profile) => (
  { type: types.UPDATE_USER, profile }
);

//thunks
export const updateUserProfile = (changes, id) => (dispatch) => {
  userServices.editProfile(changes, id)
    .then(profile => {
      dispatch(updateUserProfileSuccess(profile));
      dispatch(getLoggedUser(profile))
    })
    .catch(error => console.log(error))
};

export const getLoggedUser = () => (dispatch) => {
  userServices.getLoggedUser()
    .then(user => dispatch(getLoggedUserSuccess(user)))
    .catch(error => console.log(error))
};