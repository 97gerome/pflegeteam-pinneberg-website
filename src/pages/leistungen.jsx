import React from 'react'
import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../components/button';
import { Link } from 'gatsby';
import ServicesCard from '../components/services-card';

const haeuslichePflegeList = [
  {
    image: <StaticImage src="../images/einkaufdienst-fahrten.png" />,
    heading:
      <h4>
        Einkaufsdienst/-
        <br />
        <span>
          fahrten
        </span>
      </h4>,
    text: "Je nach Ihren Wünschen erledigen wir die Einkäufe für Sie oder begleiten Sie dabei."
  },
  {
    image: <StaticImage src="../images/reinigung-der-wohnung.png" />,
    heading:
      <h4>
        Reinigung
        <br />
        <span>
          der Wohnung
        </span>
      </h4>,
    text: "Der Reinigungsdienst wird an die individuellen Bedürfnisse und Vorlieben der betreuten Personen angepasst. Dies kann auch spezielle Reinigungsprodukte oder -methoden umfassen, um besondere Anforderungen oder Gesundheitsbedenken zu berücksichtigen."
  },
  {
    image: <StaticImage src="../images/hausmeisterservice.png" />,
    heading:
      <h4>
        Hausmeisterservice 
        <br />
        <span>
          & Gartenpflege
        </span>
      </h4>,
    text: "Wir kümmern uns um Ihre Gartenpflege und ähnlich Anfallendes."
  },
  {
    image: <StaticImage src="../images/gassiservice.png" />,
    heading:
      <h4>
        Gassiservice
      </h4>,
    text: "Sie schaffen es nicht Ihren geliebten Vierbeiner auszuführen; dies übernehmen wir gerne! Wir helfen das Wohlbefinden und die Gesundheit des Hundes zu erhalten und gleichzeitig den Besitzern/Besitzerinnen eine Entlastung zu bieten."
  },
  {
    image: <StaticImage src="../images/arzt-behoerdenfahrten.png" />,
    heading:
      <h4>
        Arzt-/
        <br />
        <span>
          Behördenfahrten
        </span>
      </h4>,
    text: "Wir begleiten Sie bei Arzt- und Behördenbesuchen."
  }
];

const betreuungleistungenList = [
  {
    image: <StaticImage src="../images/familienbetreuung.png" />,
    heading:
      <h4>
        Familien-
        <br />
        <span>
          betreuung
        </span>
      </h4>,
    text: "Wir bieten Ihnen kurzfristige Hilfe in bestimmten Situationen oder langfristige Unterstützung bei der Bewältigung von Herausforderungen im Familienleben."
  },
  {
    image: <StaticImage src="../images/kinderbetreuung.png" />,
    heading:
      <h4>
        Kinder-
        <br />
        <span>
          betreuung
        </span>
      </h4>,
    text: "Sie werden auf Bedürfnisse der Eltern und Kinder angepasst, sei es für regelmäßige Betreuung während der Arbeitszeiten oder für gelegentliche Unterstützung in speziellen Situationen."
  },
  {
    image: <StaticImage src="../images/muttervertretung.png" />,
    heading:
      <h4>
        Muttervertretung
      </h4>,
    text: "Wir übernehmen die Aufgaben von Ihnen als Mutter oder als Elternteil, sollten Sie zeitweise verhindert sein."
  },
  {
    image: <StaticImage src="../images/schulbegleitung.png" />,
    heading:
      <h4>
        Schulbegleitung
      </h4>,
    text: "Unsere Schulbegleitung ist darauf ausgerichtet, Schülern und Schülerinnen mit unterschiedlichen Bedürfnissen die bestmögliche Unterstützung zu bieten, damit sie erfolgreich am schulischen Leben teilnehmen können."
  },
  {
    image: <StaticImage src="../images/verhindungspflege.png" />,
    heading:
      <h4>
        Verhinderungs-
        <span>
          pflege
        </span>
      </h4>,
    text: "Wir übernehmen zeitweise die Vertretung der Hauptpflegeperson, wenn diese verhindert sein sollte. "
  },
];

