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
        subtitle="Drag the circle along the to see where I've studied & lived..."
      />
      <div>
        It&apos;s been a twisty path, but one full of adventure! After
        studying European Literature & Critical Thinking in Oxford and
        London, I spent nearly 9 years working, travelling and
        volunteering overseas as a teacher, followed by an MRes in
        Human Rights in Glasgow.
      </div>
      <div>
        I took the 16-week software development programme and a 4-week
        UX course in 2017 with the awesome CodeClan & immediately
        started work as a fullstack developer in a fintech startup,
        Castlight, bought by Experian in 2019.
      </div>
      <div>
        In January 2020 I decided to shift towards ReactJS and remote
        work, but as a last hurrah bought a small van and set off
        round the Highlands & Islands of Scotland (while coding online
        thanks to data tethering & platforms such as Frontend
        Masters).
      </div>
      <div>
        Since Covid-19 has cut that journey short, I&apos;m now
        available for a remote FrontEnd role.
      </div>
      <div>
        {' '}
        My main obsessions are everything ReactJS, the JAMstack
        ecosystem & GraphQL. Bringing my global experience, PhD
        research skills and enthusiasm for learning.
      </div>
      <div>Contact me to find out more!</div>
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
