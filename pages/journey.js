import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import Timeline from '../components/Timeline';
import Path from '../components/Path';
const GsapWrapper = dynamic(
  () => import('../higher_order_components/gsapwrapper'),
  {
    ssr: false,
  },
);
export default function Journey() {
  return (
    <Layout title="Journey">
      <PageTitle
        title="Journey"
        subtitle="Drag the circle to discover where I've lived and worked..."
      />
      <div className="journey">
        <GsapWrapper>
          <div className="draggable-container"></div>
          <Timeline />
          <div className="svg-container">
            <Path />
          </div>
          <div id="pathNavigator"></div>
        </GsapWrapper>
      </div>
    </Layout>
  );
}
