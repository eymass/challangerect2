/*
 *
 * SideBar actions
 *
 */

import { DEFAULT_ACTION, UPDATE_SELECTED_MENU } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateSelectedMenu(menuId) {
  return {
    menuId,
    type: UPDATE_SELECTED_MENU,
  };
}
