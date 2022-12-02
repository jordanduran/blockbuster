import PropTypes from 'prop-types';

const ProductGridHeader = ({ title, subtext }) => {
  return (
    <div className='py-16 px-4 text-center sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
        {title}
      </h1>
      <p className='mx-auto mt-4 max-w-xl text-base text-gray-500'>{subtext}</p>
    </div>
  );
};

ProductGridHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};

export default ProductGridHeader;
