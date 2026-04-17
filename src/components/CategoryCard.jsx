import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className={`block ${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border border-gray-200 hover:border-gray-300`}>
      <div className="relative mb-4">
        <img src={category.image} alt={category.name} className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-xl shadow-md" />
        <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-3 py-1 shadow-md text-sm font-semibold text-gray-700">
          {category.images.length} designs
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;