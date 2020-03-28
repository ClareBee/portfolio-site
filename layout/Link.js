import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const nestedPath = (href, router) =>
  href.match('blog') && router.pathname.match('blog');

const NextLink = ({ href, children }) => {
  const router = useRouter();
  let className = children.props.className || '';
  if (
    (router.pathname === href && children.type !== 'svg') ||
    nestedPath(href, router)
  ) {
    className = `${className} selected`;
  }
  return (
    <Link href={href}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.shape({
    type: PropTypes.string,
    props: PropTypes.shape({
      children: PropTypes.any,
      className: PropTypes.string,
    }),
  }),
};

export default NextLink;
