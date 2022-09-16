import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Cta from "../Home/Cta";
export default function Layout() {
  return (
    <>
      <Header />
      <Cta />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
