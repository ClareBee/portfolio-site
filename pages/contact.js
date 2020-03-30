import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import ContactEmail from '../components/ContactEmail';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Layout title="Contact">
      <PageTitle
        title="Contact"
        subtitle="Send me an email or use the form to get in touch."
      />
      <ContactEmail />
      <ContactForm />
    </Layout>
  );
}
