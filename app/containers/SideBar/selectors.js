import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sideBar state domain
 */

const selectSideBarDomain = state => state.sideBar || initialState;

/**
 * Other specific selectors
 */
const makeSelectSideBarSelectedMenu = () =>
  createSelector(
    selectSideBarDomain,
    substate => substate.selectedMenu,
  );

const makeSelectSideBarMenus = () =>
  createSelector(
    selectSideBarDomain,
    substate => substate.sideBarMenus,
  );

/**
 * Default selector used by SideBar
 */

const makeSelectSideBar = () =>
  createSelector(
    selectSideBarDomain,
    substate => substate,
  );

export default makeSelectSideBar;
export {
  selectSideBarDomain,
  makeSelectSideBarSelectedMenu,
  makeSelectSideBarMenus,
};
