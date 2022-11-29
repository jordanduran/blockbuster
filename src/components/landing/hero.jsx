import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
          <div className='absolute inset-0'>
            <img
              className='h-full w-full object-cover'
              src={require('../../images/hero-bg.jpeg')}
              alt='Marijuana'
            />
            <div className='absolute inset-0 bg-gray-700 mix-blend-multiply' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
            <img
              className='h-28 md:h-32 lg:h-36 ml-auto mr-auto'
              src='https://i.ibb.co/QHvbk97/Twinn-Leaf-1.png'
              alt='Twinnleaf logo'
            />
            <p className='mx-auto mt-6 max-w-lg text-center text-xl text-green-200 sm:max-w-3xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center'>
              <div className='space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0'>
                <Link
                  to='/sign-up'
                  className='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8'
                >
                  Sign up
                </Link>
                <Link
                  to='/flower'
                  className='flex items-center justify-center rounded-md border border-transparent bg-green-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8'
                >
                  Visit store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
