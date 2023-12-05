import Link from 'next/link';
import Cards from '../../../components/Cards.jsx';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

const getParticipantes = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/participantes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
};

const ParticipantsPage = async () => {
  const participantes = await getParticipantes();

  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-md">
      <div className="flex flex-col gap-10 sm:p-8 p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-700">
            Listado de participantes
          </h1>
          <Link
            href="/pages/participantes/new"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          >
            Agregar
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
          {participantes.length === 0 ? (
            <div className="flex items-center gap-2 text-gray-500 justify-center">
              <PencilSquareIcon className="w-5 h-5" />
              <p>No hay datos aún</p>
            </div>
          ) : (
            <Cards participantes={participantes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticipantsPage;
