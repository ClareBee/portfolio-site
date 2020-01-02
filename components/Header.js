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
      <Link href="/">
        <a className="link">Projects</a>
      </Link>
      <Link href="/blog">
        <a className="link">Blog</a>
      </Link>
      <Link href="/resume">
        <a className="link">Resume</a>
      </Link>
      <Link href="/about">
        <a className="link">About</a>
      </Link>
      <Link href="/contact">
        <a className="link">Contact</a>
      </Link>
      <div>
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
  )
};

export default Header;
