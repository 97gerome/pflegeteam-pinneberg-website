import React from 'react';
import FacebookLogo from '../images/facebook-logo-atlantis.svg';
import InstagramLogo from '../images/instagram-logo-atlantis.svg';
import ContactForm from '../components/contact-form';
import GoogleMaps from '../components/google-maps';
import { coordinates } from '../utils/map';

const Kontakt = () => {
  return (
    <main id="kontakt">
      <section id="ihr_kontakt_zu_uns">
        <div className="row row-1">
          <h3>Ihr Kontakt zu uns</h3>
        </div>
        <div className="row row-2">
          <div className="col col-1">
            <h5>
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?{' '}
            </h5>
            <p className="large semi-bold">Unser Team ist gerne für Sie da!</p>
            <p>
              Füllen Sie einfach das Kontaktformular aus, und wir setzen uns
              zeitnah mit Ihnen in Verbindung. Natürlich können Sie uns auch
              telefonisch erreichen!
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
            <h5>Kontakt Informationen</h5>
            <div className="contact-info-wrapper">
              <p className="extra-large bold label">Rufen Sie uns an</p>
              <div className="contact-numbers-wrapper">
                <p>04101 &ndash; 604 60 91</p>
                <p>04101 &ndash; 604 76 95 (Fax)</p>
              </div>
              <p className="extra-large bold label">Email</p>
              <div className="email-wrapper">
                <p>info@pflegeteam-pinneberg.de</p>
              </div>
            </div>
          </div>
          <div className="col col-2"></div>
        </div>
        <div className="row row-3">
          <div className="col col-1">
            <p className="extra-large bold label">Geschäftszeiten</p>
            <div className="geschaeftzeiten-wrapper">
              <p>Montag bis Freitag</p>
              <p>09 00 - 16 00</p>
              <p>Samstag & Sonntag</p>
              <p>Geschlossen</p>
            </div>
          </div>
          <div className="col col-2">
            <p className="extra-large bold label">Addresse</p>
            <p>Dingstätte 18, 25421 Pinneberg</p>
            <p>Deutschland</p>
          </div>
        </div>
      </section>
      <div id="map">
        <GoogleMaps coordinates={coordinates} />
      </div>
    </main>
  );
};

export default Kontakt;

export const Head = () => <title>Kontakt</title>;
