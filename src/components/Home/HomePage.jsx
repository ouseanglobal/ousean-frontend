import React from 'react';
import Layout from '../Layout/Layout';
import Alasan from './Alasan/Alasan';
import Cta from './Cta/Cta';
import Event from './Event/Event';
import Hero from './Hero/Hero';
import Testimoni from './Testimoni/Testimoni';
import Partner from './Partner/Partner';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Alasan />
      <Event />
      <Partner />
      <Testimoni />
      <Cta />
    </Layout>
  );
}

export default HomePage;
