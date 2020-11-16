// components/BigText.js

import "./Title.scss";

const Title = props => (
  <div className="Title">
    {props.children}
    <div className="SubTitle">{props.subtitle}</div>
  </div>
);

export default Title;
