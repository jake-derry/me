import Layout from '../../components/Layout'
import Page from '../../components/Page'
import Title from '../../components/Title'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { ExternalLink } from 'react-feather';

import "./[id].scss";


export default function Post({ postData }) {
  return <Layout>
    <Page>
      <Title subtitle={postData.date}>
        {postData.title}
      </Title>
      <div className= "Post" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Page>
  </Layout>
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