const Leistungen = () => {
  return (
    <Layout>
      <main id="leistungen">
        <Hero
          image={<StaticImage src="../images/unsere-leistungen-kreis-pinneberg.png" />}
          content={
            <>
              <h1>
                Unsere Leistungen
                <br />
                <span>
                  Kreis Pinneberg
                </span>
              </h1>
              <p className="big">
                Wir sind für Senioren da – mit fachkundiger Hilfe im Haushalt und bei medizinischer Betreuung, alles mit Herz.
              </p>
            </>
          }
        />
        <section id="leistungen_beschreibung">
          <div className="row">
            <div className="col">
              <h4>Häusliche Pflege</h4>
              <p>Gerne übernehmen wir die pflegerische Versorgung in Ihrer eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund- und Behandlungspflege ganz nach Ihren individuellen Wünschen und Bedürfnissen durch.  </p>
              <div className="buttons-wrapper">
                <Button label="Leistungen erkunden" />
              </div>
            </div>
            <div className="col">
              <h4>Betreuung</h4>
              <p>Gerne übernehmen wir die pflegerische Versorgung in Ihrer eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund- und Behandlungspflege ganz nach Ihren individuellen Wünschen und Bedürfnissen durch.  </p>
              <div className="buttons-wrapper">
                <Button label="Leistungen erkunden" />
              </div>
            </div>
          </div>
        </section>
        <section id="haeusliche_pflege">
          <div className="row row-1">
            <div className="col">
              <h3>Unsere Häusliche Pflege Leistungen</h3>
            </div>
            <div className="col">
              <p>Gerne übernehmen wir die pflegerische Versorgung in Ihrer eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund- und Behandlungspflege ganz nach Ihren individuellen Wünschen und Bedürfnissen durch.  </p>
            </div>
          </div>
          <div className="row row-2">
            <div className="cards-wrapper">
              {haeuslichePflegeList.map(({ image, heading, text }) =>
                <ServicesCard
                  image={image}
                  content={
                    <>
                      <div className="heading-wrapper">
                        {heading}
                      </div>
                      <div className="text-wrapper">
                        <p>
                          {text}
                        </p>
                      </div>
                      <div className="buttons-wrapper">
                        <Button className="white-button small-button" label="Mehr dazu" />
                      </div>
                    </>
                  }
                />
              )}
            </div>
          </div>
          <div className="row row-3">
            <div className="buttons-wrapper">
              <Button className="bordered" label="Leistungen anfordern"/>
              <Link className="underlined" to="/">FAQs</Link>
            </div>
          </div>
        </section>
        <section id="betreuungleistungen">
          <div className="row row-1">
            <div className="col">
              <h3>Unsere Betreuung-leistungen</h3>
            </div>
            <div className="col">
              <p>Gerne übernehmen wir die pflegerische Versorgung in Ihrer eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund- und Behandlungspflege ganz nach Ihren individuellen Wünschen und Bedürfnissen durch.</p>
            </div>
          </div>
          <div className="row row-2">
            <div className="cards-wrapper">
              {betreuungleistungenList.map(({ image, heading, text }) =>
                <ServicesCard
                  image={image}
                  content={
                    <>
                      <div className="heading-wrapper">
                        {heading}
                      </div>
                      <div className="text-wrapper">
                        <p>
                          {text}
                        </p>
                      </div>
                      <div className="buttons-wrapper">
                        <Button className="white-button small-button" label="Mehr dazu" />
                      </div>
                    </>
                  }
                />
              )}
            </div>
          </div>
          <div className="row row-3">
            <div className="buttons-wrapper">
              <Button className="atlantis-button bordered" label="Leistungen anfordern"/>
              <Link className="underlined" to="/">FAQs</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Leistungen;