import Link from 'next/link';
import PropTypes from 'prop-types';
import PictureSet from './PictureSet';

function PromotedBlog({
  blog,
  blog: {
    document: { content },
  },
}) {
  const promotedBlog = blog.document.data;
  const { alt_text: altText } = promotedBlog;

  const truncateSummary = content => {
    return content.slice(0, 250).trimEnd() + '...';
  };
  const tags = promotedBlog.tags.map(tag => {
    return (
      <li key={tag} className="tag-icon">
        {tag}
      </li>
    );
  });
  return (
    <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
      <a className="promoted">
        <div className="promoted__container">
          <div className="promoted__img">
            <PictureSet
              pictureName={promotedBlog.banner}
              altText={altText}
            />
          </div>
          <div className="promoted__content">
            <div className="promoted__title">
              <h1 className="blog__title">{promotedBlog.title}</h1>
              <span className="promoted__msg">Pinned</span>
            </div>
            <h2 className="blog__subtitle">
              {promotedBlog.subtitle}
            </h2>
            <p>{truncateSummary(content)}</p>
            <div className="blog-list__read-more">Read More</div>
            <ul className="tag-icons">{tags}</ul>
          </div>
        </div>
      </a>
    </Link>
  );
}

PromotedBlog.propTypes = {
  blog: PropTypes.shape({
    slug: PropTypes.string,
    document: PropTypes.shape({
      content: PropTypes.string,
      data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        banner: PropTypes.string,
        tags: PropTypes.array,
        /*eslint-disable */
        alt_text: PropTypes.string,
        /*eslint-enable */
      }),
    }),
  }),
};
export default PromotedBlog;
