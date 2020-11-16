// pages/index.js
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
    </LandingPage>
  </Layout>
);

export default Index;
