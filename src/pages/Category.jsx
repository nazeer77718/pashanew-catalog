import { useParams } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid';
import categories from '../data/data';

const Category = () => {
  const { id } = useParams();
  const category = categories.find(cat => cat.id === parseInt(id));

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Category not found</h2>
          <p className="text-gray-600">Please check the URL or go back to the home page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ImageGrid images={category.images} categoryName={category.name} />
    </div>
  );
};

export default Category;