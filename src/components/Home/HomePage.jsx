import React from 'react';
import Layout from '../Layout/Layout';
// import Alasan from './Alasan/Alasan';
// import Cta from './Cta/Cta';
// import Event from './Event/Event';
// import Hero from './Hero/Hero';
// import Testimoni from './Testimoni/Testimoni';
// import Career from './Career/Career';
import Hero from '../Hero/Hero';
import Visimis from '../VisiMisi/Visimisi';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Visimis />
    </Layout>
  );
}

export default HomePage;
