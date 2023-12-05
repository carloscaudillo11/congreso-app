'use client';
import React, { useState } from 'react';
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
import RegisterModal from '../components/RegisterModal.jsx';
import { format } from 'date-fns';

const columns = [
  {
    label: 'HORARIO'
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

const TableConferences = ({ conferencias }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedConference, setSelectedConference] = useState(null);

  const handleOpenModal = (conference) => {
    setSelectedConference(conference);
    onOpen();
  };

  return (
    <>
      <RegisterModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        conferencia={selectedConference}
      />
      <Table isStriped aria-label="Example table with dynamic content">
        <TableHeader>
          {columns.map((column, key) => (
            <TableColumn key={key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent={'No rows to display.'}>
          {conferencias.map((row, key) => (
            <TableRow key={key}>
              <TableCell>
                {format(new Date(row.horario), 'dd/MM/yyyy HH:mm')}
              </TableCell>
              <TableCell>{row.nombreConf}</TableCell>
              <TableCell>{row.conferencista}</TableCell>
              <TableCell>
                <Button
                  size="sm"
                  color="primary"
                  variant="light"
                  onClick={() => handleOpenModal(row)}
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
    </>
  );
};

export default TableConferences;
