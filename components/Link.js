import Link from 'next/link';
import { useRouter } from 'next/router';

const nestedPath = (href, router) =>
  href.match('blog') && router.pathname.match('blog');

export default ({ href, children }) => {
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
