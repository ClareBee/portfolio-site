import Link from 'next/link';
import PropTypes from 'prop-types';

const PromotedBlog = ({
  blog,
  blog: {
    document: { content },
  },
}) => {
  const promotedBlog = blog.document.data;
  const { alt_text: altText } = promotedBlog;

  function truncateSummary(content) {
    return content.slice(0, 250).trimEnd() + '...';
  }
  const tags = promotedBlog.tags.map(tag => {
    return (
      <li key={tag} className="tag-icon">
        {tag}
      </li>
    );
  });
  return (
    <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
      <a className="promoted-blog">
        <div className="promoted-blog__container">
          <div className="promoted-blog__img">
            <img
              src={require(`../images/${promotedBlog.banner}`)}
              alt={altText}
            />
          </div>
          <div className="promoted-blog__content">
            <div className="promoted-blog__title">
              <h1 className="blog__title">{promotedBlog.title}</h1>
              <span className="promoted-blog__msg">Pinned</span>
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
};

PromotedBlog.propTypes = {
  blog: PropTypes.shape({
    slug: PropTypes.string,
    document: PropTypes.shape({
      content: PropTypes.object,
      data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        banner: PropTypes.string,
        tags: PropTypes.array,
        alt_text: PropTypes.string,
      }),
    }),
  }),
};
export default PromotedBlog;
