import About from '../components/About';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Property from '../components/Property';
import Stats from '../components/Stats';
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
    </>
  )
}

export default Home;
