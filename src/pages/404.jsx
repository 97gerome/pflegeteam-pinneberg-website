import * as React from 'react';
import Watermark from '../images/watermark.svg';
import Button from '../components/button';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  const toHome = () => navigate('/');

  return (
    <main id="not_found">
      <div className="row">
        <Watermark />
        <h1>404</h1>
        <h4>Seite nicht gefunden</h4>
        <Button label="Zurück zur Homepage" onClick={toHome} />
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => (
  <title>Seite nicht gefunden | Pflegeteam Pinneberg GmbH</title>
);
