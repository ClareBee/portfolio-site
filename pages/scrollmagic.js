import dynamic from 'next/dynamic'
import Layout from '../components/Layout';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/scrollmagic'),
  { ssr: false }
)

function ScrollMagic() {
  return (
    <Layout title="scroll">
      <DynamicComponentWithNoSSR />
      <p>HOME PAGE is here!</p>
    </Layout>
  )
}

export default ScrollMagic
