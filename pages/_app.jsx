import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
