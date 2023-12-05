'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Select,
  SelectItem
} from '@nextui-org/react';
import axios from '../app/api/axios.js';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const RegisterModal = ({ isOpen, onOpenChange, conferencia }) => {
  console.log(conferencia);
  const [participantes, setParticipantes] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [isSelectedYes, setIsSelectedYes] = React.useState(false);
  const [isSelectedNo, setIsSelectedNo] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const getConferencias = async () => {
      try {
        const res = await axios.get('/api/participantes');
        const data = res.data;
        setParticipantes(data);
      } catch (error) {
        console.error(error);
      }
    };
    getConferencias();
  }, []);

  const handleSelectionChange = (e) => {
    setValue(e.target.value);
  };

  const submit = async () => {
    if (isSelectedYes) {
      try {
        const res = await axios.post('/api/Asiste/Asiste', {
          fkParticipantes: value,
          fkConferencias: conferencia.idConf
        });
        if (res.status === 200) {
          toast.success('Registro exitoso');
          router.push(`/pages/asistencia/${conferencia.idConf}`);
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || 'Error al procesar la solicitud'
        );
      }
    } else {
      router.push(`pages/asistencia/${conferencia.idConf}`);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Registro a conferencia
            </ModalHeader>
            <ModalBody>
              <div className="flex gap-10">
                <h2 className="text-md font-black leading-7 text-gray-700">
                  Conferencia: {conferencia.nombreConf}
                </h2>
              </div>
              <Select
                label="Selecciona un participante"
                selectedKeys={[value]}
                onChange={handleSelectionChange}
              >
                {participantes.map((participante) => (
                  <SelectItem
                    key={participante.idParticipantes}
                    value={participante.idParticipantes}
                  >
                    {`${participante.nombre} ${participante.apellidos}`}
                  </SelectItem>
                ))}
              </Select>
              <div className="flex py-2 px-1 gap-20">
                <Checkbox
                  classNames={{
                    label: 'text-small'
                  }}
                  isSelected={isSelectedYes}
                  onValueChange={setIsSelectedYes}
                >
                  Si
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: 'text-small'
                  }}
                  isSelected={isSelectedNo}
                  onValueChange={setIsSelectedNo}
                >
                  No
                </Checkbox>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={submit}>
                Registrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
