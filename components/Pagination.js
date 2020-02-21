import PropTypes from 'prop-types';
import Link from './Link';

const Pagination = props => {
  const pageLinks = () => {
    return props.pagesArray.map((page, index) => {
      const style =
        index + 1 === Number(props.currentPage) ? 'active' : '';
      return (
        <Link key={index} href={`/blog?page=${index + 1}`}>
          <a className={style}>{index + 1}</a>
        </Link>
      );
    });
  };
  return <div className="pagination">{pageLinks()}</div>;
};

export default Pagination;
