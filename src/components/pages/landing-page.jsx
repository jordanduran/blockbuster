import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const solutions = [
  {
    name: 'Inbox',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LandingPage() {
  return (
    <div className='bg-white'>
      <main>
        <div>
          {/* Hero card */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
                <div className='absolute inset-0'>
                  <img
                    className='h-full w-full object-cover'
                    src='https://beyondvela.com/wp-content/uploads/2021/03/What-Are-The-Different-Weed-Products-That-We-Can-Buy-From-The-Online-Dispensaries-Of-Weed.jpg'
                    alt='People working on laptops'
                  />
                  <div className='absolute inset-0 bg-gray-700 mix-blend-multiply' />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                  <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                    <img
                      className='h-48 ml-auto mr-auto'
                      src='https://i.ibb.co/QHvbk97/Twinn-Leaf-1.png'
                    />
                    {/* <span className='block text-white'>BLOCKBUSTER</span> */}
                    {/* <span className='block text-green-200'>
                      customer support
                    </span> */}
                  </h1>
                  <p className='mx-auto mt-6 max-w-lg text-center text-xl text-green-200 sm:max-w-3xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center'>
                    <div className='space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0'>
                      <a
                        href='#'
                        className='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8'
                      >
                        Sign up
                      </a>
                      <a
                        href='#'
                        className='flex items-center justify-center rounded-md border border-transparent bg-green-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8'
                      >
                        Visit store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className='bg-gray-100'>
            <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
              <p className='text-center text-base font-semibold text-gray-500'>
                Trusted by over 5 very average small businesses
              </p>
              <div className='mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
                <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                    alt='Tuple'
                  />
                </div>
                <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                    alt='Mirage'
                  />
                </div>
                <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                    alt='StaticKit'
                  />
                </div>
                <div className='col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                    alt='Transistor'
                  />
                </div>
                <div className='col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                    alt='Workcation'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
