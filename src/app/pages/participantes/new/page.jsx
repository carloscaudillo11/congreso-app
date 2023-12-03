'use client';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { Card, Input, Button, CardBody, Image } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'sonner';
import axios from '../../../api/axios.js';

const RegisterPage = () => {
  const router = useRouter();
  const params = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      twitter: '',
      avatar: ''
    }
  });

  const avatares = [
    {
      name: 'Avatar 1',
      href: '/1.png'
    },
    {
      name: 'Avatar 2',
      href: '/2.png'
    },
    {
      name: 'Avatar 3',
      href: '/3.png'
    }
  ];

  const [acceptTerms, setAcceptTerms] = useState(false);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('twitter', data.twitter);
    formData.append('avatar', data.avatar);
    // console.log(formData.forEach((value, key) => console.log(key, value)));
    const fetch = async () => {
      if (params.id) {
        const res = await axios.put(
          `/menu/updateMenuElement/${params.id}`,
          formData,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        return res.data;
      } else {
        const res = await axios.post('/menu/createMenuElement', formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return res.data;
      }
    };
    const promise = fetch();
    toast.promise(promise, {
      loading: 'Loading...',
      success: () => {
        router.back();
        router.refresh();
        return params.id
          ? 'Elemento Actualizado Correctamente'
          : 'Elemento Registrado Correctamente';
      },
      error: (err) => {
        return err.response.data.message;
      }
    });
  };

  useEffect(() => {
    if (params.id) {
      const fetch = async () => {
        const res = await axios.get(`/menu/getMenuElement/${params.id}`, {
          withCredentials: true
        });
        return res.data;
      };
      const promise = fetch();
      promise
        .then((data) => {
          setValue('name', data.name);
          setValue('lastname', data.lastname);
          setValue('email', data.email);
          setValue('twitter', data.twitter);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.id, setValue]);

  return (
    <div className="mx-auto p-4 border border-gray-300 rounded-md flex flex-col items-center">
      <Card className="sm:w-2/5 sm:p-4">
        <CardBody>
          <form className="py-4 sm:px-3 px-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-16">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Registrar de Participantes
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Ingresa información clara y concisa del Participante.
                </p>

                <div className="mt-10 flex flex-col gap-6">
                  <Input
                    type="text"
                    variant="flat"
                    placeholder="Juan"
                    label="Nombre"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'El nombre es requerido'
                      }
                    })}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                  />

                  <Input
                    type="text"
                    variant="flat"
                    label="Apellidos"
                    placeholder="Perez Lopez"
                    {...register('lastname', {
                      required: {
                        value: true,
                        message: 'El apellido es requerido'
                      }
                    })}
                    isInvalid={!!errors.name}
                    errorMessage={errors.lastname?.message}
                  />

                  <Input
                    type="email"
                    variant="flat"
                    label="Email"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'El email es requerido'
                      },
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'El email no es valido'
                      }
                    })}
                    placeholder="you@example.com"
                    isInvalid={!!errors.name}
                    errorMessage={errors.email?.message}
                    startContent={
                      <EnvelopeIcon className="w-4 h-4 text-gray-500" />
                    }
                  />

                  <Input
                    type="text"
                    variant="flat"
                    label="Twitter"
                    placeholder="juanperez"
                    {...register('twitter', {
                      required: {
                        value: true,
                        message: 'El twitter es requerido'
                      }
                    })}
                    isInvalid={!!errors.name}
                    errorMessage={errors.twitter?.message}
                  />

                  <div className="flex gap-4 justify-between">
                    {avatares.map((avatar, index) => (
                      <div key={index} className="flex flex-col gap-3">
                        <Image
                          width={100}
                          alt={avatar.name}
                          src={avatar.href}
                          radius="full"
                        />
                        <div className="flex gap-4">
                          <input
                            type="radio"
                            {...register('avatar', {
                              required: {
                                value: true,
                                message: 'El avatar es requerido'
                              }
                            })}
                            value={avatar.href}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{avatar.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">
                      Leí y acepto los términos y condiciones
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button
                size="sm"
                type="button"
                color="primary"
                variant="light"
                onClick={() => {
                  router.back();
                }}
              >
                Cancelar
              </Button>
              <Button size="sm" type="submit" color="primary">
                Guardar
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
