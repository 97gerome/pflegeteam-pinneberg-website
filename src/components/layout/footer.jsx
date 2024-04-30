import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../images/pflegeteam-pinneberg-logo-white.svg';
import FacebookLogo from '../../images/facebook-logo-white.svg';
import InstagramLogo from '../../images/instagram-logo.svg';

const Footer = () => {
  return (
    <div id="footer">
      <div className="row">
        <div className="col col-1">
          <h4>Für ein sorgenfreies Leben mit Pflegeteam-Pinneberg</h4>
          <div className="services-wrapper">
            <Link className="extra-large bold" to="/leistungen">
              UNSERE LEISTUNGEN SEHEN
            </Link>
          </div>
        </div>
        <div className="col col-2">
          <p className="large bold">Nützliche Links</p>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/karriere">Karriere</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </div>
        <div className="col col-3">
          <div className="contact-wrapper">
            <p className="large bold">Kontakt</p>
            <p>
              Tel.:&nbsp;
              <a href="tel:04101 - 604 60 91">04101 &ndash; 604 60 91</a>
            </p>
            <p>
              Fax:&nbsp;
              <a href="tel:04101 - 604 76 95">04101 &ndash; 604 76 95</a>
            </p>
            <p>
              Email:&nbsp;
              <a href="mailto:info@pflegeteam-pinneberg.de">
                info@pflegeteam-pinneberg.de
              </a>
            </p>
          </div>
          <p className="address">
            Dingstätte 18
            <br />
            25421 Pinneberg
            <br />
            Deutschland
          </p>
          <div className="socials-wrapper">
            <a
              href="https://www.facebook.com/pflegeteampi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo />
            </a>
            <a
              href="https://www.instagram.com/pflegeteam_pinneberg?igsh=enJkcXNidWZsbzAx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo />
            </a>
          </div>
        </div>
        <div className="col col-4">
          <Logo className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
