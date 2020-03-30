import PropTypes from 'prop-types';
import Link from './Link';

const Pagination = ({ pagesArray, currentPage }) => {
  const pageLinks = () => {
    return pagesArray.map((page, index) => {
      const style = index + 1 === Number(currentPage) ? 'active' : '';
      return (
        <Link key={index} href={`/blog?page=${index + 1}`}>
          <a className={style}>{index + 1}</a>
        </Link>
      );
    });
  };
  return <div className="pagination">{pageLinks()}</div>;
};

Pagination.propTypes = {
  pagesArray: PropTypes.array,
  currentPage: PropTypes.string,
};
export default Pagination;
