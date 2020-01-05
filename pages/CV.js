import Layout from '../components/Layout';
import PDFView from '../components/PDFView';
import Spinner from '../components/Spinner';

export default function CVPage() {
  return (
    <Layout title="CV">
      <PDFView />
    </Layout>
  );
}
