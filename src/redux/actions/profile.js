import axios from 'axios';
import { setAlert } from './alert';
import {loadUser} from './auth';

import {GET_EXECUTIVE,GET_EXECUTIVES,GET_HRS,EDIT_EXECUTIVE,EDIT_HR, EXECUTIVE_ERROR, HR_ERROR, ADD_EXECUTIVE, ADD_HR} from './types';
// Get current users profile
// export const getCurrentProfile = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/profile/me');

//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Get all profiles
export const getProfiles = () => async dispatch => {
  // dispatch({type: CLEAR_PROFILE });

  try {
    const res = await axios.get('/api/hr/all_executive');

    dispatch({
      type: GET_EXECUTIVES,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
    console.log(err);
  }
};

// Get profile bu ID
// export const getProfileById = userId => async dispatch => {
//   try {
//     const res = await axios.get(`/api/profile/user/${userId}`);

//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// // Get Github repos
// export const getGithubRepos = username => async dispatch => {
  
//   try {
//     const res = await axios.get(`/api/profile/github/${username}`);

//     dispatch({
//       type: GET_REPOS,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };


// // Create or update profile 
// export const createProfile = (FormData, history, edit = false) => async dispatch => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//     const res = await axios.post('/api/profile', FormData, config);

//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data
//     });

//     dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created','success'));

//     if(!edit) {
//       history.push('/dashboard');
//     }
//   } catch (err) {
//     const errors = err.response.data.errors;
//     if(errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Add experience 

// export const addExperience = (FormData, history) => async dispatch => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//     const res = await axios.put('/api/profile/experience', FormData, config);

//     dispatch({
//       type: UPDATE_PROFILE,
//       payload: res.data
//     });

//     dispatch(setAlert('Experience Added','success'));
    
//     history.push('/dashboard');
//   } catch (err) {
//     const errors = err.response.data.errors;
    
//     if(errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// }


// // Add education 

// export const addEducation = (FormData, history) => async dispatch => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//     const res = await axios.put('/api/profile/education', FormData, config);

//     dispatch({
//       type: UPDATE_PROFILE,
//       payload: res.data
//     });

//     dispatch(setAlert('Education Added','success'));
    
//     history.push('/dashboard');
//   } catch (err) {
//     const errors = err.response.data.errors;
    
//     if(errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Delete experience
// export const deleteExperience = id => async dispatch => {
//   try {
//     const res = await axios.delete(`/api/profile/experience/${id}`);

//     dispatch({
//       type: UPDATE_PROFILE,
//       payload: res.data
//     });

//     dispatch(setAlert('Experience Deleted','success'));
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Delete education
// export const deleteEducation = id => async dispatch => {
//   try {
//     const res = await axios.delete(`/api/profile/education/${id}`);

//     dispatch({
//       type: UPDATE_PROFILE,
//       payload: res.data
//     });

//     dispatch(setAlert('Education Removed','success'));
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };


// // Delete ACCOUNT & PROFILE  
// export const deleteAccount = () => async dispatch => {
//   if(window.confirm('Are you sure? This can NOT be undone!')) {
//     try {
//       await axios.delete(`/api/profile`);
  
//       dispatch({
//         type: CLEAR_PROFILE
//       });
//       dispatch({
//         type: DELETE_ACCOUNT
//       });
  
//       dispatch(setAlert('YOUR ACCOUNT HAS BEEN PERMANENTLY DELETED','danger'));
//     } catch (err) {
//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status }
//       });
//     }
//   }
// };
export const addEmployee = (FormData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('/api/hr/add_executive', FormData, config);

    dispatch({
      type: GET_EXECUTIVES,
      payload: FormData
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};




