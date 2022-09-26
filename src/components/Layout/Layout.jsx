import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Partner from '../Home/Partner';
export default function Layout() {
  return (
    <>
      <Header />
      <Partner />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
