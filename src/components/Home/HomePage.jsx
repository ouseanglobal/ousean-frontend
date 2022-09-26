import React from 'react';
import Layout from '../Layout/Layout';
import Hero from './Hero/Hero';
import Alasan from './Alasan/Alasan';
import Event from './Event/Event';
import Cta from './Cta/Cta';
import Testimoni from './Testimoni/Testimoni';
// import Career from './Career/Career';
// import Her from '../Hero/Hero';
// import Visimis from '../VisiMisi/Visimisi';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Alasan />
      <Event />
      <Cta />
      <Testimoni />
    </Layout>
  );
}

export default HomePage;
