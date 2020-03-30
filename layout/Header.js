import Link from './Link';
import { useState, useEffect } from 'react';
import { FaLightbulb } from 'react-icons/fa';

const Checkbox = props => (
  <input type="checkbox" id="checkbox" {...props} />
);

const Header = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    const darkMode = currentTheme === 'dark';
    if (darkMode) {
      setChecked(true);
    }
    const mode = checked || darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  });

  const toggleMode = () => {
    setChecked(!checked);
    localStorage.setItem('theme', checked);
  };

  const logoLink = () => (
    <div className="header__logo-link">
      <svg height="100" width="100">
        <defs>
          <linearGradient
            id="myGradient"
            gradientTransform="rotate(45)"
          >
            <stop offset="5%" stopColor="var(--bg-color)" />
            <stop offset="50%" stopColor="var(--secondary-color)" />
            <stop offset="95%" stopColor="var(--primary-color)" />
          </linearGradient>
        </defs>
        <Link href="/">
          <a>
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#myGradient)"
              strokeWidth="3"
              fill="transparent"
            />
            <text
              className="header__logo-text"
              x="50%"
              y="50%"
              textAnchor="middle"
              fontSize="35px"
              fontFamily="Roboto"
              dy=".3em"
            >
              CB
            </text>
          </a>
        </Link>
      </svg>
    </div>
  );

  const navLinks = () => (
    <div className="nav-links">
      <Link href="/">
        <a className="link">Projects</a>
      </Link>
      <Link href="/blog">
        <a className="link">Blog</a>
      </Link>
      <Link href="/about">
        <a className="link">About</a>
      </Link>
      <Link href="/journey">
        <a className="link">Journey</a>
      </Link>
      <Link href="/CV">
        <a className="link">CV</a>
      </Link>
      <Link href="/contact">
        <a className="link">Contact</a>
      </Link>
    </div>
  );

  const hamburgerMenu = () => (
    <div className="hamburger">
      <input
        type="checkbox"
        className="hamburger__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="hamburger__button">
        <span className="hamburger__text">MENU</span>
        <span className="hamburger__icon">&nbsp;</span>
      </label>
      <div className="hamburger__background">&nbsp;</div>
      <nav className="hamburger__nav">
        <ul className="hamburger__list">
          <li className="hamburger__item">
            <Link href="/">
              <a className="hamburger__link">
                <span>01</span>Projects
              </a>
            </Link>
            <hr className="divider" />
          </li>
          <li className="hamburger__item">
            <Link href="/blog">
              <a className="hamburger__link">
                <span>02</span>Blog
              </a>
            </Link>
            <hr className="divider" />
          </li>

          <li className="hamburger__item">
            <Link href="/about">
              <a className="hamburger__link">
                <span>03</span>About
              </a>
            </Link>
            <hr className="divider" />
          </li>
          <li className="hamburger__item">
            <Link href="/journey">
              <a className="hamburger__link">
                <span>03</span>Journey
              </a>
            </Link>
            <hr className="divider" />
          </li>
          <li className="hamburger__item">
            <Link href="/CV">
              <a className="hamburger__link">
                <span>05</span>CV
              </a>
            </Link>
            <hr className="divider" />
          </li>
          <li className="hamburger__item">
            <Link href="/contact">
              <a className="hamburger__link">
                <span>06</span>Contact
              </a>
            </Link>
            <hr className="divider" />
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <header className="header">
      {logoLink()}
      <nav className="header__links">
        {navLinks()}
        <div className="theme-switch-container">
          <label className="theme-switch" htmlFor="checkbox">
            <Checkbox checked={checked} onChange={toggleMode} />
            <div className="lightbulb">
              <FaLightbulb />
            </div>
          </label>
        </div>
        {hamburgerMenu()}
      </nav>
    </header>
  );
};

export default Header;
