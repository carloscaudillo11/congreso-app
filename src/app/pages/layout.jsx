import NavbarComponent from '../../components/Navbar.jsx';

export default function PagesLayout({ children }) {
  return (
    <div className="h-screen overflow-hidden bg-zinc-100">
      <header>
        <NavbarComponent />
      </header>
      <section className="mx-auto max-w-screen-2xl p-6 md:p-10">
        {children}
      </section>
    </div>
  );
}
