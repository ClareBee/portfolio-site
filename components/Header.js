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

  return (
    <div className="header">
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
      <div className="header__links">
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
