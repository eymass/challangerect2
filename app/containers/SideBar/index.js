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
import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import List from '@material-ui/core/es/List/List';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import makeSelectSideBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import DrawerRow from './DrawerRow';

const key = 'sideBar';
/* eslint-disable react/prefer-stateless-function */
export function SideBar({ sideBar, classes, dispatch }) {
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
            row={row}
            className={classes.drawerRow}
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
          className={isOpen ? classes.drawerOpen : classes.drawerClosed}
          classes={{
            paper: isOpen ? classes.drawerOpen : classes.drawerClosed,
          }}
        >
          <div className={classes.buttonRoot}>
            <div className={classes.toggleButton} onClick={toggleDrawer}>
              <ArrowBack
                style={{ color: '#fff' }}
                className={isOpen ? '' : classes.rotateButton}
              />
            </div>
          </div>
          <List>{getMenuButtons(sideBar.sideBarButtons)}</List>
        </Drawer>
      </div>
    </Fragment>
  );
}

SideBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  sideBar: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sideBar: makeSelectSideBar(),
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
