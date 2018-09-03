import * as types from '../actionTypes';
import * as userServices from '../../../services/authServices';

//actions
export const createUserSuccess = (user) => (
  { type: types.CREATE_USER, user }
);

export const getLoggedUserSuccess = (user) => (
  { type: types.GET_USER, user }
);

export const updateUserProfileSuccess = (profile) => (
  { type: types.UPDATE_USER, profile }
);

export const updatePasswordSuccess = (password) => (
  { type: types.UPDATE_PASSWORD, password}
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

export const createUser = (user) => (dispatch) => {
  userServices.signUp(user)
    .then(newUser => {
      dispatch(createUserSuccess(newUser))
    })
    .catch(error => console.log(error))
};

export const updatePassword = (password) => (dispatch) => {
 userServices.updatePassword(password)
   .then(userUpdated => {
     dispatch(updatePasswordSuccess(userUpdated))
   })
   .catch(error => console.log(error))
};