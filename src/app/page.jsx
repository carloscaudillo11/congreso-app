import { Image } from '@nextui-org/react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-start justify-between p-6 lg:px-8">
        <a href="#" className="m-1.5 p-1.5 ml-8">
          <Image
            radius="none"
            className="w-20 sm:w-24"
            alt="NextUI hero Image"
            src="https://leon.tecnm.mx/wp-content/uploads/2020/12/itl_leon.png"
          />
        </a>
        <a href="#" className="m-1.5 p-1.5 mr-8">
          <Image
            radius="none"
            className="w-20 sm:w-32"
            alt="NextUI hero Image"
            src="/LOGO_2.png"
          />
        </a>
      </header>

      <div className="flex flex-grow justify-center items-center px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          {' '}
          {/* Establecer el ancho máximo aquí */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Congreso de Tecnologías de la Información
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            1er Congreso Nacional de Ingeniería Informática e Ingeniería en
            Tecnologías de la Información y Comunicaciones
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Exploraremos las últimas tendencias en inteligencia artificial,
            ciberseguridad y desarrollo de software.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/pages/participantes"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
            >
              Entrar
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Leer mas <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
