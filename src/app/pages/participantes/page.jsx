import Link from 'next/link';
import Cards from '../../../components/Cards.jsx';

const page = () => {
  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-md">
      <div className="flex flex-col gap-6 sm:p-8 p-3">
        <div className="flex justify-end">
          <Link
            href="/pages/participantes/new"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          >
            Agregar
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
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
