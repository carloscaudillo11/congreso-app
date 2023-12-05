import { Card, CardBody, Image } from '@nextui-org/react';

function CardsAsistencia({ asistentes }) {
  return (
    <>
      {asistentes.map((asistente, key) => (
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
                  src={asistente.avatarParticipante}
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground/90">
                      {asistente.nombreParticipante}{' '}
                      {asistente.apellidoParticipante}
                    </h3>
                    <div className="flex gap-1 items-center">
                      <Image
                        className="rounded-md"
                        src="/twitter.png"
                        width={30}
                        height={30}
                      />
                      <p>{asistente.twitterParticipante}</p>
                    </div>
                    <h1 className="text-lg font-medium mt-2">
                      {asistente.ocupacionParticipante}
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

export default CardsAsistencia;
