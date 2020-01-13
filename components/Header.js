import Link from './Link';
import { useState, useEffect } from 'react';
import { FaLightbulb } from 'react-icons/fa';

const Checkbox = props => (
  <input type="checkbox" id="checkbox" {...props} />
)

const Header = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    const darkMode = currentTheme === 'dark'
    if (darkMode) { setChecked(true) }
    const mode = (checked || darkMode ) ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  })

  const toggleMode = () => {
    const mode = checked ? 'dark' : 'light';
    setChecked(!checked)
    localStorage.setItem('theme', checked)
  }

  const logoLink = () => (
    <div className="header__logo-link">
      <svg height="100" width="100">
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(45)">
            <stop offset="5%"  stopColor="var(--bg-color)" />
            <stop offset="50%" stopColor="var(--secondary-color)" />
            <stop offset="95%" stopColor="var(--primary-color)" />
          </linearGradient>
        </defs>
        <Link href="/">
          <a>
            <circle cx="50" cy="50" r="40" stroke="url(#myGradient)" strokeWidth="3" fill="transparent" />
            <text className="header__logo-text" x="50%" y="50%" textAnchor="middle" fontSize="35px" fontFamily="Roboto" dy=".3em">CB</text>
          </a>
        </Link>
      </svg>
    </div>
  )

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
      <Link href="/CV">
        <a className="link">CV</a>
      </Link>
      <Link href="/contact">
        <a className="link">Contact</a>
      </Link>
    </div>
  )

  const hamburgerMenu = () =>  (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__msg">MENU</span>
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link href="/">
                <a className="navigation__link"><span>01</span>Projects</a>
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/blog">
                <a className="navigation__link"><span>02</span>Blog</a>
              </Link>
            </li>

            <li className="navigation__item">
              <Link href="/about">
                <a className="navigation__link"><span>03</span>About</a>
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/CV">
                <a className="navigation__link"><span>04</span>CV</a>
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/contact">
                <a className="navigation__link"><span>05</span>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )

  return (
    <div className="header">
      {logoLink()}
      <div className="header__links">
        {navLinks()}
        {hamburgerMenu()}
        <div className="mode-switch-container">
          <label className="mode-switch" htmlFor="checkbox">
            <Checkbox
              checked={checked}
              onChange={toggleMode}
            />
            <div className="lightbulb">
              <FaLightbulb />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
};

export default Header;
