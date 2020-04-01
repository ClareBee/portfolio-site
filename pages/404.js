import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';

const NotFound = () => {
  return (
    <Layout title="error">
      <PageTitle title="Oops" subtitle="Something went wrong!" />
      <div className="status-code">
        <p>404: not found</p>
      </div>
    </Layout>
  );
};

export default NotFound;
