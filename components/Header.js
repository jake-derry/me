// components/Header.js
import Link from "next/link";
import navButtons from "../config/buttons";
import NavBar from "./NavBar";


import "./Header.scss";
import Logo from "./Logo";

const Header = props => (
  <div>
    <Link href="/">
      <div className="Header sticky">
        <Logo/>
        <NavBar navButtons={navButtons} />
      </div>
    </Link>
  </div>
);

export default Header;
