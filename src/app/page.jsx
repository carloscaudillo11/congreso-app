import { Image, Button } from '@nextui-org/react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col">
      <header>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <a href="#" className="-m-1.5 p-1.5  ml-8">
            <Image
              radius="none"
              className="w-20 sm:w-24"
              alt="NextUI hero Image"
              src="https://leon.tecnm.mx/wp-content/uploads/2020/12/itl_leon.png"
            />
          </a>
          <a href="#" className="-m-1.5 p-1.5 mr-8">
            <Image
              radius="none"
              className="w-20 sm:w-32"
              alt="NextUI hero Image"
              src="/LOGO_2.png"
            />
          </a>
        </nav>
      </header>

      <div className="flex-1 relative isolate px-6  lg:px-8">
        <div className="mx-auto max-w-3xl py-24 sm:py-36 lg:py-44">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Congreso de Tecnologias de la Información
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              1er Congreso Nacional de Ingeniería Informática e Ingeniería en
              Tecnologías de la Información y Comunicaciones
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button color="primary" variant="bordered">
                <Link href="/pages/participantes">Entrar</Link>
              </Button>
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
    </div>
  );
};

export default page;
