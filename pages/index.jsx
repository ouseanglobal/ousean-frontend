import React from 'react';
import Layout from '../src/components/Layout/Layout';
import Hero from '../src/components/hero';
import Alasan from '../src/components/alasan';
import Event from '../src/components/event';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Alasan />
      <Event />
    </Layout>
  );
}
