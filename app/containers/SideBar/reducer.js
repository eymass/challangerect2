/* eslint-disable no-param-reassign */

/*
 *
 * SideBar reducer
 *
 */

import { produce } from 'immer';

export const initialState = {
  sideBarButtons: [
    {
      id: 1,
      label: 'All Clients',
      role: 'admin',
    },
    {
      id: 2,
      label: 'All Transactions',
      role: 'user',
    },
  ],
};

const sideBarReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      default:
        break;
    }
  });

export default sideBarReducer;
