import React from "react";
import Logo from "../../images/pflegeteam-pinneberg-logo.svg";
import Button from "../button";
import { Link, navigate } from "gatsby";

const Header = () => {
  return (
    <div id="header">
      <div className="row row-1">
        <div className="col">
          <div className="hyperlinks-wrapper">
            <a className="small" href="">info@pflegeteam-pinneberg.de</a>
            <a className="small" href="">04101 – 604 60 91</a>
            <a className="small" href="">Termin Vereinbaren</a>
          </div>
          <div className="languages-wrapper">
            <a className="small" href="">DE</a>
            <a className="small" href="">EN</a>
          </div>
        </div>
      </div>
      <div className="row row-2">
        <div className="col">
          <Logo className="logo" onClick={() => navigate("/")}/>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/ueber-uns">Über uns</Link>
            <Link to="/karriere">Karriere</Link>
            <Link to="/kontakte">Kontakte</Link>
          </nav>
          <div className="buttons-wrapper">
            <Button label='Jetzt Bewerben' />
            <Button label='Ruf uns an!' />
          </div>
        </div>
        </div>
    </div>
  )
};

export default Header;