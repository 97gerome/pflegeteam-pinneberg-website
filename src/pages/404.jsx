import * as React from 'react';
import Layout from '../components/layout/layout';
import Watermark from '../images/watermark.svg';
import Button from '../components/button';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  const toHome = () => navigate('/');

  return (
    <Layout>
      <main id="not_found">
        <div className="row">
          <Watermark />
          <h1>404</h1>
          <h4>Seite nicht gefunden</h4>
          <Button label="Zurück zur Homepage" onClick={toHome} />
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <title>Seite nicht gefunden | Pflegeteam Pinneberg GmbH</title>
);
