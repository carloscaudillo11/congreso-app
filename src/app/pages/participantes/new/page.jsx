'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'sonner';
import axios from '../../../api/axios.js';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { Card, Input, Button, CardBody, Image } from '@nextui-org/react';

const RegisterPage = () => {
  const router = useRouter();
  const params = useParams();

  const [nombre, setNombre] = useState('');
  const [nombreError, setNombreError] = useState('');

  const [apellidos, setApellidos] = useState('');
  const [apellidosError, setApellidosError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [twitter, setTwitter] = useState('');
  const [twitterError, setTwitterError] = useState('');

  const [avatar, setAvatar] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [ocupacionError, setOcupacionError] = useState('');

  const [acceptTerms, setAcceptTerms] = useState(false);

  const avatares = [
    { name: 'Avatar 1', href: '/1.png' },
    { name: 'Avatar 2', href: '/2.png' },
    { name: 'Avatar 3', href: '/3.png' }
  ];

  const handleCheckboxChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const validateForm = () => {
    let formIsValid = true;

    if (!nombre) {
      setNombreError('Por favor, ingresa un nombre.');
      formIsValid = false;
    } else {
      setNombreError('');
    }

    if (!apellidos) {
      setApellidosError('Por favor, ingresa los apellidos.');
      formIsValid = false;
    } else {
      setApellidosError('');
    }

    if (!email) {
      setEmailError('Por favor, ingresa un correo electrónico.');
      formIsValid = false;
    } else {
      setEmailError('');
    }

    if (!ocupacion) {
      setOcupacionError('Por favor, ingresa la ocupación.');
      formIsValid = false;
    } else {
      setOcupacionError('');
    }

    if (!twitter) {
      setTwitterError('Por favor, ingresa el twitter.');
      formIsValid = false;
    } else {
      setTwitterError('');
    }

    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      nombre,
      apellidos,
      email,
      twitter,
      avatar,
      ocupacion
    };

    try {
      // eslint-disable-next-line no-unused-vars
      const res = params.id
        ? await axios.put(`/api/participante?id=${params.id}`, data)
        : await axios.post(`/api/participante`, data);

      toast.success(
        params.id
          ? 'Participante Actualizado Correctamente'
          : 'Participante Registrado Correctamente'
      );
      router.push('/pages/participantes');
      router.refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Error al procesar la solicitud'
      );
    }
  };

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/api/participante?id=${params.id}`);
          const data = res.data;

          setNombre(data.nombre);
          setApellidos(data.apellidos);
          setEmail(data.email);
          setTwitter(data.twitter);
          setAvatar(data.avatar);
          setOcupacion(data.ocupacion);
          setAcceptTerms(true);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [params.id]);

  return (
    <div className="mx-auto p-4 border border-gray-300 rounded-md flex flex-col items-center">
      <Card className="sm:w-2/5 sm:p-4">
        <CardBody>
          <form className="py-4 sm:px-3 px-2" onSubmit={handleSubmit}>
            <div className="space-y-16">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-lg font-semibold leading-7 text-gray-700">
                  Registro de Participantes
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Ingresa información clara y concisa del Participante.
                </p>

                <div className="mt-10 flex flex-col gap-6">
                  <Input
                    type="text"
                    label="Nombre"
                    value={nombre}
                    onValueChange={setNombre}
                    errorMessage={nombreError}
                    isInvalid={Boolean(nombreError)}
                  />

                  <Input
                    type="text"
                    label="Apellidos"
                    value={apellidos}
                    onValueChange={setApellidos}
                    errorMessage={apellidosError}
                    isInvalid={Boolean(apellidosError)}
                  />

                  <Input
                    type="email"
                    label="Email"
                    value={email}
                    onValueChange={setEmail}
                    endContent={
                      <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                    }
                    errorMessage={emailError}
                    isInvalid={Boolean(emailError)}
                  />

                  <Input
                    type="text"
                    label="Ocupación"
                    value={ocupacion}
                    onValueChange={setOcupacion}
                    errorMessage={ocupacionError}
                    isInvalid={Boolean(ocupacionError)}
                  />

                  <Input
                    type="text"
                    label="Twitter"
                    value={twitter}
                    onValueChange={setTwitter}
                    errorMessage={twitterError}
                    isInvalid={Boolean(twitterError)}
                  />

                  <div className="flex gap-4 justify-between">
                    {avatares.map((avata, index) => (
                      <div key={index} className="flex flex-col gap-3">
                        <Image
                          width={100}
                          alt={avata.name}
                          src={avata.href}
                          radius="full"
                        />
                        <div className="flex gap-4">
                          <input
                            type="radio"
                            name="avatar"
                            value={avata.href}
                            onChange={() => setAvatar(avata.href)}
                            checked={avata.href === avatar}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{avata.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {!params.id && (
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">
                        Leí y acepto los términos y condiciones
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button
                size="sm"
                type="button"
                color="primary"
                variant="light"
                onClick={() => router.back()}
              >
                Cancelar
              </Button>
              <Button
                size="sm"
                type="submit"
                color="primary"
                isDisabled={!acceptTerms}
              >
                {params.id ? 'Actualizar' : 'Registrar'}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
