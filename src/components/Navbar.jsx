import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/#categories', label: 'Designs' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="font-display text-lg font-bold text-white transition hover:text-amber-400 sm:text-xl"
        >
          Pasha Engineering Works
        </Link>
        {isHome && (
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <Link
          to="/#categories"
          className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Catalog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

