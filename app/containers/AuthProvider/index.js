/**
 *
 * AuthProvider
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withRouter } from 'react-router-dom';
import Menu from 'containers/Menu';
import makeSelectAuthProvider, { makeSelectIsAuthenticated } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Routes from './Routes';
import SideBar from "containers/SideBar/Loadable";
/**
 * Authentication main Container.
 */
// eslint-disable-next-line react/prefer-stateless-function
export class AuthProvider extends React.Component {
  /**
   * render
   * @returns {*}
   */
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Fragment>
        {isAuthenticated ? <SideBar /> : <span />}
        <Routes isAuthenticated={isAuthenticated} />
      </Fragment>
    );
  }
}

AuthProvider.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authProvider: makeSelectAuthProvider(),
  isAuthenticated: makeSelectIsAuthenticated(),
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

const withReducer = injectReducer({ key: 'authProvider', reducer });
const withSaga = injectSaga({ key: 'authProvider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
)(AuthProvider);
