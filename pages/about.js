// pages/about.js

import "./about.scss";

import Layout from "../components/Layout";
import Title from "../components/Title";
import Page from "../components/Page";
import ImageText from "../components/ImageText";
import Link from "next/link";

const About = props => 
  <div>
    <Layout>
      <Page>
        <Title>Why <span className="highlight">code</span>?</Title>
        <ImageText 
          imageSource="/images/profile.png" 
          imageAltText="A portrait of me"
          align="Left">
          <div>
            <p>
              My journey to code began in high school. I always tell people that I
              wouldn't have been accepted to Duke University without accessible 
              educational technology. Khan Academy gave me a free place to practice
              the SAT; Georgia Virtual School provided me with enough AP credits to
              be competitive; and a free online college support program helped me 
              write essays that made me competitive.
            </p>
            <p>
              All of these resources were free to me. They gave me the only chance
              I had to compete, but not everyone at my school even finished high
              school. Software provided me with an amazing opportunity, so I feel
              a deep desire to give back to the world lines of opportunity.
            </p>
          </div>
        </ImageText>
        <Title>So what <span className="highlight">now</span>?</Title>
        <ImageText 
          imageSource="/images/bandwidth.png" 
          imageAltText="The Bandwidth company logo"
          align="Right">
          <p>
            Currently, I write software at <a href="https://www.bandwidth.com">Bandwidth</a>,
            a company that provides businesses with the ability to connect to their
            customers through messaging, voice, and emergency services. My work
            is in deliverability insights (helping our customers determine how
            well their SMS and MMs messages is getting out).
          </p>
          <p>
            I also <span className="highlight">always</span> have projects that
            I'm working on which stay updated on my <Link href="/projects">projects</Link> page.
          </p>
        </ImageText>
      </Page>
    </Layout>
  </div>;

export default About;
