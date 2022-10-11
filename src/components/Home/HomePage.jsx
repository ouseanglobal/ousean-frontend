import Layout from '../Layout/Layout';
import Hero from './Hero/Hero';
import Alasan from './Alasan/Alasan';
import Event from './Event/Event';
import Cta from './Cta/Cta';
import Fokus from './Fokus/Fokus';
import Profile from './Profile/Profile';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Alasan />
      <Profile />
      <Event />
      <Fokus />
      <Cta />
    </Layout>
  );
}

export default HomePage;
