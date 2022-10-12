import Layout from '../Layout/Layout';
import Hero from './Hero/Hero';
import Product from './Product/Product';
import Event from './Event/Event';
import Cta from './Cta/Cta';
import Fokus from './Fokus/Fokus';
import Profile from './Profile/Profile';
import Location from './Location/Location';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Product />
      <Location />
      <Profile />
      <Event />
      <Fokus />
      <Cta />
    </Layout>
  );
}

export default HomePage;
