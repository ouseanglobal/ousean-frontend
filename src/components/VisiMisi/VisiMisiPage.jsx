import React from 'react';
import VisiMisi from './Visimisi';
import Layout from '../Layout/Layout';
import Hero from './Hero/Hero';
import Struktur from './Struktur/Struktur';
import Join from './Join/Join';

function VisiMisiPage() {
  return (
    <Layout>
      <Hero />
      <VisiMisi />
      <Struktur />
      <Join />
    </Layout>
  );
}

export default VisiMisiPage;
