import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import Ueberpruft from '../images/ueberpruft.svg';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../components/button';
import { Link, navigate } from 'gatsby';
import HaeuslichePflegeIcon from '../images/haeusliche-pflege-icon.svg';
import BetreuungIcon from '../images/betreuung-icon.svg';
import MedizinischeBetreuungIcon from '../images/medizinische-betreuung-icon.svg';
import HausarbeitIcon from '../images/hausarbeit-icon.svg';
import PersoenlicherAnsprechpartnerIcon from '../images/persoenlicher-ansprechpartner-icon.svg';

const Home = () => {
  const toKarriere = () => navigate('/karriere');
  const toLeistungen = () => navigate('/leistungen');

  return (
    <Layout>
      <main id="home">
        <Hero
          image={<StaticImage src="../images/home-hero-image.png" />}
          content={
            <>
              <h1>
                Ihr Pflegeteam
                <br />
                <span>mit Herz.</span>
              </h1>
              <p className="extra-large">
                Wir sind für Senioren da &ndash; mit fachkundiger Hilfe im
                Haushalt und bei medizinischer Betreuung, alles mit Herz.
              </p>
              <div className="buttons-wrapper">
                <Button label="Jetzt Bewerben" onClick={toKarriere} />
                <Link className="underlined" to="/leistungen">
                  Unser Leistungskatalog
                </Link>
              </div>
            </>
          }
        />
        <section id="pflegeteam_pinneberg">
          <div className="row row-1">
            <h4>Pflegeteam-Pinneberg </h4>
            <p className="extra-large">
              Ihr Betreuungsdienst im Süden von Schleswig-Holstein
            </p>
          </div>
          <div className="row row-2">
            <div className="col col-1">
              <h5>10.000+</h5>
              <p className="italic center">Hausbesuche</p>
            </div>
            <div className="col col-2">
              <h5>350+</h5>
              <p className="italic center">
                Klient*innen
                <br />
                Versorgt
              </p>
            </div>
            <div className="col col-3">
              <h5>10.000+</h5>
              <p className="italic center">Stunden Pflegezeit</p>
            </div>
            <div className="col col-4">
              <h5>20</h5>
              <p className="italic center">
                Hochmotivierte
                <br />
                Mitarbeite
              </p>
            </div>
          </div>
        </section>
        <section id="sorgenfreies_leben">
          <StaticImage src="../images/sorgenfreies-leben-image.png" alt="" />
          <div className="row">
            <div className="col">
              <h2>Sorgenfreies Leben </h2>
              <p className="extra-large semi-bold">
                mit unserer umfassenden Unterstützung
              </p>
              <div className="items-wrapper">
                <div className="item">
                  <MedizinischeBetreuungIcon />
                  <p className="large semi-bold">
                    Umfassende medizinische Betreuung
                  </p>
                </div>
                <div className="item">
                  <HausarbeitIcon />
                  <p className="large semi-bold">
                    Keine Sorgen mehr bei der Hausarbeit
                  </p>
                </div>
                <div className="item">
                  <PersoenlicherAnsprechpartnerIcon />
                  <p className="large semi-bold">
                    Persönlicher Ansprechpartner und Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="unsere_leistungen">
          <div className="row row-1">
            <div className="col">
              <h4>
                Unsere
                <br />
                <span>Leistungen.</span>
              </h4>
            </div>
          </div>
          <div className="row row-2">
            <div className="col">
              <div className="row">
                <div className="leistung">
                  <StaticImage src="../images/haeusliche-pflege.png" />
                  <div className="content">
                    <HaeuslichePflegeIcon />
                    <h5>Häusliche Pflege</h5>
                    <p>
                      Gerne übernehmen wir die pflegerische Versorgung in Ihrer
                      eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund-
                      und Behandlungspflege ganz nach Ihren individuellen
                      Wünschen und Bedürfnissen durch.
                    </p>
                    <Button label="Mehr info" onClick={toLeistungen} />
                  </div>
                </div>
                <div className="leistung">
                  <StaticImage src="../images/betreuung.png" />
                  <div className="content">
                    <BetreuungIcon />
                    <h5>Betreuung</h5>
                    <p>
                      Einfühlsam und kompetent unterstützt Sie unser Team bei
                      psychiatrischen Krisen und in schwierigen
                      Lebenssituationen, sodass Sie den Weg zurück in ein
                      selbstbestimmtes und glückliches Leben finden.
                    </p>
                    <Button label="Mehr info" onClick={toLeistungen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="mit_pflegeteam_pinneberg">
          <div className="row">
            <div className="col">
              <h5>Mit Pflegeteam-Pinneberg </h5>
              <h2>
                Führen ein unabhängiges
                <br />
                und selbstbestimmtes
                <br />
                Leben in Ihrem Zuhause.
              </h2>
              <div className="items-wrapper">
                <div className="item">
                  <Ueberpruft />
                  <p className="small">Häusliche Pflege</p>
                </div>
                <div className="item">
                  <Ueberpruft />
                  <p className="small">Medizinische Pflege</p>
                </div>
                <div className="item">
                  <Ueberpruft />
                  <p className="small">Persönlich & Herzlich</p>
                </div>
              </div>
              <div className="buttons-wrapper">
                <Button label="Jetzt Bewerben" onClick={toKarriere} />
                <Link className="underlined" to="/leistungen">
                  Unser Leistungskatalog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;

export const Head = () => <title>Pflegeteam-Pinneberg GmbH</title>;
