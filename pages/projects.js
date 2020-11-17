// pages/projects.js

import Layout from "../components/Layout";
import Page from "../components/Page";
import BigText from "../components/BigText";
import Project from "../components/Project";
import { getSortedProjectsData } from '../lib/projects'

export default function Projects ({ allProjectsData }) {
  return <Layout>
    <Page>
      <BigText>Projects</BigText>
      <p>
        I have to do a lot of projects for school, and I also like taking on
        other projects just for fun! Here, you can check out some of my work
        and they even have links to the source code!
      </p>
      {allProjectsData.map(({ id, preview, date, title }) => (
        <Project id={id} title={title} text={preview}></Project>
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