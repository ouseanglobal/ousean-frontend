import React from 'react';
import VisiMisi from './Visimisi';
import Layout from '../Layout/Layout';
import Hero from './Hero/Hero';
import Struktur from './Struktur/Struktur';

function VisiMisiPage() {
  return (
    <Layout>
      <Hero />
      <VisiMisi />
      <Struktur />
    </Layout>
  );
}

export default VisiMisiPage;
