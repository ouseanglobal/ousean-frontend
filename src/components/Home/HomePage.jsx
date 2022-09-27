import React from 'react';
import Layout from '../Layout/Layout';
import Hero from './Hero/Hero';
import Alasan from './Alasan/Alasan';
import Event from './Event/Event';
import Cta from './Cta/Cta';
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
