import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from './button';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <div id="hero">
      <StaticImage src="../images/happy-elderly-folk.png" alt="Happy elderly folk"/>
      <div className="row">
        <div className="col">
          <h1>
            Ihr Pflegeteam
            <br />
            <span>
              mit Herz.
            </span>
          </h1>
          <p className="big">
            Wir sind für Senioren da – mit fachkundiger Hilfe im Haushalt
            und bei medizinischer Betreuung, alles mit Herz.
          </p>
          <div className="buttons-wrapper">
            <Button label="Jetzt Bewerben" />
            <Link className="underlined" to="">Unser Leistungskatalog</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;