import PropTypes from 'prop-types';
import Link from './Link';

const Pagination = ({ pagesArray, currentPage }) => {
  console.log('array', pagesArray, currentPage);
  const sequence = (active, presentPage, index) => {
    if (active) return;
    return index < Number(presentPage) ? 'prev' : 'next';
  };
  const pageLinks = () => {
    return pagesArray.map((_page, index) => {
      const isCurrent = index + 1 === Number(currentPage);
      const style = isCurrent ? 'active' : '';

      return (
        <Link
          key={index}
          href={{
            pathname: `/blog`,
            query: { page: index + 1 },
          }}
        >
          <a
            className={style}
            rel={sequence(isCurrent, currentPage, index)}
          >
            {index + 1}
          </a>
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
