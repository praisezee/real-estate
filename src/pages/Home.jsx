import About from '../components/About';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Property from '../components/Property';
import Stats from '../components/Stats';
import Subscribe from '../components/Subscribe';
import Testimony from '../components/Testimony';
const Home = () => {
  return (
    <>
      <Hero/>
      <Property/>
      <About/>
      <Stats/>
      <Testimony/>
      <Featured/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Home;
