import Icons from '../components/Icons';
import PropTypes from 'prop-types';

const Footer = ({ footerVisibility }) => (
  <footer
    className={footerVisibility ? 'footer footer__show' : 'footer'}
  >
    <p>
      &copy; 2020{' '}
      <a
        href="https://github.com/ClareBee"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        ClareBee
      </a>
      . Made with{' '}
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        NextJS
      </a>{' '}
      & hosted by{' '}
      <a
        href="https://zeit.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        ZEIT
      </a>
    </p>
    <Icons />
  </footer>
);

Footer.propTypes = {
  footerVisibility: PropTypes.bool.isRequired,
};
export default Footer;
