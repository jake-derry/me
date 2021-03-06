// pages/nearme.js

import Layout from "../components/Layout";
import Page from "../components/Page";
import BigText from "../components/BigText";

const NearMeView = props => 
    <Layout>
      <Page>
        <BigText>Contact me</BigText>
        <p>
          Feel free to connect with me through <a 
            href="https://www.linkedin.com/in/jk-derry/">LinkedIn</a>, 
          check out my <a href="http://www.github.com/jake-derry/">GitHub</a>,
          or send me an email at <code>jacob.derry AT duke.edu</code> (I
          use AT instead of the @ symbol to prevent web scraping).
        </p>
      </Page>
    </Layout>;

export default NearMeView;
