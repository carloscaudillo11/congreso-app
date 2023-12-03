import NavbarComponent from '../../components/Navbar.jsx';
import { Toaster } from 'sonner';

export default function PagesLayout({ children }) {
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <div className=" z-0 relative flex h-screen overflow-hidden bg-zinc-100">
        <div className="z-0 relative flex flex-1 flex-col overflow-x-hidden">
          <header>
            <NavbarComponent />
          </header>
          <main className="custom-scrollbar overflow-y-auto">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
