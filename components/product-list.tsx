import { ProductWithCount } from 'pages';
import useSWR from 'swr';
import Item from './item';

interface ProductListProps {
  kind: 'favs' | 'sales' | 'purchases';
}

interface RecordResponse {
  // ok: boolean; typescirpt error
  [kind: string]: Record[];
}
interface Record {
  id: number;
  product: ProductWithCount;
}
export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<RecordResponse>(`/api/users/me/${kind}`);

  return data ? (
    <>
      {data[kind].map((recode) => (
        <Item
          id={recode.id}
          key={recode.id}
          title={recode.product.name}
          price={recode.product.price}
          hearts={recode.product._count.favs}
        />
      ))}
    </>
  ) : null;
}
