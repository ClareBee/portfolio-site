import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import Spinner from '../components/Spinner';

import Timeline from '../components/Timeline';
import Path from '../components/Path';
/* eslint-disable */
const GsapWrapper = dynamic(
  () => import('../higher_order_components/gsapwrapper'),
  {
    loading: () => <Spinner />,
    ssr: false,
  },
);
/* eslint-enable */
export default function Journey() {
  return (
    <Layout title="Journey">
      <PageTitle
        title="Journey"
        subtitle="Discover where I've lived and worked. Drag the big pink circle along the timeline to any of the dots..."
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
