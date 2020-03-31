import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Icons = () => (
  <div className="social-media-icons">
    <a
      href="https://twitter.com/clarie_bee"
      target="blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
    </a>
    <a
      href="https://www.linkedin.com/in/clareblackburne/"
      target="blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://github.com/ClareBee"
      target="blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
  </div>
);

export default Icons;
