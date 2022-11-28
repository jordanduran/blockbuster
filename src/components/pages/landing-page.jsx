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

        {/* More main page content here... */}
      </main>
    </div>
  );
};

export default LandingPage;
