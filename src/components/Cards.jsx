'use client';
import { Card, CardBody, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

function Cards({ participantes }) {
  const router = useRouter();
  return (
    <>
      {participantes.map((participante, key) => (
        <Card
          isBlurred
          className="border-none bg-background/60 max-w-[610px]"
          shadow="sm"
          key={key}
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center p-2">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  src={participante.avatar}
                  width="100%"
                  onClick={() => {
                    router.push(
                      `/pages/participantes/edit/${participante.idParticipantes}`
                    );
                  }}
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground/90">
                      {participante.nombre} {participante.apellidos}
                    </h3>
                    <div className="flex gap-1 items-center">
                      <Image
                        className="rounded-md"
                        src="/twitter.png"
                        width={30}
                        height={30}
                      />
                      <p>{participante.twitter}</p>
                    </div>
                    <h1 className="text-lg font-medium mt-2">
                      {participante.ocupacion}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default Cards;
