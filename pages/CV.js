import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import dynamic from 'next/dynamic';
import Spinner from '../components/Spinner';
/* eslint-disable */
const DynamicPDF = dynamic(
  () => import('../higher_order_components/PDFView'),
  { loading: () => <Spinner />, ssr: false },
);
/* eslint-enable */
export default function CVPage() {
  return (
    <Layout title="CV">
      <PageTitle
        title="CV"
        subtitle="Proof of Concept, made with React PDF. For genuine CV contact me directly"
      />
      <DynamicPDF />
    </Layout>
  );
}
