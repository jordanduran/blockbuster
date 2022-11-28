import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const includedFeatures = [
  'Early Access',
  'Discounted products',
  'Priority delivery',
];

const Pricing = () => {
  return (
    <div className='bg-green-500'>
      <div className='pt-12 sm:pt-16 lg:pt-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
              Simple no-tricks pricing
            </h2>
            <p className='mt-4 text-xl text-gray-800'>
              If you're not satisfied, contact us within the first 14 days and
              we'll send you a full refund.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28'>
        <div className='relative'>
          <div className='absolute inset-0 h-1/2 bg-gray-100' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none'>
              <div className='flex-1 bg-white px-6 py-8 lg:p-12'>
                <h3 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
                  Yearly Membership
                </h3>
                <p className='mt-6 text-base text-gray-500'>
                  Lorem ipsum dolor sit amet consect etur adipisicing elit.
                  Itaque amet indis perferendis blanditiis repellendus etur
                  quidem assumenda.
                </p>
                <div className='mt-8'>
                  <div className='flex items-center'>
                    <h4 className='flex-shrink-0 bg-white pr-4 text-base font-semibold text-green-600'>
                      What's included
                    </h4>
                    <div className='flex-1 border-t-2 border-gray-200' />
                  </div>
                  <div className='mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0'>
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className='flex items-start lg:col-span-1'
                      >
                        <div className='flex-shrink-0'>
                          <CheckCircleIcon
                            className='h-5 w-5 text-green-400'
                            aria-hidden='true'
                          />
                        </div>
                        <p className='ml-3 text-sm text-gray-700'>{feature}</p>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12'>
                <p className='text-lg font-medium leading-6 text-gray-900'>
                  Paid anually
                </p>
                <div className='mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900'>
                  <span>$150</span>
                  <span className='ml-3 text-xl font-medium tracking-normal text-gray-500'>
                    USD
                  </span>
                </div>
                <p className='mt-4 text-sm'>
                  <Link to='#' className='font-medium text-gray-500 underline'>
                    Learn about our membership policy
                  </Link>
                </p>
                <div className='mt-6'>
                  <div className='rounded-md shadow'>
                    <Link
                      to='#'
                      className='flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900'
                    >
                      Get Access
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
