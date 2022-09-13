import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
