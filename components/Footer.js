import "./Footer.scss";
import Link from "next/link";

const Footer = props => (
  <div className="Footer">
    Written in <code className="CodeHighlight">next.js</code>. 
    Check out the <span className="Link">
        <Link href="http://www.github.com">source code</Link>
      </span>.
  </div>
);

export default Footer;
