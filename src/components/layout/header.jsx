import React from 'react';
import Logo from '../../images/pflegeteam-pinneberg-logo.svg';
import Button from '../button';
import { Link, navigate } from 'gatsby';

const Header = () => {
  const toHome = () => navigate('/home');
  const toKarriere = () => navigate('/karriere');
  const toKontake = () => navigate('/kontake');

  return (
    <div id="header">
      <div className="row row-1">
        <div className="col">
          <div className="hyperlinks-wrapper">
            <a className="small" href="mailto:info@pflegeteam-pinneberg.de">
              info@pflegeteam-pinneberg.de
            </a>
            <a className="small" href="tel:04101 - 604 60 91">
              04101 &ndash; 604 60 91
            </a>
            <Link className="small" to="/kontakt">
              Termin Vereinbaren
            </Link>
          </div>
          <div className="languages-wrapper">
            <a className="small" href="">
              DE
            </a>
            <a className="small" href="">
              EN
            </a>
          </div>
        </div>
      </div>
      <div className="row row-2">
        <div className="col">
          <Logo className="logo" onClick={toHome} />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/ueber-uns">Über uns</Link>
            <Link to="/karriere">Karriere</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
          <div className="buttons-wrapper">
            <Button label="Jetzt Bewerben" onClick={toKarriere} />
            <Button
              className="white-button bordered"
              label="Ruf uns an!"
              onClick={toKontake}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
