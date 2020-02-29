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
          <p className="blah">blah</p>
          <div className="poop">poop</div>
          <div className="hello">HELLLOOO+++++++</div>
          <div className="hello">HELLLOOO+++++++</div>
          <div className="hello">HELLLOOO+++++++</div>
          <svg
            width="190"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path"
              d="M 10 80 Q 52.5 10, 95 80 T 180 80"
              stroke="black"
              fill="transparent"
            />
          </svg>
          <svg
            height="640"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 640 640"
            width="640"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="curvy"
              d="m69.72 80h20.68l17.23 19.53-1.15 20.67-12.64 16.08-16.08 12.64-12.63 18.38-9.19 19.52 4.59 20.68 17.23 10.34 22.98-2.3 25.27-19.53 19.52-18.37 14.94-13.79 18.37-12.63 21.83-5.75 45.94-16.08 31.02 10.34 8.04 31.01-22.63 23.5-14.13 13.26-17.23 16.08-18.38 11.49-21.82 11.48-19.53 19.53-18.38 19.53-16.08 17.23-17.23 17.23-11.48 17.23-8.04 18.38 5.74 19.52 25.27 8.04 26.42-8.04 20.67-8.04 22.98-17.23 13.78-26.42 18.38-16.08 19.53-12.63 20.67-21.83 18.38-12.63h27.57l21.82 4.59 1.15 28.72-2.3 21.82-5.74 22.98-14.93 14.93-16.08 14.93-16.08 12.64-6.9 19.52-2.29 20.68v20.67l34.46 13.79 27.56-1.15 22.98-21.82 14.93-16.09 12.63-16.08 25.27-4.59 9.19 21.82-2.29 21.83 12.63 17.23 17.23-11.49 12.64-20.68 12.63-2.29 19.53 5.74 9.19 18.38-4.32 22.97 3.92 21.9 8.78 4.06 30.68 9.72c4.12 10.54 8.65 19.21 13.58 26.02s-3.87 21.7-26.42 44.67"
              stroke="black"
              fill="transparent"
            />
          </svg>
        </div>
      </GsapWrapper>
    </Layout>
  );
}
