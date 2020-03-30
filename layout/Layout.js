import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import '../styles.scss';
import { CSSTransition } from 'react-transition-group';

const Layout = ({ title, children }) => {
  const [pageTitle, setPageTitle] = useState('');
  const [footerVisibility, setFooterVisibility] = useState(false);
  useEffect(() => {
    setPageTitle(title);
    setFooterVisibility(true);
  }, [pageTitle]);
  return (
    <div className="container">
      <Meta title={title} />
      <Header />
      <CSSTransition
        in={!!pageTitle}
        timeout={200}
        classNames="my-node"
        unmountOnExit
      >
        <div className="content">{children}</div>
      </CSSTransition>
      <Footer footerVisibility={footerVisibility} />
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Layout;
