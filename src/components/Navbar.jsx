'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavbarComponent = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: 'Inicio',
      link: '/'
    },
    {
      name: 'Participantes',
      link: '/pages/participantes'
    },
    {
      name: 'Registro',
      link: '/pages/participantes/new'
    },
    {
      name: 'Conferencias',
      link: '/pages/conferencias'
    }
  ];

  return (
    <Navbar disableAnimation isBordered height="5rem" className="p-2">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            radius="none"
            className="w-16 sm:w-16"
            alt="NextUI hero Image"
            src="https://leon.tecnm.mx/wp-content/uploads/2020/12/itl_leon.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <Image
          radius="none"
          className="w-24 sm:w-16"
          alt="NextUI hero Image"
          src="https://leon.tecnm.mx/wp-content/uploads/2020/12/itl_leon.png"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={pathname === item.link}>
            <Link href={item.link}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Image
          radius="none"
          className="w-24 sm:w-20"
          alt="NextUI hero Image"
          src="/LOGO_2.png"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} isActive={pathname === item.link}>
            <Link className="w-full" href={item.link}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
