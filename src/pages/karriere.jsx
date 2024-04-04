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
        <section id="unser_benefits">
          <div className="row row-1">
            <h3>Unser Benefits</h3>
          </div>
          <div className="row row-2">
            <div className="col col-1">
              <div className="benefit">
                <StaticImage src="../images/benefit-1.png" />
                <h5>Motiviertes Team</h5>
                <p>
                  Eine abwechslungsreiche und verantwortungsvolle Tätigkeit in
                  einem hoch motivierten Team
                </p>
              </div>
              <div className="benefit">
                <StaticImage src="../images/benefit-2.png" />
                <h5>Dientswagen</h5>
                <p>Dienstwagen zur Nutzung während der Arbeitszeit</p>
              </div>
            </div>
            <div className="col col-2">
              <div className="benefit">
                <StaticImage src="../images/benefit-3.png" />
                <h5>Weiterbildungsmöglichkeiten </h5>
                <p>
                  Regelmäßige Fort- und Weiterbildungsmöglichkeiten zur
                  beruflichen Weiterentwicklung
                </p>
              </div>
            </div>
            <div className="col col-3">
              <div className="benefit">
                <StaticImage src="../images/benefit-4.png" />
                <h5>Flexible Arbeitszeiten </h5>
                <p>Flexible Arbeitszeiten und ein attraktives Gehalt</p>
              </div>
              <div className="benefit">
                <StaticImage src="../images/benefit-5.png" />
                <h5>Kollegiales Arbeitsumfeld</h5>
                <p>Eine kollegiale und unterstützende Arbeitsatmosphäre</p>
              </div>
            </div>
          </div>
        </section>
        <section id="aufgaben">
          <div className="row">
            <div className="col col-1">
              <h4>
                Aufgaben und <br /> Verantwortlichkeiten
              </h4>
              <ol>
                <li>
                  <h6>Betreuung und Unterstützung</h6>
                  <p>
                    Betreuung und Unterstützung von pflegebedürftigen Personen
                    im häuslichen Umfeld
                  </p>
                </li>
                <li>
                  <h6>Durchführung</h6>
                  <p>
                    Durchführung von hauswirtschaftlichen Tätigkeiten, Arzt-,
                    Behörden- und Einkaufsfahrten
                  </p>
                </li>
                <li>
                  <h6>Unterstützung</h6>
                  <p>
                    Unterstützung bei der Alltagsbewältigung, Förderung der
                    Selbstständigkeit und Erhaltung der Lebensqualität
                  </p>
                </li>
                <li>
                  <h6>Aktive Teilnahme</h6>
                  <p>
                    Aktive Teilnahme an der individuellen Pflegeplanung und
                    Dokumentation
                  </p>
                </li>
                <li>
                  <h6>Gewährleistung</h6>
                  <p>
                    Gewährleistung einer einfühlsamen und respektvollen
                    Betreuung unserer Klienten
                  </p>
                </li>
              </ol>
            </div>
            <div className="col col-2">
              <StaticImage src="../images/aufgaben-image.png" />
            </div>
          </div>
        </section>
        <section id="anforderungen">
          <div className="row">
            <div className="col col-1">
              <StaticImage src="../images/anforderungen-image.png" />
            </div>
            <div className="col col-2">
              <h4>Anforderungen</h4>
              <ol>
                <li>
                  <h6>Abgeschlossene Ausbildung</h6>
                  <p>
                    Abgeschlossene Ausbildung als Betreuungskraft,
                    Altenpflegehelfer/in oder vergleichbare Qualifikation
                    &#40;sollten Sie keine Ausbildung haben, übernehmen wir die
                    Ausbildung für Sie&#41;
                  </p>
                </li>
                <li>
                  <h6>Berufserfahrung in der ambulanten Pflege </h6>
                  <p>
                    Berufserfahrung in der ambulanten Pflege von Vorteil, aber
                    nicht zwingend erforderlich
                  </p>
                </li>
                <li>
                  <h6>
                    Zuverlässigkeit, Verantwortungsbewusstsein und Flexibilität
                  </h6>
                </li>
                <li>
                  <h6>Gute Deutschkenntnisse in Wort und Schrift</h6>
                </li>
                <li>
                  <h6>Führerschein Klasse B</h6>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Karriere;
