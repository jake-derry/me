// pages/index.js
import "./index.scss";

import BigText from "../components/BigText";

import Layout from "../components/Layout";
import LandingPage from "../components/LandingPage";
import SocialIcons from "../components/SocialIcons"

const Index = () => (
  <Layout>
    <LandingPage>
      <BigText>
        Hi, I'm Jake. I write code for good. <SocialIcons />
      </BigText>
      <a href="resume.pdf" download>
        <button className="ResumeButton">Download Resume</button>
      </a>
    </LandingPage>
  </Layout>
);

export default Index;
