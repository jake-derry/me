// pages/blog.js

import Layout from "../components/Layout";
import Page from "../components/Page";
import BigText from "../components/BigText";
import Post from "../components/Post";
import { getSortedPostsData } from '../lib/posts'

export default function Projects ({ allPostsData }) {
  return <Layout>
    <Page>
      <BigText>Posts</BigText>
      {allPostsData.map(({ id, preview, date, title }) => (
        <Post id={id} title={title} date={date} text={preview}></Post>
      ))}
    </Page>
  </Layout>;
}


export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}