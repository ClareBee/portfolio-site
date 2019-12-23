import Link from './Link';

const Header = () => (
  <div>
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
  </div>
);

export default Header;
