import { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSignout } from '../../hooks/useSignout';

const navigation = [
  { name: 'Flower', href: '/flower' },
  { name: 'CBD', href: '/cbd' },
  { name: 'Gear', href: '/gear' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useStoreState((state) => state.user);
  const { signout } = useSignout();

  return (
    <div className='px-6 pt-6 lg:px-8 mb-6'>
      <div>
        <nav
          className='flex h-9 items-center justify-between'
          aria-label='Global'
        >
          <div className='flex lg:min-w-0 lg:flex-1' aria-label='Global'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Twinnleaf</span>
              <img
                className='block h-12 w-auto lg:hidden'
                src={require('../../images/twinnleaf-logo.png')}
                alt='Twinnleaf'
              />
              <img
                className='hidden h-14 w-auto lg:block'
                src={require('../../images/twinnleaf-logo.png')}
                alt='Twinnleaf'
              />
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='font-semibold text-gray-900 hover:text-gray-900 hover:text-green-500'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {user?.email ? (
            <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end'>
              <button
                to='/sign-in'
                className='inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:text-green-500'
                onClick={signout}
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end'>
              <Link
                to='/sign-in'
                className='inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:text-green-500'
              >
                Sign in
              </Link>
            </div>
          )}
        </nav>
        <Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus='true'
            className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden'
          >
            <div className='flex h-9 items-center justify-between'>
              <div className='flex'>
                <Link to='/' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Twinnleaf</span>
                  <img
                    className='h-8'
                    src={require('../../images/twinnleaf-logo.png')}
                    alt=''
                  />
                </Link>
              </div>
              <div className='flex'>
                <button
                  type='button'
                  className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 hover:text-green-500'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className='py-6'>
                  {user?.email ? (
                    <Link
                      to='/'
                      className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10 hover:text-green-500'
                      onClick={() => {
                        signout();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Sign out
                    </Link>
                  ) : (
                    <Link
                      to='/sign-in'
                      className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10 hover:text-green-500'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
