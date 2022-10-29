import Head from 'next/head';
import React from 'react';
import NotFound from '../src/components/NotFound404/NotFound';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Ousean | Youth Empowerment & Development</title>
        <meta
          property="og:title"
          content="Welcome to Ousean | Youth Empowerment & Development"
          key="title"
        />
      </Head>
      <NotFound />
    </>
  );
}
