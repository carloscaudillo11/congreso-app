'use client';
import CardsAsistentes from '../../../../components/CardsAsistencia.jsx';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';
import axios from '../../../api/axios.js';
import { useState, useEffect } from 'react';

const AsistentesPage = async () => {
  const [participantes, setParticipantes] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getParticipantes = async () => {
      try {
        const res = await axios.get(
          `/api/ConefrenciaParticipante?idConferencia=${params.id}`
        );
        const data = res.data;
        setParticipantes(data);
      } catch (error) {
        console.error(error);
      }
    };
    getParticipantes();
  }, [params.id]);

  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-md">
      <div className="flex flex-col gap-10 sm:p-8 p-3">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-700">
            Participantes registrados para la conferencia:{' '}
            {participantes[0]?.nombreConf}
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
          {participantes.length === 0 ? (
            <div className="flex items-center gap-2 text-gray-500 justify-center">
              <PencilSquareIcon className="w-5 h-5" />
              <p>No hay datos aún</p>
            </div>
          ) : (
            <CardsAsistentes asistentes={participantes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AsistentesPage;
