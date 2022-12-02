import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  FunnelIcon,
  StarIcon,
} from '@heroicons/react/20/solid';

const filters = {
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
};
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];
const products = [
  {
    id: 1,
    name: 'Pineapple Express',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Blue Dream',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Sour Diesel',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Purple Haze',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FlowersPage = () => {
  const { documents: flowers } = useCollection('flowers');

  return (
    <div className='bg-white'>
      <main className='pb-24'>
        <div className='py-16 px-4 text-center sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
            Flower
          </h1>
          <p className='mx-auto mt-4 max-w-xl text-base text-gray-500'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo.
          </p>
        </div>

        {/* Filters */}
        <Disclosure
          as='section'
          aria-labelledby='filter-heading'
          className='grid items-center border-t border-b border-gray-200'
        >
          <h2 id='filter-heading' className='sr-only'>
            Filters
          </h2>
          <div className='relative col-start-1 row-start-1 py-4'>
            <div className='mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8'>
              <div>
                <Disclosure.Button className='group flex items-center font-medium text-gray-700'>
                  <FunnelIcon
                    className='mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                  2 Filters
                </Disclosure.Button>
              </div>
              <div className='pl-6'>
                <button type='button' className='text-gray-500'>
                  Clear all
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='border-t border-gray-200 py-10'>
            <div className='mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8'>
              <div className='grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6'>
                <fieldset>
                  <legend className='block font-medium'>Price</legend>
                  <div className='space-y-6 pt-6 sm:space-y-4 sm:pt-4'>
                    {filters.price.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className='flex items-center text-base sm:text-sm'
                      >
                        <input
                          id={`price-${optionIdx}`}
                          name='price[]'
                          defaultValue={option.value}
                          type='checkbox'
                          className='h-4 w-4 flex-shrink-0 rounded border-gray-300 text-green-600 focus:ring-green-500'
                          defaultChecked={option.checked}
                        />
                        <label
                          htmlFor={`price-${optionIdx}`}
                          className='ml-3 min-w-0 flex-1 text-gray-600'
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className='block font-medium'>Color</legend>
                  <div className='space-y-6 pt-6 sm:space-y-4 sm:pt-4'>
                    {filters.color.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className='flex items-center text-base sm:text-sm'
                      >
                        <input
                          id={`color-${optionIdx}`}
                          name='color[]'
                          defaultValue={option.value}
                          type='checkbox'
                          className='h-4 w-4 flex-shrink-0 rounded border-gray-300 text-green-600 focus:ring-green-500'
                          defaultChecked={option.checked}
                        />
                        <label
                          htmlFor={`color-${optionIdx}`}
                          className='ml-3 min-w-0 flex-1 text-gray-600'
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className='grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6'>
                <fieldset>
                  <legend className='block font-medium'>Size</legend>
                  <div className='space-y-6 pt-6 sm:space-y-4 sm:pt-4'>
                    {filters.size.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className='flex items-center text-base sm:text-sm'
                      >
                        <input
                          id={`size-${optionIdx}`}
                          name='size[]'
                          defaultValue={option.value}
                          type='checkbox'
                          className='h-4 w-4 flex-shrink-0 rounded border-gray-300 text-green-600 focus:ring-green-500'
                          defaultChecked={option.checked}
                        />
                        <label
                          htmlFor={`size-${optionIdx}`}
                          className='ml-3 min-w-0 flex-1 text-gray-600'
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className='block font-medium'>Category</legend>
                  <div className='space-y-6 pt-6 sm:space-y-4 sm:pt-4'>
                    {filters.category.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className='flex items-center text-base sm:text-sm'
                      >
                        <input
                          id={`category-${optionIdx}`}
                          name='category[]'
                          defaultValue={option.value}
                          type='checkbox'
                          className='h-4 w-4 flex-shrink-0 rounded border-gray-300 text-green-600 focus:ring-green-500'
                          defaultChecked={option.checked}
                        />
                        <label
                          htmlFor={`category-${optionIdx}`}
                          className='ml-3 min-w-0 flex-1 text-gray-600'
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </Disclosure.Panel>
          <div className='col-start-1 row-start-1 py-4'>
            <div className='mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8'>
              <Menu as='div' className='relative inline-block'>
                <div className='flex'>
                  <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                    Sort
                    <ChevronDownIcon
                      className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </Disclosure>

        {/* Product grid */}
        <section
          aria-labelledby='products-heading'
          className='mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8'
        >
          <h2 id='products-heading' className='sr-only'>
            Products
          </h2>

          <div className='-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
            {products.map((product) => (
              <div
                key={product.id}
                className='group relative border-r border-b border-gray-200 p-4 sm:p-6'
              >
                <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <div className='pt-10 pb-4 text-center'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    <a href={product.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                    </a>
                  </h3>
                  <div className='mt-3 flex flex-col items-center'>
                    <p className='sr-only'>{product.rating} out of 5 stars</p>
                    <div className='flex items-center'>
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating > rating
                              ? 'text-yellow-400'
                              : 'text-gray-200',
                            'flex-shrink-0 h-5 w-5'
                          )}
                          aria-hidden='true'
                        />
                      ))}
                    </div>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.reviewCount} reviews
                    </p>
                  </div>
                  <p className='mt-4 text-base font-medium text-gray-900'>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <nav
          aria-label='Pagination'
          className='mx-auto mt-6 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8'
        >
          <div className='min-w-0 flex-1'>
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              Previous
            </Link>
          </div>
          <div className='hidden space-x-2 sm:flex'>
            {/* Current: "border-green-600 ring-1 ring-green-600", Default: "border-gray-300" */}
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              1
            </Link>
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              2
            </Link>
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-green-600 bg-white px-4 ring-1 ring-green-600 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              3
            </Link>
            <span className='inline-flex h-10 items-center px-1.5 text-gray-500'>
              ...
            </span>
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              8
            </Link>
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              9
            </Link>
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              10
            </Link>
          </div>
          <div className='flex min-w-0 flex-1 justify-end'>
            <Link
              to='#'
              className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-green-600'
            >
              Next
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default FlowersPage;
