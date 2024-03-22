import React from 'react';
import Layout from '../components/layout/layout';
import FacebookLogo from '../images/facebook-logo-atlantis.svg';
import InstagramLogo from '../images/instagram-logo-atlantis.svg';
import ContactForm from '../components/contact-form';

const Kontakt = () => {
  return (
    <Layout>
      <main id="kontakt">
        <div className="row row-1">
          <h2>Ihr Kontakt zu uns</h2>
        </div>
        <div className="row row-2">
          <div className="col col-1">
            <h4>
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?{' '}
            </h4>
            <p className="large semi-bold">Unser Team ist gerne für Sie da!</p>
            <p>
              Füllen Sie einfach das Kontaktformular aus, und wir setzen uns
              zeitnah mit Ihnen in Verbindung. Natürlich können Sie uns auch
              telefonisch erreichen!
            </p>
            <div className="socials-wrapper">
              <FacebookLogo />
              <InstagramLogo />
            </div>
            <h4>Kontakt Informationen</h4>
            <div className="contact-info-wrapper">
              <p className="extra-large bold label">Rufen Sie uns an</p>
              <div className="contact-numbers-wrapper">
                <p>04101 &ndash; 604 60 91</p>
                <p>04101 &ndash; 604 60 91 (Fax)</p>
              </div>
              <p className="extra-large bold label">Email</p>
              <div className="email-wrapper">
                <p>info@pflegeteam-pinneberg.de</p>
              </div>
            </div>
          </div>
          <div className="col col-2">
            <ContactForm />
          </div>
        </div>
        <div className="row row-3"></div>
      </main>
    </Layout>
  );
};

export default Kontakt;

export const Head = () => <title>Kontakt</title>;
