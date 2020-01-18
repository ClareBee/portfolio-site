import Link from 'next/link';

const PromotedBlog = ({blog}) => {
  console.log(blog)
  const promotedBlog = blog.document.data;
  const content = blog.document.content;

  function truncateSummary(content) {
    return content.slice(0, 250).trimEnd() + "...";
  }
  console.log(promotedBlog.tags)
  const tags = promotedBlog.tags.map(tag => {
      return (<li key={tag} className="tag-icon">{tag}</li>)
    });
  // console.log(tags);
  return (
    <Link
      key={blog.slug}
      href={{ pathname: `/blog/${blog.slug}` }}
    >
    <a className="promoted-blog">
    <div className="promoted-blog__container">
      <div className="promoted-blog__img">
        <img src={require(`../images/${promotedBlog.banner}`)} alt={promotedBlog.alt_text} />

      </div>
      <div className="promoted-blog__content">
        <div className="promoted-blog__title">
          <h1 className="blog__title">{promotedBlog.title}</h1>
          <span className="promoted-blog__msg">Pinned</span>
        </div>
        <h2 className="blog__subtitle">{promotedBlog.subtitle}</h2>
        <p>{truncateSummary(content)}</p>
        <div className="blog-list__read-more">Read More</div>

        <ul className="tag-icons">{tags}</ul>
      </div>
    </div>
    </a>
    </Link>
  )
}

export default PromotedBlog;
