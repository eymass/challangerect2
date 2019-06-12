/*
 *
 * AuthProvider reducer
 *
 */
import { getDataFromStorage } from 'utils/cookies';
import isFuture from 'date-fns/is_future';
import {
  AUTHENTICATE,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_SUCCESS,
  RESET_APP_STATE,
} from './constants';
import produce from 'immer';

// Get user token from storage
const { token, tokenExpiryTime, userData } = getDataFromStorage();
// Check if user is authenticated
const getIsAuthenticated = (_token, _tokenExpiryTime) => {
  if (_token && _tokenExpiryTime) {
    const tryResult = isFuture(Number(_tokenExpiryTime));
    return tryResult;
  }
  return false;
};

export const initialState = {
  token,
  tokenExpiryTime,
  userData,
  error: null,
  isAuthenticated: getIsAuthenticated(token, tokenExpiryTime),
};

const authProviderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case AUTHENTICATE:
        draft.error = null;
        break;
      /**
       * ====================
       * Authenticate Success
       * ====================
       */
      case AUTHENTICATE_SUCCESS: {
        const authenticated = getIsAuthenticated(
          action.response.token,
          action.response.tokenExpiryTime,
        );
        draft.userData = action.userData;
        draft.error = null;
        draft.token = action.response.token;
        draft.tokenExpiryTime = action.response.tokenExpiryTime;
        draft.isAuthenticated = authenticated;
        break;
      }
      /**
       * ====================
       * Authenticate Error
       * ====================
       */
      case AUTHENTICATE_ERROR:
        draft.error = null;
        break;
      /**
       * ====================
       * Reset App
       * ====================
       */
      case RESET_APP_STATE: {
        draft.userData = null;
        draft.error = null;
        draft.username = null;
        draft.token = '';
        draft.tokenExpiryTime = 0;
        draft.isAuthenticated = false;
        break;
      }
      default:
        draft = draft;
        break;
      }
  });

export default authProviderReducer;
