// components/Layout.js
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import "./Layout.scss";
import "./index.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = props => {
  const appTitle = `> jake_derry`;

  return (
    <div className="Layout">
      <Head>
        <title>Jake Derry</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon_io/site.webmanifest"/>
      </Head>
      
      <Header appTitle={appTitle} />
      <div className="ContentWrapper">
        {props.children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
