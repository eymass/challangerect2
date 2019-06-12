/* eslint-disable global-require */
/**
 *
 * LoginPage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PageWrapper from 'components/Common/PageWrapper';
import LoginLayout from 'components/Login/LoginLayout';
import { debounce } from 'utils/debounce';
import Card from '@material-ui/core/Card';
import LoginForm from 'components/Login/LoginForm';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/es/styles/withStyles';
import H4 from 'components/H4';
import ErrorMessage from 'components/Common/ErrorMessage';
import { makeSelectError } from 'containers/AuthProvider/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import makeSelectLoginPage from './selectors';
import { loginFieldChange } from './actions';
import { authenticate } from '../AuthProvider/actions';
import styles from './styles';

/**
 * Login Page main Container.
 * onChange Field (debounce)
 * onSubmit Login (debounce)
 */
const key = 'loginPage';
const debounceTimeout = 300;

function LoginPage({ classes, error, dispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  /**
   * Username change
   * @param e
   */
  const handleUsernameChange = e => {
    onUsernameChange(e.target.value);
  };

  const dispatchUsernameChange = value => {
    dispatch(loginFieldChange('username', value));
  };

  const onUsernameChange = debounce(dispatchUsernameChange, debounceTimeout);

  /**
   * Password change
   * @param e
   */
  const handlePasswordChange = e => {
    onPasswordChange(e.target.value);
  };

  const dispatchPasswordChange = value => {
    dispatch(loginFieldChange('password', value));
  };

  const onPasswordChange = debounce(dispatchPasswordChange, debounceTimeout);

  /**
   * Submit Login
   */
  const dispatchSubmit = () => {
    debugger;
    dispatch(authenticate());
  };

  const submit = debounce(dispatchSubmit, debounceTimeout);

  /**
   * Render
   * @returns {*}
   */
  return (
    <Fragment>
      <div className="loginRoot backgroundImage">
        <PageWrapper height="100vh" textAlign="center">
          <LoginLayout>
            <Card
              classes={{ root: classes.cardRoot }}
              className={classes.loginCard}
            >
              <CardContent classes={{ root: classes.cardContentRoot }}>
                <div className={classes.logoLoginRoot}>
                  <img
                    className={classes.logoLogin}
                    src={require('images/nsure_logo.png')}
                  />
                </div>
                <LoginForm
                  forgotPasswordClass={classes.forgotPasswordClass}
                  handlePasswordChange={handlePasswordChange}
                  submit={submit}
                  handleUsernameChange={handleUsernameChange}
                  formControlClass={classes.formControl}
                  inputClass={classes.input}
                />
              </CardContent>
            </Card>
            <ErrorMessage error={error} messageHeight="16px" marginTop="2%" />
          </LoginLayout>
        </PageWrapper>
      </div>
    </Fragment>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  error: makeSelectError(),
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
)(LoginPage);
