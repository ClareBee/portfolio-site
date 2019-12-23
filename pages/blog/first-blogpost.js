import { useRouter } from 'next/router'

const BlogPost = () => {
  const router = useRouter()
  const { pid } = router.query
  console.log(pid)

  return <p>Blog: {pid}</p>
}

export default BlogPost
