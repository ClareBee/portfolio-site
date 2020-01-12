import Link from 'next/link';
import { useRouter } from 'next/router';

export default ({ href, children }) => {
  const router = useRouter();
  let className = children.props.className || '';
  if (router.pathname === href && children.type !== 'svg') {
    className = `${className} selected`
  }
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
