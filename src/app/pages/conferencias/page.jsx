'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure
} from '@nextui-org/react';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import RegisterModal from '../../../components/RegisterModal.jsx';

const rows = [
  {
    horario: '10:00 - 11:00',
    conferencia: 'Web Development Trends 2021',
    conferencista: 'Michael Scott'
  },
  {
    horario: '11:00 - 12:00',
    conferencia: 'Big Data Analysis',
    conferencista: 'Dwight Schrute'
  },
  {
    horario: '12:00 - 13:00',
    conferencia: 'UI/UX Design',
    conferencista: 'Jim Halpert'
  },
  {
    horario: '13:00 - 14:00',
    conferencia: 'IA and Machine Learning',
    conferencista: 'Pam Beesly'
  }
];

const columns = [
  {
    label: 'HOARIO'
  },
  {
    label: 'CONFERENCIA'
  },
  {
    label: 'CONFERENCISTA'
  },
  {
    label: 'REGISTRAR'
  }
];

const NewPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-md">
      <div className="flex flex-col gap-10 sm:p-8 p-3">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Programa de Conferencias
          </h1>
        </div>
        <div>
          <Table isStriped aria-label="Example table with dynamic content">
            <TableHeader>
              {columns.map((column, key) => (
                <TableColumn key={key}>{column.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody emptyContent={'No rows to display.'}>
              {rows.map((row, key) => (
                <TableRow key={key}>
                  <TableCell>{row.horario}</TableCell>
                  <TableCell>{row.conferencia}</TableCell>
                  <TableCell>{row.conferencista}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      color="primary"
                      variant="light"
                      onPress={onOpen}
                      endContent={
                        <UserPlusIcon className="w-4 h-4 text-blue-500" />
                      }
                    >
                      Registrar
                    </Button>{' '}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <RegisterModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default NewPage;
