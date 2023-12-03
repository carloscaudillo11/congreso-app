import React from 'react';
import { Card, CardBody, Image } from '@nextui-org/react';

export default function App() {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center p-2">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <div className="flex gap-1 items-center">
                  <Image
                    className="rounded-md"
                    src="/twitter.png"
                    width={30}
                    height={30}
                  />
                  <p>#FrontendWithZoey</p>
                </div>
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
