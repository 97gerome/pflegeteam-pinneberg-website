import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
