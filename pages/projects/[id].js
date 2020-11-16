import Layout from '../../components/Layout'
import Page from '../../components/Page'
import Title from '../../components/Title'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import { ExternalLink } from 'react-feather';

import "./[id].scss";


export default function Project({ postData }) {
  return <Layout>
    <Page>
      <Title subtitle={postData.date}>
        {postData.title} <a href={postData.link}><ExternalLink/></a>
      </Title>
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
