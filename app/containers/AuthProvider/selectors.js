import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authProvider state domain
 */

const selectAuthProviderDomain = state => state.authProvider || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthProvider
 */

const makeSelectAuthProvider = () =>
  createSelector(
    selectAuthProviderDomain,
    substate => substate,
  );

const makeSelectIsAuthenticated = () =>
  createSelector(
    selectAuthProviderDomain,
    substate => substate.isAuthenticated,
  );

const makeSelectUseData = () =>
  createSelector(
    selectAuthProviderDomain,
    substate => substate.userData,
  );

const makeSelectError = () =>
  createSelector(
    selectAuthProviderDomain,
    substate => substate.error,
  );

export default makeSelectAuthProvider;
export {
  selectAuthProviderDomain,
  makeSelectIsAuthenticated,
  makeSelectError,
  makeSelectUseData,
};
