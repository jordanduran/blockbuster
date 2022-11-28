import Hero from '../landing/hero';
import Newsletter from '../landing/newsletter';
import Pricing from '../landing/pricing';
import Stats from '../landing/stats';

const LandingPage = () => {
  return (
    <div className='bg-white'>
      <main>
        <div>
          <Hero />
          <Stats />
          <Pricing />
          <Newsletter />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
