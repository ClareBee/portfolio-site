import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

function reformatDate(fullDate) {
  const date = new Date(fullDate)
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  return date.toLocaleString('en-GB', options);
}

export default function Blog(props) {
  const frontmatter = props.data
  const markdownContent = props.content
  return (
    <Layout title={props.siteTitle}>
      <article className="blog-post">
        <div className="blog-post__header">
          <h1 className="heading-1">{frontmatter.title}</h1>
          <p><span>{frontmatter.author} -</span> {reformatDate(frontmatter.date)}</p>
        </div>
        <hr className="divider" />
        <h4 className="heading-4 blog-post__subtitle">{frontmatter.subtitle}</h4>
        <img className="blog-post__img" src={require(`../../images/${frontmatter.banner}`)} alt={frontmatter.alt_text} />
        <div>
          <ReactMarkdown source={markdownContent} />
        </div>
      </article>
    </Layout>
  )
}

Blog.getInitialProps = async function(context) {
  const { slug } = context.query
  const content = await import(`../../blog_posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  // gray-matter parses yaml frontmatter from md file
  const data = matter(content.default)
  return {
    siteTitle: config.title,
    ...data,
  }
}
