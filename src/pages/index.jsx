import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <Layout>
      <main id="home">
        <Hero />
        <section id="pflegeteam_pinneberg">
          <div className="row row-1">
            <h3>Pflegeteam-Pinneberg </h3>
            <p className="big">Ihr Betreuungsdienst im Süden von Schleswig-Holstein</p>
          </div>
          <div className="row row-2">
            <div className="col col-1">
              <h4>10.000+</h4>
              <p className="italic center">
                Hausbesuche
              </p>
            </div>
            <div className="col col-2">
              <h4>350+</h4>
              <p className="italic center">
                Klient*innen<br />
                Versorgt
              </p>
            </div>
            <div className="col col-3">
              <h4>10.000+</h4>
              <p className="italic center">
                Stunden Pflegezeit
              </p>
            </div>
            <div className="col col-4">
              <h4>20</h4>
              <p className="italic center">
                Hochmotivierte<br />
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
                <p className="big bold">mit unserer umfassenden Unterstützung</p>
                <div className="items-wrapper">
                  <div className="item">
                    <StaticImage src="../images/sorgenfreies-leben-houseplant.png" alt="Houseplant" />
                    <p className="italic">Keine Sorgen mehr bei der Hausarbeit</p>
                  </div>
                  <div className="item">
                    <StaticImage src="../images/sorgenfreies-leben-medical-services.png" alt="Medical Services" />
                    <p className="italic">Umfassende medizinische Betreuung</p>
                  </div>
                  <div className="item">
                    <StaticImage src="../images/sorgenfreies-leben-phone.png" alt="Phone" />
                    <p className="italic">Persönlicher Ansprechpartner und Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-2">
              <StaticImage src="../images/houseparty.png" alt="Houseparty" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
};

export default Home;

export const Head = () => <title>Pflegeteam-Pinneberg GmbH</title>;
