import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import PDFView from '../higher_order_components/PDFView';

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
