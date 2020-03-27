import Layout from '../components/Layout';
import PDFView from '../components/PDFView';
import Spinner from '../components/Spinner';
import PageTitle from '../components/PageTitle';

export default function CVPage() {
  return (
    <Layout title="CV">
      <PageTitle
        title="CV"
        subtitle="Proof of Concept, made with React PDF. For genuine CV contact me directly"
      />
      <PDFView />
    </Layout>
  );
}
