import React from 'react';
import Layout from '../Layout/Layout';
import Alasan from './Alasan/Alasan';
import Cta from './Cta/Cta';
import Event from './Event/Event';
import Hero from './Hero/Hero';
import Testimoni from './Testimoni/Testimoni';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Alasan />
      <Event />
      <Testimoni />
      <Cta />
    </Layout>
  );
}

export default HomePage;
