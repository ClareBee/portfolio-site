import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
const GsapWrapper = dynamic(
  () => import('../components/gsapwrapper'),
  {
    ssr: false,
  },
);

export default function About() {
  return (
    <Layout title="About">
      <PageTitle title="About" subtitle="" />
      <GsapWrapper>
        <div className="about-section">
          <div className="poop">****</div>
          <svg
            width="993"
            height="646"
            viewBox="0 0 993 646"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path"
              d="M1 1C115.8 102.2 262.5 45 322 88C381.5 131 131.5 169.5 138 220C144.5 270.5 443.5 131.5 471.5 178C499.5 224.5 118.728 377.836 157 421.5C195.272 465.164 669.7 238.763 707 288.5C744.3 338.237 422 505 447 554.5C472 604 888 382 960.5 421.5C1033 461 714.5 552.5 745 594C775.5 635.5 960.5 582.5 984.5 594C1008.5 605.5 960.5 644.5 960.5 644.5"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </GsapWrapper>
    </Layout>
  );
}
