import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Accordion from '../components/Accordion';

export default function About() {
  return (
    <Layout title="About">
      <PageTitle
        title="About"
        subtitle="Some background on me & the path I've taken..."
      />
      <Accordion />
    </Layout>
  );
}
