/* eslint-disable global-require */
/**
 *
 * SideBar
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import List from '@material-ui/core/es/List/List';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectSideBarMenus,
  makeSelectSideBarSelectedMenu,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import DrawerRow from './DrawerRow';

const key = 'sideBar';
/* eslint-disable react/prefer-stateless-function */
export function SideBar({ sideBarMenus, classes, dispatch, selectedMenu }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [isOpen, setIsOpen] = React.useState(true);

  const toggleDrawer = () => {
    const isOpenNew = !isOpen;
    setIsOpen(isOpenNew);
  };

  const getMenuButtons = sideBarButtons => {
    const rows = [];
    if (sideBarButtons && sideBarButtons.map) {
      sideBarButtons.map(row =>
        rows.push(
          <DrawerRow
            classes={classes}
            isOpen={isOpen}
            key={row.id}
            dispatch={dispatch}
            row={row}
            iconClass={
              row.id === selectedMenu ? classes.iconSelected : classes.icon
            }
            rowTextClass={classes.rowText}
            rowClass={
              row.id === selectedMenu
                ? classes.drawerSelectedRow
                : classes.drawerRow
            }
          />,
        ),
      );
    }
    return rows;
  };

  return (
    <Fragment>
      <div className={classes.drawerRoot}>
        <Drawer
          variant="permanent"
          open={isOpen}
          className={
            isOpen
              ? classNames(classes.drawerOpen, 'sideBarBackground')
              : classNames(classes.drawerClosed, 'sideBarBackground')
          }
          classes={{
            paper: isOpen
              ? classNames(classes.drawerOpen, 'sideBarBackground')
              : classNames(classes.drawerClosed, 'sideBarBackground'),
          }}
        >
          <div className={classes.logoRoot}>
            <img
              className={isOpen ? classes.logoLogin : classes.logoLoginNone}
              src={require('images/logo.png')}
            />
            <div className={classes.toggleButton} onClick={toggleDrawer}>
              <ArrowBack
                style={{ color: '#fff' }}
                className={isOpen ? '' : classes.rotateButton}
              />
            </div>
          </div>
          <List>{getMenuButtons(sideBarMenus)}</List>
        </Drawer>
      </div>
    </Fragment>
  );
}

SideBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  sideBarMenus: PropTypes.array.isRequired,
  selectedMenu: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sideBarMenus: makeSelectSideBarMenus(),
  selectedMenu: makeSelectSideBarSelectedMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withStyles(styles),
)(SideBar);
