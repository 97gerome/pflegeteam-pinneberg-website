import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero";

const Home = () => {
  return (
    <Layout>
      <main id="home">
        <Hero />
        <section id="pflegeteam_pinneberg">
          <div className="row row-1">
            <h3>Pflegeteam-Pinneberg </h3>
            <p>Ihr Betreuungsdienst im Süden von Schleswig-Holstein</p>
          </div>
          <div className="row row-2">
            <div className="col col-1">
              <h4>10.000+</h4>
              <p>
                Hausbesuche
              </p>
            </div>
            <div className="col col-2">
              <h4>350+</h4>
              <p>
                Klient*innen<br />
                Versorgt
              </p>
            </div>
            <div className="col col-3">
              <h4>10.000+</h4>
              <p>
                Stunden Pflegezeit
              </p>
            </div>
            <div className="col col-4">
              <h4>20</h4>
              <p>
                Hochmotivierte<br />
                Mitarbeite
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
};

export default Home;

export const Head = () => <title>Pflegeteam-Pinneberg GmbH</title>;
