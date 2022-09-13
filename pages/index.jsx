import React from 'react';
import Layout from '../src/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="h-[500px] w-screen bg-slate-500 text-white flex justify-center items-center">
        <h1>Hai Semuanya!</h1>
      </div>
    </Layout>
  );
}
