import Layout from '../components/Layout';
import Icons from '../components/Icons';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Layout title="Contact">
      <p>Contact page</p>
      <ContactForm />
      <Icons />
    </Layout>
  );
}
