import { Link, useParams, Navigate } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid';
import Footer from '../components/Footer';
import { getCategoryBySlug, getCategoryImagePaths } from '../data/categories';

const LEGACY_SLUGS = {
  '1': 'gates',
  '2': 'bathroom',
  '3': 'autobody',
  '4': 'others',
};

const Category = () => {
  const { slug } = useParams();

  if (LEGACY_SLUGS[slug]) {
    return <Navigate to={`/category/${LEGACY_SLUGS[slug]}`} replace />;
  }

  const category = getCategoryBySlug(slug);
  const images = category ? getCategoryImagePaths(category) : [];

  if (!category) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="font-display text-2xl font-bold text-slate-900">Category not found</h2>
        <p className="mt-2 text-slate-600">This design category does not exist.</p>
        <Link
          to="/#categories"
          className="mt-6 rounded-full bg-amber-500 px-6 py-2.5 font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Back to catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ImageGrid images={images} categoryName={category.name} folder={category.folder} />
      <Footer />
    </div>
  );
};

export default Category;
