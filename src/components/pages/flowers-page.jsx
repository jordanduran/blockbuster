import { useCollection } from '../../hooks/useCollection';
import {
  Filters,
  ProductGridHeader,
  ProductGrid,
  Pagination,
} from '../shared/index';

const FlowersPage = () => {
  const { documents: flowers } = useCollection('flowers');

  return (
    <div className='bg-white'>
      <main className='pb-24'>
        <ProductGridHeader
          title={'Flowers'}
          subtext='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo.'
        />
        <Filters />
        <ProductGrid data={flowers} />
        <Pagination />
      </main>
    </div>
  );
};

export default FlowersPage;
