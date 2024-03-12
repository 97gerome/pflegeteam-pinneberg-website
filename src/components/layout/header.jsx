import React from "react";
import Logo from "../../images/pflegeteam-pinneberg-logo.svg";
import Button from "../button";

const Header = () => {
  return (
    <div id="header">
      <div className="row">
        <div className="hyperlinks-wrapper">
          <a href="">info@pflegeteam-pinneberg.de</a>
          <a href="">04101 – 604 60 91</a>
          <a href="">Termin Vereinbaren</a>
        </div>
        <div className="languages-wrapper">
          <a href="">DE</a>
          <a href="">EN</a>
        </div>
      </div>
      <div className="row">
        <Logo className="logo" />
        <nav>
          <a href="">Home</a>
          <a href="">Leistungen</a>
          <a href="">Über uns</a>
          <a href="">Karriere</a>
          <a href="">Kontakte</a>
        </nav>
        <div className="buttons-wrapper">
          <Button label='Jetzt Bewerben' />
          <Button label='Ruf uns an!' />
        </div>
      </div>
    </div>
  )
};

export default Header;