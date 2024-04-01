import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';

const Karriere = () => {
  return (
    <Layout>
      <main id="karriere">
        <Hero
          image={<StaticImage src="../images/deine-karriere-mit-uns.png" />}
          content={
            <h1>
              Deine <br /> Karriere <br /> <span>mit uns</span>{' '}
            </h1>
          }
        />
        <section id="als_arbeitgeber">
          <div className="row">
            <div className="col">
              <h3>
                Pflegeteam-Pinneberg
                <br /> als Arbeitgeber
              </h3>
              <p className="large semi-bold">
                Wir kümmern uns nicht nur um Kunden, sondern unterstützen
                Menschen und ihr soziales Umfeld, und das ganzheitlich in
                vertrauter Umgebung.
              </p>
              <p>
                Unsere Mitarbeiterinnen und Mitarbeiter sind unsere größte
                Stärke. Nur wenn sie gerne zur Arbeit kommen, können sie diese
                positive Lebenseinstellung erleben und weitergeben.
                <br />
                <br />
                Wir sind kontinuierlich bemüht, unsere Arbeitsbedingungen zu
                verbessern. Wir wissen, wie wertvoll Betreuungskräfte für unsere
                Gesellschaft sind, und möchten dies anerkennen und wertschätzen!
              </p>
            </div>
          </div>
        </section>
        <section id="wir_suchen_dich">
          <div className="row">
            <h6>Wir suchen Dich!</h6>
            <h3>
              Wir suchen für unseren Standort in <br /> Pinneberg eine
              engagierte und empathische <br /> Betreuungskraft im
              Betreuungsdienst.
            </h3>
            <p className="extra-large">
              Wir bieten Ihnen eine vielseitige und erfüllende Tätigkeit in
              einem professionellen Team.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Karriere;
