// components/Button.js

import Link from "next/link";

import "./Button.scss";

const Button = props => (
  <div>
    <Link href={props.href}>
      <button className="Button">{props.text}</button>
    </Link>
  </div>
);

export default Button;
