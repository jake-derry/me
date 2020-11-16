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
