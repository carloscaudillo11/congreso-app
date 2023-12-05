import TableConferences from '../../../components/TableConferences.jsx';

const getConferencias = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/conferencias`, {
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

const NewPage = async () => {
  const conferencias = await getConferencias();
  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-md">
      <div className="flex flex-col gap-10 sm:p-8 p-3">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-700">
            Programa de Conferencias
          </h1>
        </div>
        <TableConferences conferencias={conferencias} />
      </div>
    </div>
  );
};

export default NewPage;
