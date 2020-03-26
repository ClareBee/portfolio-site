import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Timeline from '../components/Timeline';
import Path from '../components/Path';
const GsapWrapper = dynamic(
  () => import('../components/gsapwrapper'),
  {
    ssr: false,
  },
);

export default function About() {
  return (
    <Layout title="About">
      <PageTitle
        title="About"
        subtitle="Drag the circle to see where I've studied & lived..."
      />
      <GsapWrapper>
        <div className="draggable-container"></div>
        <Timeline />
        <div className="svg-container">
          <Path />
        </div>
        <div id="navigator"></div>
      </GsapWrapper>
    </Layout>
  );
}
