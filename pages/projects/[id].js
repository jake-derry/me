import Layout from '../../components/layout'
import Page from '../../components/Page'
import Title from '../../components/Title'
import { getAllProjectIds, getProjectData } from '../../lib/projects'


export default function Project({ postData }) {
  return <Layout>
    <Page>
      <Title>{postData.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Page>
  </Layout>
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id)
  return {
    props: {
      postData
    }
  }
}