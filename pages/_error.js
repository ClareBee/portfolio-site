import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

function Error({ statusCode }) {
  return (
    <Layout>
      <PageTitle title="Oops" subtitle="Something went wrong!" />

      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res
    ? res.statusCode
    : err
    ? err.statusCode
    : 404;
  return { statusCode };
};

Error.propTypes = {
  statusCode: PropTypes.string,
};
export default Error;
