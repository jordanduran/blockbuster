import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
