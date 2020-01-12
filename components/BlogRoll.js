import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const BlogRoll = (props) => {
  console.log('blog roll', props)
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      <ul>
        {props.allBlogs.length >= 1 && props.allBlogs.map(blog => (
          <Link
            key={blog.slug}
            // href="/blog/[id]" as={`/blog/${blog.slug}`}
            href={{ pathname: `/blog/${blog.slug}` }}
          >
            <a>
            <li>
              <div>
                <img src={require(`../images/${blog.document.data.banner}`)} alt={blog.document.data.banner} />
              </div>
              <div>
                <h2>{blog.document.data.title}</h2>
                <h4>{blog.document.data.subtitle}</h4>
                <h3><span>{blog.document.data.author} -</span> {reformatDate(blog.document.data.date)}</h3>
                <ReactMarkdown source={truncateSummary(blog.document.content.replace(/<[/]?[pb]>/g, ''))} />
              </div>
            </li>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default BlogRoll;
