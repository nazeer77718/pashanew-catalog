import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import { getCategoryCover, getCategoryImagePaths } from '../data/categories';

const CategoryCard = ({ category, index }) => {
  const cover = getCategoryCover(category);
  const count = getCategoryImagePaths(category).length;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group block animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <article className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-amber-200">
        <div className="relative aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={cover}
            alt={category.name}
            className="h-full w-full"
            imgClassName="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${category.accent} opacity-0 transition duration-300 group-hover:opacity-40`}
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow">
            {count} designs
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition">
            {category.name}
          </h3>
          <p className="mt-1 text-sm text-slate-500">{category.tagline}</p>
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard;

