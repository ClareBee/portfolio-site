import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

export default function Blog(props) {
  const frontmatter = props.data
  const markdownContent = props.content
  return (
    <Layout title={props.siteTitle}>
      <article>
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.subtitle}</h4>
        <img src={require(`../../images/${frontmatter.banner}`)} alt={frontmatter.alt_text} />
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
