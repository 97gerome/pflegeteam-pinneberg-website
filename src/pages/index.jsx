import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero";

const Home = () => {
  return (
    <Layout>
      <main id="home">
        <Hero />
      </main>
    </Layout>
  )
};

export default Home;

export const Head = () => <title>Pflegeteam-Pinneberg GmbH</title>;
