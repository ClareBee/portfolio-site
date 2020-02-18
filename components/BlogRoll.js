import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const BlogRoll = props => {
  console.log('blog roll', props);
  function truncateSummary(content) {
    return content.slice(0, 150).trimEnd() + '...';
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    // TODO: not supported by all browsers - refactor not to use locale
    return date.toLocaleString('en-GB', options);
  }

  function orderByRecentFirst(blogs) {
    return blogs.sort(blog => blog.document.data.date).reverse();
  }

  return (
    <ul className="blog-list">
      {props.allBlogs.length >= 1 &&
        orderByRecentFirst(props.allBlogs).map(blog => (
          <Link
            key={blog.slug}
            href="/blog/[id]"
            as={`/blog/${blog.slug}`}
            // href={{ pathname: `/blog/${blog.slug}` }}
          >
            <a className="blog">
              <li>
                <div className="blog__header">
                  <h3 className="heading-3 blog__title">
                    {blog.document.data.title}
                  </h3>
                  <p>
                    <span className="blog__date">
                      {reformatDate(blog.document.data.date)}
                    </span>
                  </p>
                </div>

                <h4 className="heading-5 blog__subtitle">
                  {blog.document.data.subtitle}
                </h4>
                <ReactMarkdown
                  source={truncateSummary(
                    blog.document.content.replace(/<[/]?[pb]>/g, ''),
                  )}
                />
                <div className="blog-list__read-more">Read More</div>
              </li>
            </a>
          </Link>
        ))}
    </ul>
  );
};

export default BlogRoll;
