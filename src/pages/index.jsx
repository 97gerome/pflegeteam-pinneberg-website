import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import Ueberpruft from '../images/ueberpruft.svg';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../components/button';
import { Link, navigate } from 'gatsby';

const Home = () => {
  const toKarriere = () => navigate('/karriere');
  const toLeistungen = () => navigate('/leistungen');

  return (
    <Layout>
      <main id="home">
        <Hero
          image={<StaticImage src="../images/happy-elderly-folk.png" />}
          content={
            <>
              <h1>
                Ihr Pflegeteam
                <br />
                <span>mit Herz.</span>
              </h1>
              <p className="extra-large">
                Wir sind für Senioren da – mit fachkundiger Hilfe im Haushalt
                und bei medizinischer Betreuung, alles mit Herz.
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
            <h3>Pflegeteam-Pinneberg </h3>
            <p className="extra-large">
              Ihr Betreuungsdienst im Süden von Schleswig-Holstein
            </p>
          </div>
          <div className="row row-2">
            <div className="col col-1">
              <h4>10.000+</h4>
              <p className="italic center">Hausbesuche</p>
            </div>
            <div className="col col-2">
              <h4>350+</h4>
              <p className="italic center">
                Klient*innen
                <br />
                Versorgt
              </p>
            </div>
            <div className="col col-3">
              <h4>10.000+</h4>
              <p className="italic center">Stunden Pflegezeit</p>
            </div>
            <div className="col col-4">
              <h4>20</h4>
              <p className="italic center">
                Hochmotivierte
                <br />
                Mitarbeite
              </p>
            </div>
          </div>
        </section>
        <section id="sorgenfreies_leben">
          <div className="row">
            <div className="col col-1">
              <div className="row">
                <h3>Sorgenfreies Leben </h3>
                <p className="extra-large bold">
                  mit unserer umfassenden Unterstützung
                </p>
                <div className="items-wrapper">
                  <div className="item">
                    <StaticImage
                      src="../images/sorgenfreies-leben-houseplant.png"
                      alt="Houseplant"
                    />
                    <p className="italic">
                      Keine Sorgen mehr bei der Hausarbeit
                    </p>
                  </div>
                  <div className="item">
                    <StaticImage
                      src="../images/sorgenfreies-leben-medical-services.png"
                      alt="Medical Services"
                    />
                    <p className="italic">Umfassende medizinische Betreuung</p>
                  </div>
                  <div className="item">
                    <StaticImage
                      src="../images/sorgenfreies-leben-phone.png"
                      alt="Phone"
                    />
                    <p className="italic">
                      Persönlicher Ansprechpartner und Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-2">
              <StaticImage src="../images/houseparty.png" alt="Houseparty" />
            </div>
          </div>
        </section>
        <section id="unsere_leistungen">
          <div className="row row-1">
            <div className="col">
              <h3>
                Unsere
                <br />
                <span>Leistungen.</span>
              </h3>
            </div>
          </div>
          <div className="row row-2">
            <div className="col">
              <div className="row">
                <div className="col col-1">
                  <StaticImage src="../images/haeusliche-pflege.png" />
                  <div className="content">
                    <h4>Häusliche Pflege</h4>
                    <p>
                      Gerne übernehmen wir die pflegerische Versorgung in Ihrer
                      eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund-
                      und Behandlungspflege ganz nach Ihren individuellen
                      Wünschen und Bedürfnissen durch.
                    </p>
                    <Button label="Mehr info" onClick={toLeistungen} />
                  </div>
                </div>
                <div className="col col-2">
                  <StaticImage src="../images/betreuung.png" />
                  <div className="content">
                    <h4>Betreuung</h4>
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
              <h4>Mit Pflegeteam-Pinneberg </h4>
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
                  Unser Leistungen
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
