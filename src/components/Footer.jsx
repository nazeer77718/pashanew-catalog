import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50 py-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-600 sm:flex-row sm:px-6 sm:text-left">
      <p>&copy; {new Date().getFullYear()} Pasha Engineering Works. All rights reserved.</p>
      <Link to="/" className="font-medium text-slate-800 hover:text-amber-600 transition">
        Design Catalog
      </Link>
    </div>
  </footer>
);

export default Footer;


