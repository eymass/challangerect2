import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the infoPage state domain
 */

const makeSelectAppDomain = state => state.app || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by InfoPage
 */

const makeSelectApp = () =>
  createSelector(
    makeSelectAppDomain,
    substate => substate,
  );

export default makeSelectApp;
export { makeSelectAppDomain };
