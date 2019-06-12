/* eslint-disable no-param-reassign */

/*
 *
 * SideBar reducer
 *
 */

import { produce } from 'immer';
import { UPDATE_SELECTED_MENU } from './constants';

export const initialState = {
  sideBarMenus: [
    {
      id: 'allClients',
      label: 'All Clients',
      role: 'admin',
      icon: 'people',
    },
    {
      id: 'allTransactions',
      label: 'All Transactions',
      role: 'user',
      icon: 'repeat',
    },
    {
      id: 'about',
      label: 'About',
      role: 'user',
      icon: 'info',
    },
  ],
  selectedMenu: 'allTransactions',
};

const sideBarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_SELECTED_MENU: {
        draft.selectedMenu = action.menuId;
        break;
      }
      default:
        break;
    }
  });

export default sideBarReducer;
