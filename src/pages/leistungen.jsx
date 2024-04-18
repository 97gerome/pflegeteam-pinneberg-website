import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../components/button';
import ServicesCard from '../components/services-card';
import ServiceModal from '../components/service-modal';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomLeftArrow from '../components/custom-left-arrow';
import CustomRightArrow from '../components/custom-right-arrow';
import HaeuslichePflegeIcon from '../images/haeusliche-pflege-icon.svg';
import BetreuungIcon from '../images/betreuung-icon.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { navigate } from 'gatsby';

const responsive = {
  extraLargeDesktop: {
    breakpoint: { max: 4000, min: 2400 },
    items: 5,
  },
  largeDesktop: {
    breakpoint: { max: 2400, min: 1700 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1300 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 2,
  },
};

const haeuslichePflegeList = [
  {
    image: <StaticImage src="../images/einkaufdienst-fahrten.png" />,
    heading: (
      <>
        Einkaufsdienst/-
        <span>fahrten</span>
      </>
    ),
    summary:
      'Je nach Ihren Wünschen erledigen wir die Einkäufe für Sie oder begleiten Sie dabei.',
    content: (
      <>
        <p>
          Je nach Ihren Wünschen erledigen wir die Einkäufe für Sie oder
          begleiten Sie dabei.
        </p>
        <ol>
          <li>
            <span>Einkaufsplanung:</span> Unterstützung bei der Erstellung einer
            Einkaufsliste entsprechend den Bedürfnissen und Vorlieben der zu
            betreuenden Person.
          </li>
          <li>
            <span>Einkaufserledigung:</span> Übernahme des Einkaufs gemäß der
            Liste, sei es im Supermarkt, bei Apotheken oder anderen Geschäften.
          </li>
          <li>
            <span>Transport:</span> Bereitstellung von Transportmitteln für den
            Einkauf, sei es durch Begleitung beim Einkaufen oder durch Lieferung
            der Einkäufe bis nach Hause.
          </li>
          <li>
            <span>Besorgungen nach Bedarf:</span> Erledigung von Besorgungen für
            Dinge des täglichen Bedarfs, sei es Lebensmittel, Medikamente,
            Haushaltsartikel oder andere benötigte Güter.
          </li>
          <li>
            <span>Unterstützung beim Tragen:</span> Hilfe beim Tragen und
            Einräumen der Einkäufe, um die Belastung für die betreute Person zu
            reduzieren.
          </li>
          <li>
            <span>Flexibilität und Anpassung:</span> Anpassung des Einkaufs nach
            besonderen Bedürfnissen, sei es die Auswahl von speziellen
            Lebensmitteln, Beachtung von Allergien oder anderen Anforderungen.
          </li>
        </ol>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/reinigung-der-wohnung.png" />,
    heading: (
      <>
        Reinigung&nbsp;
        <span>der Wohnung</span>
      </>
    ),
    summary:
      'Der Reinigungsdienst wird an die individuellen Bedürfnisse und Vorlieben der betreuten Personen angepasst. Dies kann auch spezielle Reinigungsprodukte oder -methoden umfassen, um besondere Anforderungen oder Gesundheitsbedenken zu berücksichtigen.',
    content: (
      <>
        <p>
          Ihre Wohnung wird durch uns aufgeräumt und gesäubert. Diese Leistung
          kann enthalten:
        </p>
        <ol>
          <li>
            <span>Grundreinigung:</span> Regelmäßiges Reinigen von Böden,
            Oberflächen, Küche und Badezimmer.
          </li>
          <li>
            <span>Staubsaugen und Wischen:</span> Säubern von Fußböden,
            Teppichen und anderen Oberflächen.
          </li>
          <li>
            <span>Abstauben und Oberflächenreinigung:</span> Entfernen von Staub
            von Möbeln, Regalen und anderen Oberflächen.
          </li>
          <li>
            <span>Badezimmerreinigung:</span> Desinfizieren und Reinigen von
            Toiletten, Duschen, Badewannen und Waschbecken.
          </li>
          <li>
            <span>Küchenreinigung:</span> Reinigung von Arbeitsflächen, Spüle,
            Herd und anderen Küchenbereichen.
          </li>
          <li>
            <span>Müllentsorgung:</span> Entsorgen von Müll und
            Recyclingmaterialien.
          </li>
        </ol>
        <p>
          Der Reinigungsdienst wird an die individuellen Bedürfnisse und
          Vorlieben der betreuten Personen angepasst. Dies kann auch spezielle
          Reinigungsprodukte oder -methoden umfassen, um besondere Anforderungen
          oder Gesundheitsbedenken zu berücksichtigen.
        </p>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/hausmeisterservice.png" />,
    heading: (
      <>
        Hausmeisterservice&nbsp;
        <span>& Gartenpflege</span>
      </>
    ),
    summary: 'Wir kümmern uns um Ihre Gartenpflege und ähnlich Anfallendes.',
    content: (
      <>
        <p>Wir kümmern uns um Ihre Gartenpflege und ähnlich Anfallendes.</p>
        <ol>
          <li>
            <span>Gebäudemanagement:</span> Überwachung und Pflege von
            Immobilien, um sicherzustellen, dass sie in gutem Zustand sind und
            reibungslos funktionieren.
          </li>
          <li>
            <span>Reparaturen und Wartung:</span> Durchführung von Reparaturen
            und regelmäßiger Wartung von Gebäuden und Anlagen, sei es im Innen-
            oder Außenbereich.
          </li>
          <li>
            <span>Grünflächenpflege:</span> Pflege von Gärten, Rasenflächen,
            Hecken und anderen Grünflächen, einschließlich Bewässerung,
            Beschneidung und allgemeiner Gartenarbeit.
          </li>
          <li>
            <span>Reinigungsdienste:</span> Durchführung von Reinigungsarbeiten
            im Gemeinschaftsbereich oder in öffentlichen Räumen, um die
            Sauberkeit und den gepflegten Zustand aufrechtzuerhalten.
          </li>
          <li>
            <span>Kleinere Installationen und Umbauten:</span> Durchführung
            kleinerer Installationsarbeiten oder Umbauten nach Bedarf, wie die
            Montage von Regalen, Reparaturen an Einrichtungen oder ähnliche
            Tätigkeiten.
          </li>
        </ol>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/gassiservice.png" />,
    heading: <>Gassiservice</>,
    summary:
      'Sie schaffen es nicht Ihren geliebten Vierbeiner auszuführen; dies übernehmen wir gerne! Wir helfen das Wohlbefinden und die Gesundheit des Hundes zu erhalten und gleichzeitig den Besitzern/Besitzerinnen eine Entlastung zu bieten.',
    content: (
      <>
        <p>
          Sie schaffen es nicht Ihren geliebten Vierbeiner auszuführen; dies
          übernehmen wir gerne! Wir helfen das Wohlbefinden und die Gesundheit
          des Hundes zu erhalten und gleichzeitig den Besitzern/Besitzerinnen
          eine Entlastung zu bieten.
        </p>
        <ol>
          <li>
            <span>Spaziergänge und Auslauf:</span> Regelmäßige Spaziergänge und
            Ausflüge mit dem Hund, um ihm Bewegung, frische Luft und soziale
            Interaktion mit anderen Hunden zu ermöglichen.
          </li>
          <li>
            <span>Individuelle Betreuung:</span> Berücksichtigung der
            Bedürfnisse des Hundes, sei es hinsichtlich der Gehgeschwindigkeit,
            Dauer des Spaziergangs oder besondere Anforderungen des Hundes.
          </li>
          <li>
            <span>Sicherheit und Aufsicht:</span> Gewährleistung einer sicheren
            Umgebung während des Spaziergangs und Aufsicht über das Verhalten
            des Hundes.
          </li>
          <li>
            <span>Flexibilität:</span> Anpassung der Spaziergänge je nach den
            Anforderungen des Hundeigentümers, sei es in Bezug auf Tageszeiten,
            Häufigkeit oder besondere Anweisungen für den Spaziergang.
          </li>
          <li>
            <span>Kommunikation:</span> Regelmäßige Kommunikation zwischen uns
            und dem Hundebesitzer/der Hundebesitzerin über den Verlauf der
            Spaziergänge und eventuelle Beobachtungen oder Anliegen.
          </li>
        </ol>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/arzt-behoerdenfahrten.png" />,
    heading: (
      <>
        Arzt-/
        <span>Behördenfahrten</span>
      </>
    ),
    summary: 'Wir begleiten Sie bei Arzt- und Behördenbesuchen.',
    content: (
      <>
        <p>Wir begleiten Sie bei Arzt- und Behördenbesuchen.</p>
        <ol>
          <li>
            <span>Arztbesuche:</span> Transport zu und von Arztterminen,
            Facharztpraxen oder medizinischen Untersuchungen für Personen, die
            Unterstützung oder Begleitung benötigen.
          </li>
          <li>
            <span>Behördenbesuche:</span> Fahrdienste zu Behörden wie Ämtern,
            Sozialdiensten oder anderen Institutionen, um notwendige
            Angelegenheiten zu erledigen oder formale Angelegenheiten zu klären.
          </li>
          <li>
            <span>Begleitung und Unterstützung:</span> Bereitstellung von
            unterstützender Begleitung während der Arztbesuche oder
            Behördengänge, um Sicherheit zu gewährleisten und bei der
            Kommunikation zu helfen, wenn erforderlich.
          </li>
          <li>
            <span>Verständnis und Erklärung:</span> Gegebenenfalls Unterstützung
            beim Verständnis von medizinischen Anweisungen oder Informationen,
            die während Arztbesuchen vermittelt werden.
          </li>
          <li>
            <span>Organisation und Zeitmanagement:</span> Planung und
            Organisation von Fahrten entsprechend den Terminen und Anforderungen
            der besuchten Ärzte oder Behörden.
          </li>
        </ol>
      </>
    ),
  },
];

const betreuungleistungenList = [
  {
    image: <StaticImage src="../images/familienbetreuung.png" />,
    heading: (
      <>
        Familien-
        <span>betreuung</span>
      </>
    ),
    summary:
      'Wir bieten Ihnen kurzfristige Hilfe in bestimmten Situationen oder langfristige Unterstützung bei der Bewältigung von Herausforderungen im Familienleben.',
    content: (
      <>
        <p>
          Wir bieten Ihnen kurzfristige Hilfe in bestimmten Situationen oder
          langfristige Unterstützung bei der Bewältigung von Herausforderungen
          im Familienleben.
        </p>
        <ol>
          <li>
            <span>Elternunterstützung:</span> Hilfe und Anleitung für Eltern bei
            der Bewältigung von Herausforderungen im Zusammenhang mit der
            Kindererziehung, sei es bei der Entwicklung von
            Erziehungsstrategien, der Bewältigung von Verhaltensproblemen oder
            der Förderung eines positiven Familienumfelds.
          </li>
          <li>
            <span>Familienaktivitäten:</span> Organisation von Aktivitäten und
            Veranstaltungen, die die familiäre Bindung stärken und das
            gemeinsame Erleben fördern.
          </li>
          <li>
            <span>Krisenintervention:</span> Bereitstellung von Unterstützung
            und Ressourcen in Krisensituationen oder schwierigen Familienzeiten.
          </li>
          <li>
            <span>Kommunikation und Beratung:</span> Unterstützung bei der
            Verbesserung der Kommunikation innerhalb der Familie und ggf.
            Vermittlung an professionelle Beratungsdienste.
          </li>
        </ol>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/kinderbetreuung.png" />,
    heading: (
      <>
        Kinder-
        <span>betreuung</span>
      </>
    ),
    summary:
      'Sie werden auf Bedürfnisse der Eltern und Kinder angepasst, sei es für regelmäßige Betreuung während der Arbeitszeiten oder für gelegentliche Unterstützung in speziellen Situationen.',
    content: (
      <>
        <p>
          Wir übernehmen die Betreuung Ihrer Kinder. Diese Leistung kann
          enthalten:
        </p>
        <ol>
          <li>
            <span>Spiel und Unterhaltung:</span> Bereitstellung von pädagogisch
            wertvollen Spielen und Aktivitäten, die die Entwicklung des Kindes
            fördern.
          </li>
          <li>
            <span>Hausaufgabenhilfe:</span> Unterstützung bei den Hausaufgaben
            und Förderung des Lernens in einem unterstützenden Umfeld.
          </li>
          <li>
            <span>Kreative Aktivitäten:</span> Anregung der kreativen
            Fähigkeiten durch Malen, Basteln und andere künstlerische
            Tätigkeiten.
          </li>
          <li>
            <span>Sicherheitsüberwachung:</span> Gewährleistung einer sicheren
            Umgebung und Aufsicht, um das Wohlergehen der Kinder zu
            gewährleisten.
          </li>
          <li>
            <span>Gesunde Mahlzeiten:</span> Zubereitung und Bereitstellung von
            ausgewogenen und gesunden Mahlzeiten und Snacks.
          </li>
          <li>
            <span>Transport:</span> Gegebenenfalls Transport zu und von
            Aktivitäten, Schulen oder anderen Terminen.
          </li>
        </ol>
        <p>
          Sie werden auf Bedürfnisse der Eltern und Kinder angepasst, sei es für
          regelmäßige Betreuung während der Arbeitszeiten oder für gelegentliche
          Unterstützung in speziellen Situationen.
        </p>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/muttervertretung.png" />,
    heading: <>Muttervertretung</>,
    summary:
      'Wir übernehmen die Aufgaben von Ihnen als Mutter oder als Elternteil, sollten Sie zeitweise verhindert sein.',
    content: (
      <>
        <p>
          Die Vertretung beinhaltet normalerweise die vorübergehende Übernahme
          elterlicher Aufgaben und Verantwortlichkeiten.
        </p>
        <p>
          Dies umfasst die Übernahme der Rollen von Mutter oder Vater, wenn
          diese aus verschiedenen Gründen nicht verfügbar sind, sei es wegen
          Krankheit, beruflicher Verpflichtungen oder anderer Umstände.
        </p>
        <ol>
          <li>
            <span>Pflege und Betreuung:</span> Übernahme der täglichen Pflege
            und Betreuung der Kinder in Abwesenheit der Mutter oder des
            Elternteils. Das kann die Versorgung mit Essen, Hilfe bei den
            Hausaufgaben, Spiel- und Lernaktivitäten sowie Schlafenszeit
            umfassen.
          </li>
          <li>
            <span>Haushaltsmanagement:</span> Unterstützung bei
            haushaltsbezogenen Aufgaben wie Kochen, Reinigung, Wäsche und
            Organisation des täglichen Ablaufs im Haushalt.
          </li>
          <li>
            <span>Sicherheit und Aufsicht:</span> Gewährleistung einer sicheren
            Umgebung und angemessenen Aufsicht für die Kinder während der
            Abwesenheit der Mutter oder des Elternteils.
          </li>
          <li>
            <span>Transport und Aktivitäten:</span> Gegebenenfalls Transport zu
            und von Aktivitäten, Schule oder anderen Terminen der Kinder.
          </li>
          <li>
            <span>Kontinuität und Stabilität:</span> Sicherstellung einer
            stabilen und vertrauten Umgebung für die Kinder, um Kontinuität in
            ihren täglichen Routinen und Aktivitäten zu gewährleisten.
          </li>
        </ol>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/schulbegleitung.png" />,
    heading: <>Schulbegleitung</>,
    summary:
      'Unsere Schulbegleitung ist darauf ausgerichtet, Schülern und Schülerinnen mit unterschiedlichen Bedürfnissen die bestmögliche Unterstützung zu bieten, damit sie erfolgreich am schulischen Leben teilnehmen können.',
    content: (
      <>
        <p>
          Wir unterstützen Ihre Kinder während ihrer Schulzeit, insbesondere
          wenn sie besondere Bedürfnisse haben oder aufgrund von Einschränkungen
          oder Schwierigkeiten zusätzliche Hilfe benötigen.
        </p>
        <ol>
          <li>
            <span>Individuelle Unterstützung:</span> Wir unterstützen Schüler
            mit besonderen Bedürfnissen oder Herausforderungen, z.B. bei
            Lernschwierigkeiten, körperlichen Einschränkungen oder
            Verhaltensproblemen.
          </li>
          <li>
            <span>Lernunterstützung:</span> Wir helfen Schülern bei schulischen
            Aufgaben, einschließlich Lerninhalte erläutern, Hausaufgaben
            unterstützen und Unterrichtsmaterialien erklären.
          </li>
          <li>
            <span>Soziale Integration:</span> Wir helfen Schülern bei der
            Integration in die Schulgemeinschaft, indem wir soziale
            Interaktionen unterstützen und ein angenehmes schulisches Umfeld
            fördern.
          </li>
          <li>
            <span>Kommunikation mit Lehrkräften und Eltern:</span> Wir halten
            engen Kontakt mit Lehrkräften und Eltern, um den Fortschritt der
            Schüler zu besprechen und sicherzustellen, dass ihre Bedürfnisse
            erfüllt werden.
          </li>
          <li>
            <span>Verhalten und Emotionale Unterstützung:</span> Wir bieten
            Unterstützung bei Verhaltensproblemen oder emotionalen
            Herausforderungen, um ein positives Lernumfeld für das Kind zu
            schaffen.
          </li>
          <li>
            <span>Organisatorische Hilfe:</span> Wir helfen ihren Kindern
            Schulmaterialien zu organisieren und Strategien zu entwickeln, um
            effektiver zu lernen und am Unterricht teilzunehmen.
          </li>
        </ol>
      </>
    ),
  },
  {
    image: <StaticImage src="../images/verhindungspflege.png" />,
    heading: (
      <>
        Verhinderungs-
        <span>pflege</span>
      </>
    ),
    summary:
      'Wir übernehmen zeitweise die Vertretung der Hauptpflegeperson, wenn diese verhindert sein sollte. ',
    content: (
      <>
        <p>
          Unsere Dienste ermöglichen es der Hauptpflegeperson, sich zu erholen
          oder persönliche Angelegenheiten zu regeln, ohne dass die Betreuung
          des Pflegebedürftigen vernachlässigt wird.
        </p>
        <ol>
          <li>
            <span>Zeitliche Entlastung:</span> Gewährleistung einer
            vorübergehenden Unterstützung für die reguläre Pflegeperson, um
            diese zu entlasten oder ihr eine Pause zu ermöglichen.
          </li>
          <li>
            <span>Pflege und Betreuung:</span> Bereitstellung von
            Pflegeleistungen, die normalerweise von der Hauptpflegeperson
            übernommen werden, um die Kontinuität in der Betreuung des
            Pflegebedürftigen zu gewährleisten.
          </li>
          <li>
            <span>Unterstützung im Alltag:</span> Hilfe bei täglichen
            Aktivitäten wie Anziehen, Waschen, Essen oder Medikamenteneinnahme
            für Pflegebedürftige, wenn die Hauptpflegeperson vorübergehend nicht
            verfügbar ist.
          </li>
          <li>
            <span>Medizinische Versorgung:</span> Sicherstellung der
            medizinischen Betreuung und der korrekten Einnahme von Medikamenten
            gemäß ärztlicher Anweisungen.
          </li>
          <li>
            <span>Emotionale Unterstützung:</span> Bereitstellung von
            Gesellschaft und sozialer Interaktion für Pflegebedürftige während
            der Abwesenheit der Hauptpflegeperson.
          </li>
          <li>
            <span>Kontinuität und Routine:</span> Einhalten der gewohnten
            Abläufe und Routinen, um Sicherheit und Stabilität für den
            Pflegebedürftigen zu gewährleisten.
          </li>
        </ol>
      </>
    ),
  },
];

const Leistungen = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModalOpen = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const scrollToHaeuslichePflege = () => {
    scrollTo('#haeusliche_pflege');
  };

  const scrollToBetreuungLeistungen = () => {
    scrollTo('#betreuungleistungen');
  };

  const toKontakt = () => {
    navigate('/kontakt');
  };

  return (
    <Layout>
      <main id="leistungen">
        <Hero
          image={
            <StaticImage src="../images/unsere-leistungen-kreis-pinneberg.png" />
          }
          content={
            <h1>
              Unsere Leistungen
              <br />
              <span>Kreis Pinneberg</span>
            </h1>
          }
        />
        <section id="leistungen_beschreibung">
          <div className="row">
            <div className="col">
              <HaeuslichePflegeIcon />
              <h4>Häusliche Pflege</h4>
              <p>
                Gerne übernehmen wir die pflegerische Versorgung in Ihrer
                eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund- und
                Behandlungspflege ganz nach Ihren individuellen Wünschen und
                Bedürfnissen durch.{' '}
              </p>
              <div className="buttons-wrapper">
                <Button
                  label="Mehr entdecken"
                  onClick={scrollToHaeuslichePflege}
                />
              </div>
            </div>
            <div className="col">
              <BetreuungIcon />
              <h4>Betreuung</h4>
              <p>
                Gerne übernehmen wir die pflegerische Versorgung in Ihrer
                eigenen Häuslichkeit. Unsere Pflegekräfte führen Grund- und
                Behandlungspflege ganz nach Ihren individuellen Wünschen und
                Bedürfnissen durch.{' '}
              </p>
              <div className="buttons-wrapper">
                <Button
                  label="Mehr entdecken"
                  onClick={scrollToBetreuungLeistungen}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="haeusliche_pflege">
          <div className="row row-1">
            <div className="col col-1">
              <h3>Unsere Häusliche Pflege Leistungen</h3>
            </div>
            <div className="col col-2">
              <HaeuslichePflegeIcon />
              <p>
                Wir bieten maßgeschneiderte Pflege in Ihrem Zuhause an, ganz
                nach Ihren Wünschen und Bedürfnissen. Unsere professionellen
                Pflegekräfte sind darauf spezialisiert, Ihnen die bestmögliche
                Betreuung zu bieten, damit Sie sich sicher und wohl fühlen
                können.
              </p>
            </div>
          </div>
          <div className="row row-2">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2500}
              containerClass="carousel-container"
              itemClass="carousel-item"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {haeuslichePflegeList.map((current) => (
                <ServicesCard
                  image={current.image}
                  heading={current.heading}
                  summary={current.summary}
                  onMoreClick={() => handleModalOpen(current)}
                />
              ))}
            </Carousel>
          </div>
          <div className="row row-3">
            <div className="buttons-wrapper">
              <Button
                className="transparent-button bordered"
                label="Leistungen anfordern"
                onClick={toKontakt}
              />
            </div>
          </div>
        </section>
        <section id="betreuungleistungen">
          <div className="row row-1">
            <div className="col col-1">
              <h3>Unsere Betreuung-leistungen</h3>
            </div>
            <div className="col col-2">
              <BetreuungIcon />
              <p>
                Unser einfühlsames Team begleitet Sie durch psychiatrische
                Krisen und schwierige Lebenssituationen. Wir sind hier, um Ihnen
                zu helfen, den Weg zu einem selbstbestimmten und glücklichen
                Leben zurückzufinden. Mit unserer Unterstützung können Sie Ihre
                Stärken entdecken und Ihre Lebensqualität verbessern.
              </p>
            </div>
          </div>
          <div className="row row-2">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2500}
              containerClass="carousel-container"
              itemClass="carousel-item"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {betreuungleistungenList.map((current) => (
                <ServicesCard
                  image={current.image}
                  heading={current.heading}
                  summary={current.summary}
                  onMoreClick={() => handleModalOpen(current)}
                />
              ))}
            </Carousel>
          </div>
          <div className="row row-3">
            <div className="buttons-wrapper">
              <Button
                className="transparent-button bordered"
                label="Leistungen anfordern"
                onClick={toKontakt}
              />
            </div>
          </div>
        </section>
        <section id="weiter_mit_pflegeteam_pinneberg">
          <div className="row">
            <div className="col">
              <h3>
                So geht&apos;s weiter mit
                <br />
                Pflegeteam-Pinneberg!
              </h3>
              <p>
                Sie erwägen, pflegerische Dienstleistungen vom
                PflegeTeam-Pinneberg zu beanspruchen?
                <br />
                Wir unterstützen Sie gerne und erklären Ihnen den Aufnahmeablauf
                detailliert Schritt für Schritt!
              </p>
              <div className="buttons-wrapper">
                <Button label="Ruf uns an!" onClick={toKontakt} />
              </div>
            </div>
          </div>
        </section>
        <section id="vermittlung_von">
          <div className="row">
            <div className="col col-1">
              <div className="content">
                <h3>Vermittlung von</h3>
                <ul>
                  <li>
                    Pflegehilfsmitteln (z. B. Bett, Nachtstuhl,
                    Inkontinenzprodukten)
                  </li>
                  <li>mobiler Friseur</li>
                  <li>mobile, medizinische Fußpflege</li>
                  <li>Krankengymnastik</li>
                  <li>Mittagstisch</li>
                  <li>Stomaberatung</li>
                  <li>Ernährungsberatung</li>
                  <li>Wundmanagement</li>
                </ul>
                <p className="small italic">
                  Alle Leistungen aus der Pflegeversicherung (SGB XI) nach
                  Leistungskatalog. Versorgungsverträge mit allen Krankenkassen.
                  <br />
                  <br />
                  Pflegebedürftige in häuslicher Pflege haben Anspruch auf einen
                  Entlastungsbetrag in Höhe von bis zu 125 Euro monatlich (also
                  insgesamt bis zu 1.500 Euro im Jahr). Das gilt auch für
                  Pflegebedürftige des Pflegegrades 1.
                </p>
              </div>
            </div>
            <div className="col col-2">
              <div className="content">
                <h3>Unsere Partners</h3>
                <div className="partners-wrapper">
                  <StaticImage
                    src="../images/der-dozent-logo.png"
                    alt="Der Dozent"
                    imgStyle={{ objectFit: 'contain' }}
                  />
                  <StaticImage
                    src="../images/brandschutz-nord-logo.png"
                    alt="Brandschutz Nord"
                    imgStyle={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        image={modalData.image}
        heading={modalData.heading}
        content={modalData.content}
      />
    </Layout>
  );
};

export default Leistungen;

export const Head = () => <title>Leistungen</title>;
