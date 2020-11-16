// pages/projects.js

import Layout from "../components/Layout";
import Page from "../components/Page";
import Title from "../components/Title";
import Project from "../components/Project";
import { getSortedProjectsData } from '../lib/projects'

export default function Projects ({ allProjectsData }) {
  return <Layout>
    <Page>
      <Title>Projects</Title>
      {allProjectsData.map(({ id, preview, date, title }) => (
        <Project title={title} text={preview}></Project>
      ))}
    </Page>
  </Layout>;
}


export async function getStaticProps() {
  const allProjectsData = await getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}