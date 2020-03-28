import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../higher_order_components/scrollmagic'),
  { ssr: false },
);

function ScrollMagic() {
  return (
    <Layout title="scroll" location>
      <DynamicComponentWithNoSSR />
    </Layout>
  );
}

export default ScrollMagic;
