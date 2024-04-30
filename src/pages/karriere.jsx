import React from 'react';
import Hero from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import ExpressbewerbungForm from '../components/expressbewerbung-form';
import { coordinates } from '../utils/map';
import GoogleMaps from '../components/google-maps';
import Watermark from '../images/watermark.svg';
import WeiterbildungIcon from '../images/weiterbildungsmoeglichkeiten-icon.svg';
import DienstwagenIcon from '../images/dienstwagen-icon.svg';
import MotiviertesTeamIcon from '../images/motiviertes-team-icon.svg';
import FlexibleArbeitszeitenIcon from '../images/flexible-arbeitszeiten-icon.svg';
import KollegialesArbeitsumfeldIcon from '../images/kollegiales-arbeitsumfeld-icon.svg';

const Karriere = () => {
  return (
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
          <div className="col col-1">
            <Watermark />
          </div>
          <div className="col col-2">
            <h4>
              Pflegeteam-Pinneberg
              <br /> als Arbeitgeber
            </h4>
            <p className="large semi-bold">
              Wir kümmern uns nicht nur um Kunden, sondern unterstützen Menschen
              und ihr soziales Umfeld, und das ganzheitlich in vertrauter
              Umgebung.
            </p>
            <p>
              Unsere Mitarbeiterinnen und Mitarbeiter sind unsere größte Stärke.
              Nur wenn sie gerne zur Arbeit kommen, können sie diese positive
              Lebenseinstellung erleben und weitergeben.
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
          <h5>Wir suchen Dich!</h5>
          <h4>
            Wir suchen für unseren Standort in <br /> Pinneberg eine engagierte
            und empathische <br /> Betreuungskraft im Betreuungsdienst.
          </h4>
          <p className="large">
            Wir bieten Ihnen eine vielseitige und erfüllende Tätigkeit in einem
            professionellen Team.
          </p>
        </div>
      </section>
      <section id="unser_benefits">
        <div className="row row-1">
          <h4>Unser Benefits</h4>
        </div>
        <div className="row row-2">
          <div className="benefits-wrapper">
            <div className="benefit">
              <WeiterbildungIcon />
              <h6>Weiterbildungsmöglichkeiten </h6>
              <p>
                Regelmäßige Fort- und Weiterbildungsmöglichkeiten <br /> zur
                beruflichen Weiterentwicklung
              </p>
            </div>
            <div className="benefit">
              <DienstwagenIcon />
              <h6>Dientswagen</h6>
              <p>Dienstwagen zur Nutzung während der Arbeitszeit</p>
            </div>
            <div className="benefit">
              <MotiviertesTeamIcon />
              <h6>Motiviertes Team</h6>
              <p>
                Eine abwechslungsreiche und verantwortungsvolle Tätigkeit in
                einem hoch motivierten Team
              </p>
            </div>
            <div className="benefit">
              <FlexibleArbeitszeitenIcon />
              <h6>Flexible Arbeitszeiten </h6>
              <p>Flexible Arbeitszeiten und ein attraktives Gehalt</p>
            </div>
            <div className="benefit">
              <KollegialesArbeitsumfeldIcon />
              <h6>Kollegiales Arbeitsumfeld</h6>
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
                  Betreuung und Unterstützung von pflegebedürftigen Personen im
                  häuslichen Umfeld
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
                  Gewährleistung einer einfühlsamen und respektvollen Betreuung
                  unserer Klienten
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
      <section id="lebensfreude">
        <div className="row row-1">
          <div className="col">
            <h4>Lebensfreude und Lebensqualität &mdash;</h4>
            <h5>dafür stehen wir, das Pflegeteam Pinneberg!</h5>
          </div>
        </div>
        <div className="row row-2">
          <div id="map">
            <GoogleMaps coordinates={coordinates} />
          </div>
          <ExpressbewerbungForm />
        </div>
      </section>
    </main>
  );
};

export default Karriere;

export const Head = () => <title>Karriere</title>;
