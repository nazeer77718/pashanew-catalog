import { Link } from 'react-router-dom';
import { useState } from 'react';

const ImageGrid = ({ images, categoryName }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = (event) => {
    if (event.target === event.currentTarget || event.target.closest('button')) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4">
          ← Back to Categories
        </Link>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">{categoryName}</h2>
        <p className="text-center text-gray-600 mt-2">Explore our collection of {images.length} designs</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={() => openModal(image)}>
            <img src={image} alt={`${categoryName} ${index + 1}`} className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Design {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4" onClick={closeModal}>
          <div className="relative max-w-5xl w-full max-h-full">
            <img src={selectedImage} alt="Enlarged design" className="w-full h-auto max-h-[90vh] object-contain rounded-3xl shadow-2xl" />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;