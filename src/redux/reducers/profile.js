import {
  GET_HRS,
  HR_ERROR,
  EDIT_HR,
  ADD_HR,
  ADD_EXECUTIVE,
  GET_EXECUTIVE,
  EDIT_EXECUTIVE,
  EXECUTIVE_ERROR,
  GET_EXECUTIVES
} from '../actions/types';

const initialState = {
  profilesHR: [],
  profileHR: null,
  profileEmployee: null,
  profilesEmployee: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EXECUTIVE:
    case EDIT_EXECUTIVE:
      return {
        ...state,
        profileEmployee: payload,
        loading: false,
      };
      case GET_HRS:
          return {
            ...state,
            profilesHR: payload,
            loading: false,
          };
          case EDIT_HR:
            return {
              ...state,
              profileHR: payload,
              loading: false,
            };
          
    case GET_EXECUTIVES:
      return {
        ...state,
        profilesEmployee: payload,
        loading: false
      }
    case HR_ERROR:
      case EXECUTIVE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
