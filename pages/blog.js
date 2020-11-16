// pages/blog.js

import Layout from "../components/Layout";
import Page from "../components/Page";
import Title from "../components/Title";
import Post from "../components/Post";
import { getSortedPostsData } from '../lib/posts'

export default function Projects ({ allPostsData }) {
  return <Layout>
    <Page>
      <Title>Posts</Title>
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