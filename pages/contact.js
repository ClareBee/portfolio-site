import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Layout title="Contact">
      <PageTitle title="Contact" subtitle="" />
      <ContactForm />
    </Layout>
  );
}
