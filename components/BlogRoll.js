import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const BlogRoll = (props) => {
  console.log('blog roll', props)
  function truncateSummary(content) {
    return content.slice(0, 150).trimEnd() + "...";
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <div className="blog-container">
      <ul className="blog-list">
        {props.allBlogs.length >= 1 && props.allBlogs.map(blog => (
          <Link
            key={blog.slug}
            href="/blog/[id]" as={`/blog/${blog.slug}`}
            // href={{ pathname: `/blog/${blog.slug}` }}
          >
            <a>
            <li>
              <div>
                <h3 className="heading-3">{blog.document.data.title}</h3>
                <h4 className="heading-4">{blog.document.data.subtitle}</h4>
                <p><span>{blog.document.data.author} -</span> {reformatDate(blog.document.data.date)}</p>
                <ReactMarkdown source={truncateSummary(blog.document.content.replace(/<[/]?[pb]>/g, ''))} />
                <div className="blog-list__read-more">Read More</div>
              </div>
            </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogRoll;
