/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from 'global-styles';
import { createStructuredSelector } from 'reselect';
import AuthProvider from 'containers/AuthProvider';
import { withRouter } from 'react-router-dom';
import AuthSync from 'containers/AuthProvider/AuthSync';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import makeSelectApp from './selectors';
import reducer from './reducer';

function App({ app }) {
  useInjectReducer({ key: 'infoPage', reducer });

  return (
    <div>
      <MuiThemeProvider theme={app.theme}>
        <AuthProvider />
        <AuthSync />
        <GlobalStyle />
      </MuiThemeProvider>
    </div>
  );
}

App.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
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
  withRouter,
)(App);
