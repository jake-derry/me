// components/SocialIcons.js

import "./SocialIcons.scss";
import { Linkedin, GitHub } from 'react-feather';

// copied from _colors.scss because of next-scss bug
const highlight = "#5cdb95"

const SocialIcons = props => (
  <span className="Icon">
    <a href="https://www.linkedin.com/in/jk-derry/">
      <Linkedin fill={ highlight }/>
    </a> <a href="https://github.com/jake-derry">
      <GitHub fill={ highlight }/>
    </a>
  </span>
);

export default SocialIcons;
