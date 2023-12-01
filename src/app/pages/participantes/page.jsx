import Link from 'next/link';
import Cards from '../../../components/Cards.jsx';
import { Button } from '@nextui-org/react';

const page = () => {
  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-md">
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-end">
          <Button color="primary">
            <Link href="/pages/participantes">Agregar</Link>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default page;
