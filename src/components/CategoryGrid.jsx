import CategoryCard from './CategoryCard';
import SectionHeading from './SectionHeading';

const CategoryGrid = ({ categories }) => (
  <section id="categories" className="bg-slate-50 py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <SectionHeading
        label="Our Work"
        title="Browse Design Categories"
        subtitle="Select a category to view our completed fabrication and design projects."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.slug} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default CategoryGrid;

