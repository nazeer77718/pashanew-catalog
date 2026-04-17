import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="/" className="text-3xl font-bold text-white hover:text-gray-200 transition-colors">
          Pasha Engineering Works
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;