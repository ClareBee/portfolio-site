import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';

function Error({ statusCode }) {
  return (
    <Layout title="error">
      <PageTitle title="Oops" subtitle="Something went wrong!" />
      <div className="status-code">
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : 'An error occurred on the client'}
        </p>
      </div>
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
  statusCode: PropTypes.number,
};
export default Error;
