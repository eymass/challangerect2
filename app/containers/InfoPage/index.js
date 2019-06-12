/**
 *
 * InfoPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectInfoPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function InfoPage() {
  useInjectReducer({ key: 'infoPage', reducer });
  useInjectSaga({ key: 'infoPage', saga });

  return (
    <div>
      <Helmet>
        <title>InfoPage</title>
        <meta name="description" content="Description of InfoPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

InfoPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  infoPage: makeSelectInfoPage(),
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
  memo,
)(InfoPage);
